import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const root = process.cwd();
const run = promisify(execFile);
const pageImageRoot = path.join(root, "assets", "images", "pages");
const manifestPath = path.join(pageImageRoot, "manifest.json");
const targetPattern = /class=["'][^"']*(?:inner-hero|utility-page)/;

const files = (await fs.readdir(root))
  .filter((file) => file.endsWith(".html"))
  .filter((file) => targetPattern.testSync?.(file) ?? true);

const targetFiles = [];
for (const file of files) {
  const html = await fs.readFile(path.join(root, file), "utf8");
  if (targetPattern.test(html)) targetFiles.push(file);
}

const photos = await fetchUnsplashPhotos(targetFiles.length);
const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
const used = new Set(manifest.map((item) => item.unsplashId));

let index = 0;
for (const file of targetFiles.sort()) {
  const slug = pageSlug(file);
  const dir = path.join(pageImageRoot, slug);
  await fs.mkdir(dir, { recursive: true });

  let photo = photos[index++];
  while (photo && used.has(photo.id)) photo = photos[index++];
  if (!photo) throw new Error(`No fresh hero image left for ${file}`);
  used.add(photo.id);

  const relativePath = `assets/images/pages/${slug}/${slug}-hero.jpg`;
  const destination = path.join(root, relativePath);
  console.log(`Downloading ${relativePath}`);
  await downloadImage(photo, destination);

  let html = await fs.readFile(path.join(root, file), "utf8");
  html = addBodyHeroVar(html, relativePath);
  await fs.writeFile(path.join(root, file), html);

  manifest.push({
    page: file,
    file: relativePath,
    category: "page-hero",
    unsplashId: photo.id,
    author: photo.author,
    authorUrl: photo.authorUrl,
    sourceUrl: photo.sourceUrl,
    query: photo.query,
  });
}

await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Done. Added ${targetFiles.length} page hero images.`);

function pageSlug(file) {
  return path.basename(file, ".html").toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function addBodyHeroVar(html, relativePath) {
  const declaration = `--page-hero-image:url('${relativePath}');`;
  return html.replace(/<body([^>]*)>/, (match, attrs) => {
    if (/style=/.test(attrs)) {
      return match.replace(/style="([^"]*)"/, (_, style) => `style="${declaration}${style}"`);
    }
    return `<body${attrs} style="${declaration}">`;
  });
}

async function fetchUnsplashPhotos(count) {
  const queries = [
    "modern architecture house",
    "architectural interior",
    "contemporary building facade",
    "luxury interior architecture",
    "minimal concrete architecture",
  ];
  const photos = [];
  const seenIds = new Set();
  let queryIndex = 0;
  let page = 1;

  while (photos.length < count + 20) {
    const query = queries[queryIndex % queries.length];
    const url = new URL("https://unsplash.com/napi/search/photos");
    url.searchParams.set("query", query);
    url.searchParams.set("per_page", "20");
    url.searchParams.set("page", String(page));

    const payload = JSON.parse(await curlText(url.toString()));
    for (const photo of payload.results || []) {
      const raw = photo.urls?.raw || photo.urls?.regular;
      if (!raw || raw.includes("plus.unsplash.com") || seenIds.has(photo.id)) continue;
      seenIds.add(photo.id);
      photos.push({
        id: photo.id,
        query,
        author: photo.user?.name || "Unsplash contributor",
        authorUrl: photo.user?.links?.html || "",
        sourceUrl: photo.links?.html || "",
        downloadUrl: buildImageUrl(raw),
      });
    }

    queryIndex += 1;
    if (queryIndex % queries.length === 0) page += 1;
    if (page > 20) throw new Error("Could not find enough unique page hero images");
  }

  return photos;
}

function buildImageUrl(raw) {
  const url = new URL(raw);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("q", "84");
  url.searchParams.set("w", "1600");
  url.searchParams.set("h", "720");
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
  if (buffer.length < 10_000) throw new Error(`Downloaded image is too small: ${destination}`);
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
