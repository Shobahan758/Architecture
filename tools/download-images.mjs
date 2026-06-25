import fs from "fs";
import https from "https";
import path from "path";

const images = [
  ["assets/images/hero/hero-01.jpg", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=82"],
  ["assets/images/hero/hero-02.jpg", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=82"],
  ["assets/images/hero/hero-03.jpg", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=82"],
  ["assets/images/hero/hero-04.jpg", "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=82"],
  ["assets/images/hero/hero-05.jpg", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=82"],
  ["assets/images/hero/hero-06.jpg", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=82"],
  ["assets/images/hero/hero-07.jpg", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=82"],
  ["assets/images/hero/hero-08.jpg", "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=82"],
  ["assets/images/hero/hero-09.jpg", "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=82"],
  ["assets/images/hero/hero-10.jpg", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=82"],
  ["assets/images/projects/project-01.jpg", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=82"],
  ["assets/images/projects/project-02.jpg", "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1000&q=82"],
  ["assets/images/projects/project-03.jpg", "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=82"],
  ["assets/images/projects/project-04.jpg", "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=82"],
  ["assets/images/projects/project-05.jpg", "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1000&q=82"],
  ["assets/images/projects/project-06.jpg", "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=82"],
  ["assets/images/team/team-01.jpg", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=82"],
  ["assets/images/team/team-02.jpg", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=82"],
  ["assets/images/team/team-03.jpg", "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=82"],
  ["assets/images/team/team-04.jpg", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=82"],
  ["assets/images/blog/blog-01.jpg", "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=82"],
  ["assets/images/blog/blog-02.jpg", "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=900&q=82"],
  ["assets/images/blog/blog-03.jpg", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=82"],
  ["assets/images/shop/product-01.jpg", "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800&q=82"],
  ["assets/images/shop/product-02.jpg", "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=82"],
  ["assets/images/shop/product-03.jpg", "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=82"],
  ["assets/images/shop/product-04.jpg", "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=800&q=82"]
];

function placeholder(file) {
  const label = path.basename(file, ".jpg").replace(/-/g, " ");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#e8ded0"/><path d="M0 620 280 460l180 80 230-210 510 290v180H0z" fill="#b78a54" opacity=".42"/><path d="M150 210h320v290H150zM540 150h510v350H540z" fill="none" stroke="#171512" stroke-width="20" opacity=".35"/><text x="70" y="725" font-family="Arial" font-size="48" fill="#171512">${label}</text></svg>`;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, svg);
}

function download(file, url) {
  return new Promise((resolve) => {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    const target = fs.createWriteStream(file);
    https.get(url, { headers: { "User-Agent": "Nexora Template Asset Downloader" } }, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        target.close();
        fs.rmSync(file, { force: true });
        download(file, res.headers.location).then(resolve);
        return;
      }
      if (res.statusCode !== 200) {
        target.close();
        fs.rmSync(file, { force: true });
        placeholder(file);
        resolve(false);
        return;
      }
      res.pipe(target);
      target.on("finish", () => target.close(() => resolve(true)));
    }).on("error", () => {
      target.close();
      fs.rmSync(file, { force: true });
      placeholder(file);
      resolve(false);
    });
  });
}

let ok = 0;
for (const [file, url] of images) {
  if (await download(file, url)) ok += 1;
}
console.log(`Downloaded ${ok}/${images.length} images. Fallback placeholders created where needed.`);
