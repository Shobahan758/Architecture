import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const root = process.cwd();
const run = promisify(execFile);
const htmlFiles = (await fs.readdir(root))
  .filter((file) => file.endsWith(".html"))
  .sort();

const imageRefPattern = /assets\/images\/[^'",)\s]+?\.(?:jpg|jpeg|png|webp)/gi;
const pageImageRoot = path.join(root, "assets", "images", "pages");
const manifestPath = path.join(pageImageRoot, "manifest.json");

const queries = {
  team: [
    "architect portrait professional",
    "interior designer portrait",
    "creative director portrait",
    "business portrait studio",
    "designer portrait office",
  ],
  shop: [
    "modern furniture design",
    "designer chair interior",
    "minimal lamp furniture",
    "luxury sofa interior",
    "home decor product",
  ],
  blog: [
    "architecture details",
    "interior material palette",
    "architectural lighting",
    "design studio desk",
    "modern interior detail",
  ],
  architecture: [
    "modern architecture house",
    "luxury interior design",
    "contemporary residential architecture",
    "minimalist interior architecture",
    "architectural exterior facade",
    "modern office interior",
    "concrete architecture",
    "wood interior architecture",
    "glass house architecture",
    "architectural staircase interior",
    "hotel interior design",
    "modern villa architecture",
  ],
};

const required = { team: 0, shop: 0, blog: 0, architecture: 0 };
const pageRefs = new Map();

for (const file of htmlFiles) {
  const source = await fs.readFile(path.join(root, file), "utf8");
  const refs = [...source.matchAll(imageRefPattern)].map((match) => match[0]);
  pageRefs.set(file, refs);
  for (const ref of refs) required[categoryFor(ref)] += 1;
}

function categoryFor(ref) {
  if (ref.includes("/team/")) return "team";
  if (ref.includes("/shop/") || ref.includes("product-")) return "shop";
  if (ref.includes("/blog/")) return "blog";
  return "architecture";
}

function pageSlug(file) {
  return path.basename(file, ".html").toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

async function fetchUnsplashPhotos(category, count) {
  const photos = [];
  const seenIds = new Set();
  let queryIndex = 0;
  let page = 1;

  while (photos.length < count) {
    const query = queries[category][queryIndex % queries[category].length];
    const url = new URL("https://unsplash.com/napi/search/photos");
    url.searchParams.set("query", query);
    url.searchParams.set("per_page", "20");
    url.searchParams.set("page", String(page));

    const payload = JSON.parse(await curlText(url.toString()));
    const results = Array.isArray(payload.results) ? payload.results : [];

    for (const photo of results) {
      const raw = photo.urls?.raw || photo.urls?.regular;
      if (!raw || raw.includes("plus.unsplash.com") || seenIds.has(photo.id)) continue;
      seenIds.add(photo.id);
      photos.push({
        id: photo.id,
        category,
        query,
        author: photo.user?.name || "Unsplash contributor",
        authorUrl: photo.user?.links?.html || "",
        sourceUrl: photo.links?.html || "",
        downloadUrl: buildImageUrl(raw, category),
      });
      if (photos.length >= count) break;
    }

    queryIndex += 1;
    if (queryIndex % queries[category].length === 0) page += 1;

    if (page > 30) {
      throw new Error(`Could not find enough unique Unsplash images for ${category}`);
    }
  }

  return photos;
}

function buildImageUrl(raw, category) {
  const url = new URL(raw);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("q", "82");
  url.searchParams.set("w", category === "team" ? "900" : "1400");
  url.searchParams.set("h", category === "team" ? "1100" : "950");
  return url.toString();
}

async function downloadImage(photo, destination) {
  const { stdout } = await run("curl", [
    "-L",
    "--fail",
    "--silent",
    "--show-error",
    "--max-time",
    "45",
    photo.downloadUrl,
  ], { encoding: "buffer", maxBuffer: 25 * 1024 * 1024 });
  const buffer = Buffer.from(stdout);
  if (buffer.length < 10_000) {
    throw new Error(`Downloaded image is unexpectedly small: ${destination}`);
  }
  await fs.writeFile(destination, buffer);
}

async function curlText(url) {
  const { stdout } = await run("curl", [
    "-L",
    "--fail",
    "--silent",
    "--show-error",
    "--max-time",
    "30",
    url,
  ], { maxBuffer: 10 * 1024 * 1024 });
  return stdout;
}

console.log("Required image counts:", required);

const pools = {};
for (const [category, count] of Object.entries(required)) {
  pools[category] = await fetchUnsplashPhotos(category, count);
  console.log(`Fetched ${pools[category].length} ${category} image URLs`);
}

await fs.mkdir(pageImageRoot, { recursive: true });
const manifest = [];

for (const file of htmlFiles) {
  const refs = pageRefs.get(file);
  if (!refs.length) continue;

  const slug = pageSlug(file);
  const dir = path.join(pageImageRoot, slug);
  await fs.rm(dir, { recursive: true, force: true });
  await fs.mkdir(dir, { recursive: true });

  let html = await fs.readFile(path.join(root, file), "utf8");
  let counter = 1;

  for (const ref of refs) {
    const category = categoryFor(ref);
    const photo = pools[category].shift();
    if (!photo) throw new Error(`No image left for ${category}`);

    const fileName = `${slug}-${String(counter).padStart(2, "0")}.jpg`;
    const relativePath = `assets/images/pages/${slug}/${fileName}`;
    const destination = path.join(dir, fileName);

    console.log(`Downloading ${relativePath}`);
    await downloadImage(photo, destination);

    html = html.replace(ref, relativePath);
    manifest.push({
      page: file,
      file: relativePath,
      category,
      unsplashId: photo.id,
      author: photo.author,
      authorUrl: photo.authorUrl,
      sourceUrl: photo.sourceUrl,
      query: photo.query,
    });
    counter += 1;
  }

  await fs.writeFile(path.join(root, file), html);
}

await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Done. Wrote ${manifest.length} unique images and ${manifestPath}`);
