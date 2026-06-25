import fs from "fs";
import path from "path";

const root = process.cwd();
const out = (...parts) => path.join(root, ...parts);
const ensure = (dir) => fs.mkdirSync(out(dir), { recursive: true });
const write = (file, content) => {
  fs.mkdirSync(path.dirname(out(file)), { recursive: true });
  fs.writeFileSync(out(file), content.trimStart() + "\n");
};

["assets/css", "assets/js", "assets/images/projects", "assets/images/team", "assets/images/blog", "assets/images/shop", "assets/images/hero", "assets/images/placeholder", "documentation"].forEach(ensure);

const demos = [
  {
    file: "index.html",
    label: "Home 01",
    title: "Modern Architecture Studio",
    eyebrow: "Precision-led architecture",
    headline: "Quiet buildings shaped for luminous modern living.",
    text: "Nexora creates refined homes, galleries, hospitality spaces, and civic interiors with a disciplined balance of material, light, and proportion.",
    accent: "#b78a54",
    dark: "#171512",
    soft: "#f4efe8",
    image: "assets/images/hero/hero-01.jpg",
    hero: "hero-split",
    anim: "Measured reveals and warm material fades",
    stats: ["18 Years", "240 Projects", "31 Awards"],
    services: ["Residential Architecture", "Interior Planning", "Project Supervision"],
  },
  {
    file: "home-02.html",
    label: "Home 02",
    title: "Luxury Interior Design",
    eyebrow: "Private residences and suites",
    headline: "Layered interiors with hotel-grade calm and character.",
    text: "A soft-luxury interior demo built for studios designing penthouses, villas, boutique hotels, and high-touch living environments.",
    accent: "#9f6b5f",
    dark: "#211a18",
    soft: "#f7eeee",
    image: "assets/images/hero/hero-02.jpg",
    hero: "hero-editorial",
    anim: "Silky image masks and soft caption rises",
    stats: ["42 Villas", "16 Cities", "98% Repeat"],
    services: ["Concept Styling", "Furniture Sourcing", "Turnkey Interiors"],
  },
  {
    file: "home-03.html",
    label: "Home 03",
    title: "Minimal Architect Projects",
    eyebrow: "Selected works",
    headline: "A restrained Projects for architects who let space speak.",
    text: "Designed for solo architects and boutique ateliers, this homepage puts work, drawings, and philosophy into a clean grid.",
    accent: "#64706a",
    dark: "#111513",
    soft: "#eef2ef",
    image: "assets/images/hero/hero-03.jpg",
    hero: "hero-minimal",
    anim: "Thin-line motion and crisp grid transitions",
    stats: ["64 Studies", "28 Built", "11 Shortlists"],
    services: ["Site Studies", "Design Development", "Competition Boards"],
  },
  {
    file: "home-04.html",
    label: "Home 04",
    title: "Construction Company",
    eyebrow: "Build with certainty",
    headline: "Commercial construction delivered with accountable craft.",
    text: "A strong, operations-ready construction demo for contractors, builders, infrastructure teams, and project management groups.",
    accent: "#d49b32",
    dark: "#17191a",
    soft: "#f5f1e8",
    image: "assets/images/hero/hero-04.jpg",
    hero: "hero-industrial",
    anim: "Bold counters, diagonal wipes, and practical motion",
    stats: ["520K Sqft", "74 Crews", "0.8 EMR"],
    services: ["General Contracting", "Preconstruction", "Site Management"],
  },
  {
    file: "home-05.html",
    label: "Home 05",
    title: "Furniture & Decor Studio",
    eyebrow: "Objects for lived-in rooms",
    headline: "Furniture, decor, and spaces composed as one experience.",
    text: "A tactile homepage for furniture studios, makers, decor boutiques, and interior product brands with shop-ready sections.",
    accent: "#8b6f4e",
    dark: "#181410",
    soft: "#f5f0e7",
    image: "assets/images/hero/hero-05.jpg",
    hero: "hero-catalog",
    anim: "Product-card floats and tactile hover depth",
    stats: ["320 Pieces", "46 Makers", "12 Collections"],
    services: ["Custom Furniture", "Room Curation", "Decor Procurement"],
  },
  {
    file: "home-06.html",
    label: "Home 06",
    title: "Real Estate Interior",
    eyebrow: "Design that sells property",
    headline: "Model apartments and sales spaces with instant clarity.",
    text: "For developers and real estate interior teams needing polished show units, lobbies, amenities, and buyer journey spaces.",
    accent: "#4f7c8a",
    dark: "#12191c",
    soft: "#edf4f5",
    image: "assets/images/hero/hero-06.jpg",
    hero: "hero-panorama",
    anim: "Panoramic crops, clean cards, and map-like transitions",
    stats: ["6.2M Sqft", "38 Towers", "21 Launches"],
    services: ["Show Units", "Amenity Design", "Sales Gallery"],
  },
  {
    file: "home-07.html",
    label: "Home 07",
    title: "Dark Creative Architecture",
    eyebrow: "Nocturne design lab",
    headline: "Atmospheric architecture for brands, culture, and nightlife.",
    text: "A dark creative demo with dramatic imagery, kinetic typography, and gallery-style presentation for bold studios.",
    accent: "#c7a466",
    dark: "#0c0c0d",
    soft: "#181818",
    image: "assets/images/hero/hero-07.jpg",
    hero: "hero-dark",
    anim: "High-contrast fades and cinematic slides",
    stats: ["88 Concepts", "19 Venues", "27 Features"],
    services: ["Experiential Design", "Brand Environments", "Lighting Concepts"],
  },
];

const projects = [
  ["Atrium House", "Residential", "Lisbon", "assets/images/projects/project-01.jpg"],
  ["Stone Gallery", "Cultural", "Copenhagen", "assets/images/projects/project-02.jpg"],
  ["Linear Office", "Commercial", "Berlin", "assets/images/projects/project-03.jpg"],
  ["Courtyard Villa", "Interior", "Dubai", "assets/images/projects/project-04.jpg"],
  ["Harbor Loft", "Renovation", "New York", "assets/images/projects/project-05.jpg"],
  ["Botanical Terrace", "Exterior", "Singapore", "assets/images/projects/project-06.jpg"],
];

const team = [
  ["Mira Collins", "Principal Architect", "assets/images/team/team-01.jpg"],
  ["Jonas Reed", "Interior Director", "assets/images/team/team-02.jpg"],
  ["Nadia Karim", "Project Strategist", "assets/images/team/team-03.jpg"],
  ["Theo Alvarez", "Construction Lead", "assets/images/team/team-04.jpg"],
];

const posts = [
  ["How natural light changes a floor plan", "Planning", "assets/images/blog/blog-01.jpg"],
  ["Material palettes that age beautifully", "Materials", "assets/images/blog/blog-02.jpg"],
  ["Designing better client presentations", "Studio", "assets/images/blog/blog-03.jpg"],
];

const products = [
  ["Linea Lounge Chair", "$680", "assets/images/shop/product-01.jpg"],
  ["Oak Ribbed Console", "$1,240", "assets/images/shop/product-02.jpg"],
  ["Travertine Table Lamp", "$320", "assets/images/shop/product-03.jpg"],
  ["Modular Linen Sofa", "$2,850", "assets/images/shop/product-04.jpg"],
];

const nav = `
<header class="site-header" data-header>
  <nav class="navbar navbar-expand-xl">
    <div class="container-fluid px-lg-5">
      <a class="navbar-brand" href="index.html"><span>Ne</span>xora</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item dropdown has-mega">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Home</a>
            <div class="dropdown-menu mega-menu">
              <div class="row g-3">
                ${demos.map((d) => `<div class="col-sm-6 col-lg-4"><a class="mega-link" href="${d.file}"><small>${d.label}</small>${d.title}</a></div>`).join("")}
              </div>
            </div>
          </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Abouts</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="about.html">About</a></li>
                <li><a class="dropdown-item" href="about-1.html">About1</a></li>
                <li><a class="dropdown-item" href="about-2.html">About2</a></li>
              </ul>
            </li>
           <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="services.html">Services</a></li>
                <li><a class="dropdown-item" href="services-2.html">Services2</a></li>
                <li><a class="dropdown-item" href="service-details.html">Service Details</a></li>
                <li><a class="dropdown-item" href="service-details-2.html">Service Details2</a></li>
              </ul>
            </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Projects</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="projects.html">Projects</a></li>
                <li><a class="dropdown-item" href="projects-1.html">Projects1</a></li>
                <li><a class="dropdown-item" href="project-details.html">Project Details</a></li>
              </ul>
          </li>
           <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="team.html">Team</a></li>
                <li><a class="dropdown-item" href="team-details.html">Team Details</a></li>
                <li><a class="dropdown-item" href="pricing.html">Pricing</a></li>
                <li><a class="dropdown-item" href="faq.html">FAQ</a></li>
                <li><a class="dropdown-item" href="shop.html">Shop</a></li>
                 <li><a class="dropdown-item" href="shop-details.html">Shop-details</a></li>
                <li><a class="dropdown-item" href="404.html">404 Page</a></li>
                
              </ul>
            </li>
         
         <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">BLOG</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="blog.html">Blog</a></li>
                <li><a class="dropdown-item" href="blog-1.html">Blog1</a></li>
                <li><a class="dropdown-item" href="blog-details.html">Blog Details</a></li>
              </ul>
            </li>
          <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        </ul>
        <button class="theme-toggle" type="button" data-theme-toggle aria-label="Toggle dark mode">
          <i class="bi bi-moon-stars"></i>
        </button>
        <a class="btn btn-accent d-none d-xl-inline-flex" href="contact.html">Start a Project</a>
      </div>
    </div>
  </nav>
</header>`;

function head(title, desc = "Premium architecture and interior design HTML5 template.") {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${desc}">
  <meta name="keywords" content="architecture, interior design, construction, furniture, Projects, HTML5 template">
  <meta name="author" content="Nexora Studio">
  <title>${title} | Nexora Architecture Template</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
  <script>
    (function () {
      if (localStorage.getItem("nexora-theme") === "dark") document.documentElement.dataset.theme = "dark";
    })();
  </script>
  <link rel="stylesheet" href="assets/css/main.css">
</head>`;
}

function foot() {
  return `<footer class="footer-section">
  <div class="container">
    <div class="row g-5 align-items-start">
      <div class="col-lg-4">
        <a class="footer-brand" href="index.html"><span>Ne</span>xora</a>
        <p>Premium HTML5 template for architecture, interiors, construction, furniture studios, and creative agencies.</p>
        <div class="socials"><a href="#"><i class="bi bi-instagram"></i></a><a href="#"><i class="bi bi-behance"></i></a><a href="#"><i class="bi bi-dribbble"></i></a><a href="#"><i class="bi bi-linkedin"></i></a></div>
      </div>
      <div class="col-6 col-lg-2"><h3>Studio</h3><a href="about.html">About</a><a href="team.html">Team</a><a href="pricing.html">Pricing</a><a href="faq.html">FAQ</a></div>
      <div class="col-6 col-lg-2"><h3>Work</h3><a href="services.html">Services</a><a href="projects.html">Projects</a><a href="shop.html">Shop</a><a href="blog.html">Insights</a></div>
      <div class="col-lg-4"><h3>Newsletter</h3><p>Monthly notes on design, material culture, and project delivery.</p><form class="newsletter-form"><input type="email" placeholder="Email address" aria-label="Email address"><button type="submit"><i class="bi bi-arrow-right"></i></button></form></div>
    </div>
    <div class="footer-bottom"><span>Copyright 2026 Nexora. All rights reserved.</span><span>HTML5 Bootstrap Template</span></div>
  </div>
</footer>
<button class="scroll-top" data-scroll-top aria-label="Back to top"><i class="bi bi-arrow-up"></i></button>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/main.js"></script>
</body>
</html>`;
}

function sectionTitle(eyebrow, title, text = "") {
  return `<div class="section-heading editorial-section-heading reveal">
    <span class="eyebrow">${eyebrow}</span>
    <h2>${title}</h2>
    ${text ? `<p>${text}</p>` : ""}
  </div>`;
}

function testimonialSlider() {
  return `<section class="section testimonial-modern testimonial-luxury">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-12">
          <div class="section-heading editorial-section-heading testimonial-modern-head reveal">
            <span class="eyebrow">Testimonials</span>
            <h2>Clients notice the quiet precision</h2>
            <p>Two client notes stay in view while the next stories glide in automatically.</p>
          </div>
          <div class="testimonial-slider testimonial-pair-slider reveal" data-testimonial-slider>
            <div class="testimonial-track">
              <article class="testimonial-slide is-active"><i class="bi bi-quote"></i><p>Nexora translated a complex brief into a space that feels inevitable. The finished rooms have a presence we could not have scripted.</p><div><img src="assets/images/team/team-01.jpg" alt="Elena Morris"><span><strong>Elena Morris</strong>Founder, Northline Homes</span></div></article>
              <article class="testimonial-slide"><i class="bi bi-quote"></i><p>The team kept budget, drawings, and site decisions aligned. We always knew what was happening and why it mattered.</p><div><img src="assets/images/team/team-02.jpg" alt="Jonas Reed"><span><strong>Jonas Reed</strong>Private Residence Client</span></div></article>
              <article class="testimonial-slide"><i class="bi bi-quote"></i><p>Every material choice felt calm and precise. The handover was polished, practical, and genuinely easy to live with.</p><div><img src="assets/images/team/team-03.jpg" alt="Nadia Karim"><span><strong>Nadia Karim</strong>Hospitality Director</span></div></article>
              <article class="testimonial-slide"><i class="bi bi-quote"></i><p>They designed a home that looks refined without feeling fragile. The process felt thoughtful from first meeting to styling day.</p><div><img src="assets/images/team/team-04.jpg" alt="Theo Alvarez"><span><strong>Theo Alvarez</strong>Villa Owner</span></div></article>
            </div>
            <div class="testimonial-dots" aria-label="Testimonial controls"><button class="is-active" type="button" data-testimonial-dot="0" aria-label="Show testimonials 1 and 2"></button><button type="button" data-testimonial-dot="2" aria-label="Show testimonials 3 and 4"></button></div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function projectCards(limit = 6) {
  return projects.slice(0, limit).map((p, i) => `<div class="col-md-6 col-xl-4 filter-item" data-category="${p[1].toLowerCase()}">
    <a class="project-card reveal" href="project-details.html">
      <img src="${p[3]}" alt="${p[0]} architecture project">
      <span>${String(i + 1).padStart(2, "0")}</span>
      <div><small>${p[1]} / ${p[2]}</small><h3>${p[0]}</h3></div>
    </a>
  </div>`).join("");
}

function services(items) {
  return items.concat(["Material Consulting", "Site Coordination", "Brand Environments"]).slice(0, 6).map((s, i) => `<div class="col-md-6 col-xl-4">
    <a class="service-card reveal" href="service-details.html">
      <i class="bi ${["bi-building", "bi-layers", "bi-compass", "bi-rulers", "bi-hammer", "bi-stars"][i]}"></i>
      <span>0${i + 1}</span>
      <h3>${s}</h3>
      <p>Clear strategy, careful detailing, and disciplined delivery for spaces that need to perform beautifully.</p>
    </a>
  </div>`).join("");
}

function teamCards() {
  return team.map((m) => `<div class="col-sm-6 col-lg-3"><a class="team-card reveal" href="team-details.html"><img src="${m[2]}" alt="${m[0]}"><div><h3>${m[0]}</h3><p>${m[1]}</p></div></a></div>`).join("");
}

function blogCards() {
  return posts.map((p) => `<div class="col-md-6 col-xl-4"><article class="blog-card reveal"><a href="blog-details.html"><img src="${p[2]}" alt="${p[0]}"></a><div><span>${p[1]}</span><h3><a href="blog-details.html">${p[0]}</a></h3><p>Practical thinking for studios, clients, and makers shaping better places.</p><a class="text-link" href="blog-details.html">Read insight <i class="bi bi-arrow-right"></i></a></div></article></div>`).join("");
}

function homeInsights() {
  return `<section class="section insights-modern insights-editorial" id="insights"><div class="container"><div class="insights-modern-head reveal"><div class="section-heading"><span class="eyebrow">Insights</span><h2>Ideas shaped for quieter, smarter spaces</h2></div><p>Field notes on light, materials, planning rhythm, and the design decisions that make homes feel considered long after handover.</p></div><div class="row g-4 align-items-stretch"><div class="col-lg-7"><article class="insight-card insight-feature reveal"><a href="blog-details.html"><img src="assets/images/blog/blog-01.jpg" alt="How natural light changes a floor plan"><div><span>Planning</span><h3>How natural light changes a floor plan</h3><p>Reading orientation, shadow, and room sequence before a wall is drawn.</p><small>Read insight <i class="bi bi-arrow-right"></i></small></div></a></article></div><div class="col-lg-5"><div class="insight-stack"><article class="insight-card insight-row reveal"><a href="blog-details.html"><img src="assets/images/blog/blog-02.jpg" alt="Material palettes that age beautifully"><div><span>Materials</span><h3>Material palettes that age beautifully</h3><p>Balanced textures for rooms that stay warm, durable, and easy to live with.</p><small>Read insight <i class="bi bi-arrow-right"></i></small></div></a></article><article class="insight-card insight-row reveal"><a href="blog-details.html"><img src="assets/images/blog/blog-03.jpg" alt="Designing better client presentations"><div><span>Studio</span><h3>Designing better client presentations</h3><p>Clearer boards, cleaner options, and fewer late-stage surprises.</p><small>Read insight <i class="bi bi-arrow-right"></i></small></div></a></article></div></div></div></div></section>`;
}

function productCards() {
  return products.map((p) => `<div class="col-sm-6 col-xl-3"><div class="product-card reveal"><a href="product-details.html"><img src="${p[2]}" alt="${p[0]}"></a><div><h3><a href="product-details.html">${p[0]}</a></h3><p>${p[1]}</p><a class="btn btn-outline-dark btn-sm" href="cart.html">Add to Cart</a></div></div></div>`).join("");
}

function homePage(d, idx) {
  const darkClass = idx === 6 ? " page-dark" : "";
  return `${head(d.title)}
<body class="${darkClass}" style="--accent:${d.accent};--dark:${d.dark};--soft:${d.soft};">
${nav}
<main>
  <section class="hero-section ${d.hero}">
    <div class="container-fluid px-lg-5">
      <div class="row min-vh-100 align-items-center g-5">
        <div class="col-lg-6 hero-copy reveal">
          <span class="eyebrow">${d.eyebrow}</span>
          <h1>${d.headline}</h1>
          <p>${d.text}</p>
          <div class="hero-actions"><a class="btn btn-accent" href="projects.html">View Projects</a><a class="btn btn-link-plain" href="about.html">Explore Studio</a></div>
        </div>
        <div class="col-lg-6">
          <div class="hero-image reveal"><img src="${d.image}" alt="${d.title} hero image"><div class="hero-badge"><strong>${d.stats[1]}</strong><span>${d.anim}</span></div></div>
        </div>
      </div>
    </div>
  </section>
  <section class="section about-band">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-5">${sectionTitle("About Studio", d.title, "Every demo is composed with a distinct visual language, spacing system, and motion mood while keeping a consistent buyer-friendly codebase.")}</div>
        <div class="col-lg-7"><div class="about-grid reveal"><img src="assets/images/projects/project-02.jpg" alt="Interior detail"><img src="assets/images/projects/project-06.jpg" alt="Exterior design"><div><h3>Design made buildable.</h3><p>From first sketch to final styling, Nexora keeps concept, budget, material, and construction logic in one conversation.</p></div></div></div>
      </div>
    </div>
  </section>
  <section class="section"><div class="container">${sectionTitle("Featured Projects", "Selected spatial stories", "Filter-ready Projects cards with strong photography, editorial spacing, and polished hover states.")}<div class="Projects-filter reveal"><button class="active" data-filter="all">All</button><button data-filter="residential">Residential</button><button data-filter="interior">Interior</button><button data-filter="commercial">Commercial</button></div><div class="row g-4 Projects-grid">${projectCards()}</div></div></section>
  <section class="section soft-section"><div class="container">${sectionTitle("Services", "Studio capabilities", "Service cards are built for architecture, interiors, construction, furniture, and creative agency offers.")}<div class="row g-4">${services(d.services)}</div></div></section>
  <section class="section process-section process-luxury"><div class="container"><div class="section-heading editorial-section-heading process-luxury-head reveal"><span class="eyebrow process-kicker">Design Process</span><h2>When you need a <mark>clear design path</mark> from first brief to handover</h2><p>Every stage keeps materials, budget, drawings, and site decisions moving together so the finished room feels calm, buildable, and intentional.</p></div><div class="row g-5 align-items-center"><div class="col-lg-5"><div class="process-luxury-visual reveal"><img src="assets/images/projects/project-02.jpg" alt="Interior material planning process"></div></div><div class="col-lg-7"><div class="row g-4 process-luxury-steps reveal"><div class="col-sm-6"><div class="d-flex gap-3 process-step-item"><i class="bi bi-search"></i><div><h3>Discover</h3><p>Audit goals, site conditions, budget, brand, and lifestyle rituals.</p></div></div></div><div class="col-sm-6"><div class="d-flex gap-3 process-step-item"><i class="bi bi-layers"></i><div><h3>Compose</h3><p>Develop plans, palettes, furniture logic, lighting, and visual systems.</p></div></div></div><div class="col-sm-6"><div class="d-flex gap-3 process-step-item"><i class="bi bi-rulers"></i><div><h3>Coordinate</h3><p>Resolve drawings, procurement, vendor timing, and site details.</p></div></div></div><div class="col-sm-6"><div class="d-flex gap-3 process-step-item"><i class="bi bi-check2-circle"></i><div><h3>Deliver</h3><p>Support installation, styling, punch lists, and final handover.</p></div></div></div></div></div></div></div></section>
  ${testimonialSlider()}
  <section class="video-band video-fullscreen-band" id="studio-film"><div class="container-fluid px-lg-5"><div class="video-card reveal"><img src="assets/images/hero/hero-08.jpg" alt="Modern residential architecture film preview"><a class="play-button" href="https://www.youtube.com/" aria-label="Play studio film"><i class="bi bi-play-fill"></i></a><div class="video-card-copy"><span class="eyebrow">Studio Film</span><h2>Material, light, and structure in motion.</h2><p>Walk through the way our team studies proportion, warm evening light, and buildable details before each room reaches handover.</p></div><div class="video-card-meta"><span>4:32</span><strong>Inside the residence</strong></div></div></div></section>
  ${homeInsights()}
</main>
${foot()}`;
}

function innerHero(title, text) {
  return `<section class="inner-hero"><div class="container"><span class="eyebrow">Nexora Template</span><h1>${title}</h1><p>${text}</p></div></section>`;
}

const pageWrap = (title, body) => `${head(title)}<body style="--accent:#b78a54;--dark:#171512;--soft:#f4efe8;">${nav}<main>${body}</main>${foot()}`;

const innerPages = {
  "about.html": pageWrap("About Us", `${innerHero("About Us", "A premium studio profile page with refined storytelling, metrics, awards, and clients.")}<section class="section"><div class="container"><div class="row g-5 align-items-center"><div class="col-lg-6"><img class="rounded-image reveal" src="assets/images/hero/hero-02.jpg" alt="Architecture studio"></div><div class="col-lg-6">${sectionTitle("Our Philosophy", "Architecture with discipline and warmth", "Nexora is a fictional design studio used to demonstrate a complete ThemeForest-ready template structure.")}<div class="award-list reveal"><div><strong>2026</strong><span>International Interior Award</span></div><div><strong>2025</strong><span>Residential Design Shortlist</span></div><div><strong>2024</strong><span>Construction Excellence Mention</span></div></div></div></div></div></section><section class="section soft-section"><div class="container">${sectionTitle("Clients", "Trusted by ambitious teams")}<div class="logo-row reveal"><span>Northline</span><span>Velora</span><span>Monarch</span><span>Aster</span><span>Urbanis</span></div></div></section>`),
  "services.html": pageWrap("Services", `${innerHero("Services", "Architecture, interiors, construction coordination, furniture curation, and brand environments.")}<section class="section"><div class="container"><div class="row g-4">${services(demos[0].services)}</div></div></section><section class="section soft-section"><div class="container">${sectionTitle("Process", "Built for clarity")}<div class="process-list reveal"><div><span>01</span><h3>Brief</h3><p>Define scope and success metrics.</p></div><div><span>02</span><h3>Design</h3><p>Resolve plans, mood, materials, and details.</p></div><div><span>03</span><h3>Launch</h3><p>Support procurement, site, styling, and handover.</p></div></div></div></section>`),
  "service-details.html": pageWrap("Service Details", `${innerHero("Service Details", "A detailed service page for buyers to customize around any studio offering.")}<section class="section"><div class="container"><div class="row g-5"><div class="col-lg-8"><img class="wide-image reveal" src="assets/images/projects/project-04.jpg" alt="Service detail"><h2>Residential Architecture</h2><p>Use this page to explain scope, deliverables, milestones, inclusions, and client outcomes. The layout supports long-form service content without feeling heavy.</p><div class="check-grid"><span><i class="bi bi-check2"></i> Concept design</span><span><i class="bi bi-check2"></i> Technical drawings</span><span><i class="bi bi-check2"></i> Material schedule</span><span><i class="bi bi-check2"></i> Site review</span></div></div><aside class="col-lg-4"><div class="side-panel reveal"><h3>Service Menu</h3><a href="#">Architecture</a><a href="#">Interior Design</a><a href="#">Construction</a><a href="#">Furniture</a></div></aside></div></div></section>`),
  "projects.html": pageWrap("Projects", `${innerHero("Projects / Projects", "A filterable project archive with premium image cards and category controls.")}<section class="section"><div class="container"><div class="Projects-filter reveal"><button class="active" data-filter="all">All</button><button data-filter="residential">Residential</button><button data-filter="interior">Interior</button><button data-filter="commercial">Commercial</button><button data-filter="exterior">Exterior</button></div><div class="row g-4 Projects-grid">${projectCards()}</div></div></section>`),
  "project-details.html": pageWrap("Project Details", `${innerHero("Project Details", "A case-study page for project narrative, facts, gallery, and outcome.")}<section class="section"><div class="container"><img class="wide-image reveal" src="assets/images/projects/project-01.jpg" alt="Project details"><div class="project-meta reveal"><span>Location: Lisbon</span><span>Scope: Architecture and Interior</span><span>Year: 2026</span></div><div class="row g-5"><div class="col-lg-8"><h2>Atrium House</h2><p>The project frames light through a central courtyard, balancing privacy with generous shared rooms. Replace this copy with real case-study content for a client-ready Projects.</p></div><div class="col-lg-4"><div class="side-panel"><h3>Highlights</h3><p>Natural stone, oak joinery, passive cooling, and calm circulation.</p></div></div></div></div></section>`),
  "team.html": pageWrap("Team", `${innerHero("Team", "A clean team archive for studio leadership and collaborators.")}<section class="section"><div class="container"><div class="row g-4">${teamCards()}</div></div></section>`),
  "team-details.html": pageWrap("Team Details", `${innerHero("Team Details", "A profile page for principal architects, designers, makers, or directors.")}<section class="section"><div class="container"><div class="row g-5 align-items-center"><div class="col-lg-5"><img class="rounded-image reveal" src="assets/images/team/team-01.jpg" alt="Mira Collins"></div><div class="col-lg-7">${sectionTitle("Principal Architect", "Mira Collins", "Mira leads concept strategy, residential architecture, and client presentations for high-detail private commissions.")}<div class="check-grid"><span>Architecture Direction</span><span>Planning Strategy</span><span>Material Research</span><span>Client Workshops</span></div></div></div></div></section>`),
  "pricing.html": pageWrap("Pricing", `${innerHero("Pricing", "Flexible pricing tables for consultations, design packages, and turnkey delivery.")}<section class="section"><div class="container"><div class="row g-4">${["Consult", "Studio", "Turnkey"].map((p, i) => `<div class="col-lg-4"><div class="price-card reveal ${i === 1 ? "featured" : ""}"><span>${p}</span><h2>$${[490, 2400, 7800][i]}</h2><p>Ideal for ${["early scope clarity", "full design development", "complete project support"][i]}.</p><a class="btn btn-accent" href="contact.html">Choose Plan</a></div></div>`).join("")}</div></div></section>`),
  "faq.html": pageWrap("FAQ", `${innerHero("FAQ", "Accordion questions for design process, revisions, files, and support.")}<section class="section"><div class="container"><div class="accordion clean-accordion" id="faq">${["Is this template responsive?", "Are images copyrighted?", "Can I customize colors?", "Does it include shop pages?"].map((q, i) => `<div class="accordion-item reveal"><h2 class="accordion-header"><button class="accordion-button ${i ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#faq${i}">${q}</button></h2><div id="faq${i}" class="accordion-collapse collapse ${i ? "" : "show"}" data-bs-parent="#faq"><div class="accordion-body">Yes. The template is built with clean HTML5, Bootstrap 5, CSS variables, reusable components, and documented asset credits.</div></div></div>`).join("")}</div></div></section>`),
  "blog.html": pageWrap("Blog Grid", `${innerHero("Blog Grid", "Editorial blog cards for studio news, guides, materials, and case-study notes.")}<section class="section"><div class="container"><div class="row g-4">${blogCards()}${blogCards()}</div></div></section>`),
  "blog-details.html": pageWrap("Blog Details", `${innerHero("Blog Details", "A readable article page with imagery, quote styling, and related posts.")}<article class="section"><div class="container narrow"><img class="wide-image reveal" src="assets/images/blog/blog-01.jpg" alt="Blog detail"><h2>How natural light changes a floor plan</h2><p>Natural light is not decoration. It changes circulation, privacy, comfort, and how materials behave across the day. This article layout is built for long-form studio writing.</p><blockquote>Good architecture makes time visible without making the room feel busy.</blockquote><p>Use headings, images, lists, and pull quotes to turn project knowledge into useful content for clients and collaborators.</p></div></article>`),
  "contact.html": pageWrap("Contact", `${innerHero("Contact", "Contact form, studio details, and Google map placeholder section.")}<section class="section"><div class="container"><div class="row g-5"><div class="col-lg-6"><form class="contact-form reveal"><input type="text" placeholder="Your name" required><input type="email" placeholder="Email address" required><select><option>Project type</option><option>Architecture</option><option>Interior Design</option><option>Construction</option></select><textarea placeholder="Tell us about the project" rows="5"></textarea><button class="btn btn-accent" type="submit">Send Message</button></form></div><div class="col-lg-6"><div class="map-card reveal"><iframe title="Google map" src="https://maps.google.com/maps?q=Dhaka&t=&z=12&ie=UTF8&iwloc=&output=embed" loading="lazy"></iframe></div></div></div></div></section>`),
  "shop.html": pageWrap("Shop", `${innerHero("Shop", "A furniture and decor product grid for studio shops or curated collections.")}<section class="section"><div class="container"><div class="row g-4">${productCards()}${productCards()}</div></div></section>`),
  "product-details.html": pageWrap("Product Details", `${innerHero("Product Details", "Product gallery, price, description, quantity selector, and cart action.")}<section class="section"><div class="container"><div class="row g-5 align-items-center"><div class="col-lg-6"><img class="rounded-image reveal" src="assets/images/shop/product-01.jpg" alt="Linea Lounge Chair"></div><div class="col-lg-6">${sectionTitle("Furniture", "Linea Lounge Chair", "A sculptural lounge chair with solid oak frame, soft upholstery, and architectural proportions.")}<h3>$680</h3><div class="quantity"><button>-</button><input value="1" aria-label="Quantity"><button>+</button></div><a class="btn btn-accent" href="cart.html">Add to Cart</a></div></div></div></section>`),
  "cart.html": pageWrap("Cart", `${innerHero("Cart", "Clean cart table for furniture and decor purchases.")}<section class="section"><div class="container"><div class="table-responsive reveal"><table class="table cart-table"><thead><tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th></tr></thead><tbody><tr><td>Linea Lounge Chair</td><td>$680</td><td>1</td><td>$680</td></tr><tr><td>Travertine Table Lamp</td><td>$320</td><td>2</td><td>$640</td></tr></tbody></table></div><div class="cart-summary reveal"><h3>Subtotal: $1,320</h3><a class="btn btn-accent" href="checkout.html">Proceed to Checkout</a></div></div></section>`),
  "checkout.html": pageWrap("Checkout", `${innerHero("Checkout", "Billing fields and order summary layout.")}<section class="section"><div class="container"><div class="row g-5"><div class="col-lg-7"><form class="contact-form reveal"><input placeholder="Full name"><input placeholder="Email address"><input placeholder="Street address"><div class="row g-3"><div class="col-md-6"><input placeholder="City"></div><div class="col-md-6"><input placeholder="ZIP code"></div></div><button class="btn btn-accent">Place Order</button></form></div><div class="col-lg-5"><div class="side-panel reveal"><h3>Order Summary</h3><p>Linea Lounge Chair - $680</p><p>Travertine Table Lamp - $640</p><h4>Total: $1,320</h4></div></div></div></div></section>`),
  "404.html": pageWrap("404 Page", `<section class="utility-page"><div class="container"><span class="eyebrow">404 Error</span><h1>Page not found</h1><p>The page may have moved, or the address may be incorrect.</p><a class="btn btn-accent" href="index.html">Back Home</a></div></section>`),
  "coming-soon.html": pageWrap("Coming Soon", `<section class="utility-page coming-soon"><div class="container"><span class="eyebrow">Launching Soon</span><h1>New studio experience is on the way.</h1><p>Subscribe for launch updates and early access.</p><form class="newsletter-form mx-auto"><input type="email" placeholder="Email address"><button type="submit"><i class="bi bi-arrow-right"></i></button></form><div class="countdown"><span>42 Days</span><span>08 Hours</span><span>16 Minutes</span></div></div></section>`),
};

const css = `
:root{--accent:#b78a54;--dark:#171512;--soft:#f4efe8;--ink:#171717;--muted:#6d6a64;--line:#e7e0d6;--white:#fff;--page-bg:#f7eeee;--font-sans:"Inter",Arial,sans-serif;--font-serif:"Playfair Display",Georgia,serif}
*{box-sizing:border-box}body{margin:0;font-family:var(--font-sans);color:var(--ink);background:var(--page-bg);line-height:1.7;overflow-x:hidden}main{background:var(--page-bg)}img{max-width:100%;display:block}a{text-decoration:none;color:inherit}.container{max-width:1240px}.narrow{max-width:860px}.site-header{position:fixed;inset:0 0 auto;z-index:1000;background:rgba(255,255,255,.82);backdrop-filter:blur(18px);border-bottom:1px solid rgba(0,0,0,.06);transition:.3s}.site-header.is-scrolled{box-shadow:0 16px 48px rgba(0,0,0,.08)}.navbar{min-height:82px}.navbar-brand,.footer-brand{font-size:30px;font-weight:800;letter-spacing:0;color:var(--dark)}.navbar-brand span,.footer-brand span{color:var(--accent)}.nav-link{font-weight:700;font-size:14px;text-transform:uppercase;letter-spacing:0;color:#282522!important}.dropdown-menu{border:0;border-radius:0;padding:18px;box-shadow:0 24px 80px rgba(0,0,0,.13)}.mega-menu{width:min(780px,92vw);left:50%;transform:translateX(-50%)}.mega-link{display:block;padding:16px;background:#faf8f4;border:1px solid var(--line);min-height:86px;transition:.25s}.mega-link:hover{background:var(--dark);color:#fff;transform:translateY(-3px)}.mega-link small{display:block;color:var(--accent);font-weight:800}.btn{border-radius:0;padding:14px 24px;font-weight:800}.btn-accent{background:var(--accent);border-color:var(--accent);color:#fff}.btn-accent:hover{background:var(--dark);border-color:var(--dark);color:#fff}.btn-link-plain{color:var(--dark);padding-inline:8px}.hero-section{padding-top:82px;position:relative;overflow:hidden;background:linear-gradient(90deg,#fff 0%,var(--soft) 100%)}.hero-section h1,.inner-hero h1,.utility-page h1{font-family:var(--font-serif);font-size:104px;line-height:.98;margin:18px 0 24px;letter-spacing:0}.hero-copy p{font-size:18px;max-width:640px;color:var(--muted)}.eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:12px;text-transform:uppercase;letter-spacing:0;font-weight:900;color:var(--accent)}.eyebrow:before{content:"";width:34px;height:1px;background:currentColor}.hero-actions{display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-top:34px}.hero-image{position:relative;min-height:680px;overflow:hidden}.hero-image img{width:100%;height:100%;min-height:680px;object-fit:cover}.hero-badge{position:absolute;right:28px;bottom:28px;background:rgba(255,255,255,.9);backdrop-filter:blur(12px);padding:24px;max-width:280px}.hero-badge strong{display:block;font-family:var(--font-serif);font-size:38px;line-height:1;color:var(--accent)}.hero-badge span{font-size:13px;font-weight:700}.hero-editorial .hero-image{border-radius:48% 48% 0 0}.hero-minimal{background:#fff}.hero-minimal .hero-image{min-height:560px;border:1px solid var(--line);padding:18px}.hero-industrial .hero-image{clip-path:polygon(11% 0,100% 0,89% 100%,0 100%)}.hero-catalog .hero-image{border-radius:0 0 140px 0}.hero-panorama .hero-image{min-height:520px}.hero-dark,.page-dark{background:#0c0c0d;color:#f7f3ec}.hero-dark .hero-copy p,.page-dark .section-heading p,.page-dark p{color:#c7c0b8}.hero-nature .hero-image{border-radius:220px 220px 8px 8px}.hero-renovation .hero-image{clip-path:inset(0 0 0 0 round 0 90px 0 90px)}.hero-agency .hero-image{transform:rotate(-1deg);box-shadow:22px 22px 0 var(--accent)}.section{padding:120px 0}.soft-section{background:var(--page-bg)}.section-heading{max-width:760px;margin-bottom:46px}.section-heading h2{font-family:var(--font-serif);font-size:64px;line-height:1.06;margin:14px 0}.section-heading p{color:var(--muted);font-size:17px}.editorial-section-heading{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(300px,.48fr);gap:18px clamp(36px,7vw,120px);align-items:end;max-width:none!important;margin-bottom:56px!important;padding-left:0!important}.editorial-section-heading:before{display:none!important}.editorial-section-heading .eyebrow{grid-column:1/-1;display:inline-flex;width:fit-content;gap:10px;align-items:center;padding:0!important;border:0!important;border-radius:0!important;background:transparent!important;color:var(--accent)!important}.editorial-section-heading h2{grid-column:1;max-width:820px!important;margin:8px 0 0!important;color:var(--ink);font-family:var(--font-serif)!important;font-size:clamp(46px,5.2vw,76px)!important;font-weight:700!important;line-height:1.05!important}.editorial-section-heading h2 mark{padding:0!important;border-radius:0!important;background:transparent!important;color:inherit!important}.editorial-section-heading p{grid-column:2;max-width:520px!important;margin:0 0 12px!important;color:var(--muted);font-size:18px!important;line-height:1.65!important}.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;align-items:end}.about-grid img{height:360px;width:100%;object-fit:cover}.about-grid div{grid-column:1/3;background:var(--dark);color:#fff;padding:32px}.Projects-filter{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:30px}.Projects-filter button{border:1px solid var(--line);background:#fff;padding:10px 18px;font-weight:800}.Projects-filter button.active,.Projects-filter button:hover{background:var(--dark);color:#fff}.project-card,.service-card,.team-card,.blog-card,.product-card,.price-card,.testimonial-card,.side-panel{display:block;background:#fff;border:1px solid var(--line);transition:.28s}.project-card{position:relative;overflow:hidden;color:#fff}.project-card img{height:430px;width:100%;object-fit:cover;filter:brightness(.78);transition:.5s}.project-card:hover img{transform:scale(1.06);filter:brightness(.58)}.project-card>span{position:absolute;top:24px;left:24px;font-weight:900}.project-card div{position:absolute;left:24px;right:24px;bottom:24px}.project-card h3,.service-card h3,.team-card h3,.blog-card h3,.product-card h3{font-size:24px;font-weight:800;line-height:1.2}.service-card{height:100%;padding:34px;color:var(--ink)}.service-card:hover,.blog-card:hover,.product-card:hover,.price-card:hover{transform:translateY(-8px);box-shadow:0 24px 70px rgba(0,0,0,.1)}.service-card i{font-size:34px;color:var(--accent)}.service-card span{float:right;font-weight:900;color:#c9c1b8}.service-card p,.blog-card p{color:var(--muted)}.process-list{display:grid;gap:18px}.process-list div{display:grid;grid-template-columns:72px 1fr;gap:20px;padding:24px;border-bottom:1px solid var(--line)}.process-list span{font-family:var(--font-serif);font-size:38px;color:var(--accent)}.stats-strip{background:var(--dark);color:#fff;padding:70px 0}.stat-item{border-left:1px solid rgba(255,255,255,.25);padding-left:24px}.stat-item strong{display:block;font-family:var(--font-serif);font-size:58px;line-height:1;color:var(--accent)}.testimonial-card{padding:42px}.testimonial-card i{font-size:44px;color:var(--accent)}.testimonial-card p{font-family:var(--font-serif);font-size:28px;color:var(--ink);line-height:1.35}.team-card{overflow:hidden}.team-card img{height:360px;width:100%;object-fit:cover}.team-card div,.blog-card div,.product-card div{padding:22px}.team-card p{color:var(--accent);font-weight:800;margin:0}.video-band{position:relative;padding:0;background:linear-gradient(180deg,#fff 0%,#f4efe8 100%)}.video-fullscreen-band{min-height:100vh;display:grid;align-items:center}.video-card{position:relative;min-height:min(820px,calc(100vh - 64px));display:grid;align-items:end;color:#fff;overflow:hidden;padding:clamp(34px,5vw,72px);border-radius:34px;background:var(--dark);box-shadow:0 34px 100px rgba(23,21,18,.16)}.video-card:before{content:"";position:absolute;inset:18px;border:1px solid rgba(255,255,255,.18);border-radius:24px;z-index:1;pointer-events:none}.video-card:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(12,11,10,.84),rgba(12,11,10,.34) 58%,rgba(12,11,10,.58)),linear-gradient(0deg,rgba(12,11,10,.84),rgba(12,11,10,0) 62%);z-index:1}.video-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.9}.video-card-copy{position:relative;z-index:2;max-width:720px}.video-card-copy .eyebrow{color:#d5ae76}.video-card h2{max-width:700px;margin:14px 0 18px;font-family:var(--font-serif);font-size:clamp(44px,5.2vw,78px);line-height:1.04}.video-card p{max-width:600px;margin:0;color:rgba(255,255,255,.78);font-size:18px}.play-button{position:absolute;right:54px;top:54px;width:92px;height:92px;border-radius:50%;display:grid;place-items:center;background:#fff;color:var(--dark);font-size:38px;z-index:2;box-shadow:0 18px 54px rgba(0,0,0,.22);transition:.25s}.video-card-meta{position:absolute;right:54px;bottom:54px;z-index:2;padding:18px 22px;border:1px solid rgba(255,255,255,.22);border-radius:18px;background:rgba(255,255,255,.1);backdrop-filter:blur(16px)}.video-card-meta span{display:block;color:#d5ae76;font-family:var(--font-serif);font-size:32px;line-height:1}.video-card-meta strong{display:block;margin-top:8px;color:#fff;font-size:12px;text-transform:uppercase}.blog-card img,.product-card img{height:270px;width:100%;object-fit:cover}.text-link{font-weight:900;color:var(--accent)}.insights-modern{position:relative;overflow:hidden;background:#fff;isolation:isolate}.insights-modern:before{content:"";position:absolute;inset:0 0 auto;height:320px;background:linear-gradient(180deg,rgba(183,138,84,.12),rgba(255,255,255,0));z-index:-1}.insights-modern-head{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(320px,.55fr);gap:56px;align-items:end;margin-bottom:42px}.insights-modern-head .section-heading{margin-bottom:0}.insights-modern-head p{margin-bottom:24px;color:var(--muted)}.insight-stack{display:grid;gap:24px;height:100%}.insight-card,.insight-card a{height:100%}.insight-card a{position:relative;display:grid;overflow:hidden;min-height:100%;border:1px solid rgba(183,138,84,.24);border-radius:8px;background:rgba(255,255,255,.9);color:var(--dark);box-shadow:0 22px 70px rgba(23,21,18,.08);transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}.insight-card:hover a{transform:translateY(-6px);border-color:rgba(183,138,84,.34);box-shadow:0 34px 90px rgba(23,21,18,.14)}.insight-feature a{min-height:620px;align-items:end}.insight-feature a:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(16,15,13,.02) 28%,rgba(16,15,13,.78) 100%);z-index:1}.insight-row a{grid-template-columns:minmax(190px,.82fr) minmax(0,1fr);align-items:stretch}.insight-card img{width:100%;height:100%;min-height:260px;object-fit:cover;transition:transform .55s ease}.insight-feature img{position:absolute;inset:0;height:100%;min-height:100%}.insight-row img{min-height:0}.insight-card:hover img{transform:scale(1.06)}.insight-card div{position:relative;z-index:2;padding:30px}.insight-feature div{max-width:620px;padding:42px}.insight-card span{display:inline-flex;margin-bottom:14px;padding:7px 12px;border-radius:999px;background:rgba(183,138,84,.1);color:var(--accent);font-size:12px;font-weight:900;text-transform:uppercase}.insight-card h3{margin-bottom:14px;color:var(--dark);font-size:26px;line-height:1.18;font-weight:900}.insight-feature h3{color:#fff;font-family:var(--font-serif);font-size:clamp(42px,5vw,70px);font-weight:800}.insight-card p{margin-bottom:22px;color:var(--muted)}.insight-feature p{color:rgba(255,255,255,.82);font-size:17px}.insight-card small{color:var(--accent);font-size:13px;font-weight:900;text-transform:uppercase}.footer-section{background:#0f0e0d;color:#d9d1c6;padding:90px 0 28px}.footer-brand{display:inline-block;color:#fff;margin-bottom:18px}.footer-section h3{color:#fff;font-size:16px;text-transform:uppercase;font-weight:900;margin-bottom:18px}.footer-section a:not(.footer-brand){display:block;color:#d9d1c6;margin-bottom:10px}.socials{display:flex;gap:12px}.socials a{width:42px;height:42px;display:grid!important;place-items:center;border:1px solid rgba(255,255,255,.18)}.newsletter-form{display:flex;max-width:440px;background:#fff;padding:6px}.newsletter-form input{border:0;outline:0;flex:1;padding:14px;min-width:0}.newsletter-form button{border:0;background:var(--accent);color:#fff;width:54px}.footer-bottom{display:flex;justify-content:space-between;gap:20px;border-top:1px solid rgba(255,255,255,.12);margin-top:56px;padding-top:24px;font-size:14px}.inner-hero{padding:190px 0 110px;background:var(--soft)}.inner-hero h1{font-size:86px}.inner-hero p{max-width:720px;color:var(--muted);font-size:18px}.rounded-image,.wide-image{width:100%;object-fit:cover}.rounded-image{border-radius:0 100px 0 0;min-height:520px}.wide-image{max-height:620px}.award-list div,.project-meta,.check-grid,.logo-row{display:flex;gap:18px;flex-wrap:wrap}.award-list div{padding:18px 0;border-bottom:1px solid var(--line)}.award-list strong{color:var(--accent);min-width:70px}.logo-row{justify-content:space-between;border:1px solid var(--line);background:#fff;padding:30px}.logo-row span{font-family:var(--font-serif);font-size:28px;color:#8d867c}.side-panel{padding:32px;position:sticky;top:120px}.side-panel a{display:block;padding:14px 0;border-bottom:1px solid var(--line);font-weight:800}.check-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin:28px 0}.check-grid span{background:var(--soft);padding:16px;font-weight:800}.project-meta{justify-content:space-between;background:var(--dark);color:#fff;padding:24px;margin:0 0 42px}.price-card{padding:38px;height:100%}.price-card.featured{background:var(--dark);color:#fff}.price-card h2{font-family:var(--font-serif);font-size:58px}.clean-accordion .accordion-item{border:1px solid var(--line);margin-bottom:14px}.clean-accordion .accordion-button{font-weight:900;padding:22px}.contact-form{display:grid;gap:16px}.contact-form input,.contact-form textarea,.contact-form select{width:100%;border:1px solid var(--line);padding:16px;background:#fff}.map-card iframe{width:100%;height:520px;border:0;filter:grayscale(1)}.quantity{display:flex;margin:24px 0}.quantity button,.quantity input{width:54px;height:50px;border:1px solid var(--line);background:#fff;text-align:center}.cart-summary{text-align:right;margin-top:28px}.utility-page{min-height:100vh;display:grid;place-items:center;text-align:center;background:var(--soft);padding:120px 0}.utility-page p{max-width:560px;margin:0 auto 28px;color:var(--muted)}.countdown{display:flex;justify-content:center;gap:14px;flex-wrap:wrap;margin-top:28px}.countdown span{background:#fff;padding:16px 22px;font-weight:900}.scroll-top{position:fixed;right:22px;bottom:22px;width:46px;height:46px;border:0;background:var(--accent);color:#fff;opacity:0;visibility:hidden;transition:.25s;z-index:999}.scroll-top.show{opacity:1;visibility:visible}.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s ease,transform .7s ease}.reveal.is-visible{opacity:1;transform:none}body:not(.page-dark) .section,body:not(.page-dark) .soft-section,body:not(.page-dark) .about-band,body:not(.page-dark) .about-modern,body:not(.page-dark) .about-luxury-studio,body:not(.page-dark) .featured-projects-modern,body:not(.page-dark) .featured-projects-luxury,body:not(.page-dark) .featured-projects-atelier,body:not(.page-dark) .featured-projects-cinema,body:not(.page-dark) .featured-projects-service-style,body:not(.page-dark) .services-luxury,body:not(.page-dark) .process-modern,body:not(.page-dark) .process-luxury,body:not(.page-dark) .testimonial-modern,body:not(.page-dark) .gallery-modern,body:not(.page-dark) .insights-modern,body:not(.page-dark) .video-band,body:not(.page-dark) .inner-hero,body:not(.page-dark) .utility-page{background:var(--page-bg)!important}body:not(.page-dark) .insights-modern:before,body:not(.page-dark) .process-luxury:before,body:not(.page-dark) .featured-projects-service-style:before,body:not(.page-dark) .about-luxury-studio:before{background:transparent!important}body:not(.page-dark) .process-luxury{background:linear-gradient(90deg,var(--soft) 0 38%,var(--page-bg) 38% 100%)!important}body:not(.page-dark) .process-luxury:before{background:var(--soft)!important}body:not(.page-dark) .process-luxury-steps{margin-top:0;padding:28px;border:1px solid rgba(159,107,95,.14);border-radius:28px;background:rgba(255,255,255,.48);box-shadow:0 28px 90px rgba(33,26,24,.08)}body:not(.page-dark) .process-luxury-steps>[class*="col-"]{display:flex}body:not(.page-dark) .process-step-item{width:100%;min-height:0;padding:22px;border:1px solid rgba(159,107,95,.12);border-radius:20px;background:rgba(255,255,255,.72);box-shadow:0 18px 50px rgba(33,26,24,.06)}body:not(.page-dark) .process-step-item>i{border:0;border-radius:18px;background:var(--page-bg);color:var(--accent);font-size:28px}body:not(.page-dark) .about-luxury-studio{position:relative;overflow:hidden;padding-top:clamp(88px,9vw,124px);padding-bottom:clamp(88px,9vw,124px);background:var(--page-bg)!important}body:not(.page-dark) .about-luxury-studio>.container>.row{align-items:stretch!important}body:not(.page-dark) .about-luxury-studio .about-modern-copy{margin-bottom:44px!important}body:not(.page-dark) .about-luxury-studio .about-modern-points{width:100%;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;margin:0;padding:0;border:0;border-radius:0;background:transparent;box-shadow:none}body:not(.page-dark) .about-luxury-studio .about-modern-points div{min-height:178px;display:grid;grid-template-columns:54px minmax(0,1fr);grid-template-rows:auto 1fr;gap:10px 16px;align-items:start;padding:clamp(24px,2.5vw,32px);border:1px solid rgba(159,107,95,.18);border-radius:0 26px 26px 0;background:rgba(255,255,255,.28);box-shadow:none}body:not(.page-dark) .about-luxury-studio .about-modern-points div:before{display:none}body:not(.page-dark) .about-luxury-studio .about-modern-points div:nth-child(3):before{content:"03"}body:not(.page-dark) .about-luxury-studio .about-modern-points div:nth-child(4):before{content:"04"}body:not(.page-dark) .about-luxury-studio .about-modern-points i{grid-row:span 2;width:50px;height:50px;display:grid;place-items:center;margin:0;border-radius:0 18px 18px 0;background:var(--dark);color:#f7d37f;box-shadow:none}body:not(.page-dark) .about-luxury-studio .about-modern-points h3{max-width:none;margin:0;padding-right:0;font-size:22px;line-height:1.1}body:not(.page-dark) .about-luxury-studio .about-modern-points p{margin:0;color:var(--muted)}body:not(.page-dark) .about-luxury-studio .about-modern-media{height:100%;min-height:560px;padding:0;border:0;border-radius:0;background:transparent;box-shadow:none;overflow:visible}body:not(.page-dark) .about-luxury-studio .about-modern-media:before{display:none}body:not(.page-dark) .about-luxury-studio .about-modern-main{position:absolute;right:0;top:44px;width:78%;height:430px;min-height:0;border:1px solid var(--accent);border-radius:0 52px 0 0;box-shadow:none;z-index:1}body:not(.page-dark) .about-luxury-studio .about-modern-accent{display:block;position:absolute;left:0;top:0;width:32%;height:240px;object-fit:cover;border:10px solid var(--page-bg);border-radius:34px 34px 0 34px;box-shadow:0 22px 70px rgba(33,26,24,.14);z-index:3}body:not(.page-dark) .about-luxury-studio .about-modern-small{left:12%;right:auto;bottom:42px;width:38%;min-width:230px;height:190px;border:10px solid var(--page-bg);border-radius:0 34px 34px 0;box-shadow:0 20px 60px rgba(33,26,24,.16);z-index:4}body:not(.page-dark) .about-luxury-studio .about-modern-card{left:auto;right:24px;bottom:26px;width:220px;padding:24px 26px;border-radius:0 24px 24px 0;background:var(--dark);z-index:5}body:not(.page-dark) .about-luxury-studio .about-modern-card strong{color:#f0bd58}
@media (max-width:1199px){.navbar-collapse{background:#fff;padding:20px}.mega-menu{transform:none;width:100%;left:0}.hero-image,.hero-image img{min-height:520px}}
@media (max-width:991px){.editorial-section-heading{grid-template-columns:1fr;gap:12px;margin-bottom:42px!important}.editorial-section-heading h2,.editorial-section-heading p{grid-column:1}.editorial-section-heading h2{font-size:clamp(38px,8vw,58px)!important}.insights-modern-head{grid-template-columns:1fr;gap:18px}.insight-feature a{min-height:520px}.insight-row a{grid-template-columns:240px minmax(0,1fr)}}
@media (max-width:767px){.section{padding:76px 0}.hero-section h1{font-size:44px}.hero-image,.hero-image img{min-height:380px}.hero-badge{position:static;max-width:none}.about-grid{grid-template-columns:1fr}.about-grid div{grid-column:auto}.process-list div{grid-template-columns:1fr}.testimonial-card p{font-size:22px}.video-fullscreen-band{min-height:auto;padding:48px 0}.video-card{min-height:680px;padding:26px;border-radius:24px}.video-card:before{inset:12px;border-radius:18px}.video-card h2{font-size:34px}.video-card-meta{right:28px;bottom:28px}.insight-feature a{min-height:460px}.insight-row a{grid-template-columns:1fr}.insight-row img{height:230px}.insight-card div,.insight-feature div{padding:24px}.insight-card h3{font-size:24px}.insight-feature h3{font-size:38px}.footer-bottom{display:block}.check-grid{grid-template-columns:1fr}.cart-summary{text-align:left}}
`;

const js = `
(function(){
  "use strict";
  const header=document.querySelector("[data-header]");
  const topBtn=document.querySelector("[data-scroll-top]");
  const onScroll=()=>{const active=window.scrollY>40;header&&header.classList.toggle("is-scrolled",active);topBtn&&topBtn.classList.toggle("show",window.scrollY>500)};
  window.addEventListener("scroll",onScroll,{passive:true});onScroll();
  topBtn&&topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
  const observer=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}})},{threshold:.14});
  document.querySelectorAll(".reveal").forEach((el)=>observer.observe(el));
  document.querySelectorAll("[data-counter]").forEach((el)=>{const raw=el.textContent.trim();const end=parseFloat(raw.replace(/[^0-9.]/g,""))||0;const suffix=raw.replace(/[0-9.]/g,"");let start=null;const duration=900;const tick=(time)=>{start??=time;const progress=Math.min((time-start)/duration,1);el.textContent=progress<1?Math.floor(end*progress)+suffix:raw;if(progress<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)});
  document.querySelectorAll(".Projects-filter").forEach((wrap)=>{wrap.addEventListener("click",(event)=>{const btn=event.target.closest("button[data-filter]");if(!btn)return;wrap.querySelectorAll("button").forEach((b)=>b.classList.remove("active"));btn.classList.add("active");const filter=btn.dataset.filter;wrap.parentElement.querySelectorAll(".filter-item").forEach((item)=>{item.style.display=filter==="all"||item.dataset.category===filter?"":"none"})})});
  document.querySelectorAll("form").forEach((form)=>form.addEventListener("submit",(event)=>{event.preventDefault();form.classList.add("was-validated")}));
})();
`;

const docs = `
# Nexora - Architecture & Interior Design HTML5 Template

Nexora is a premium, responsive Bootstrap 5 template for architecture studios, interior designers, construction companies, furniture studios, renovation businesses, landscape designers, real estate interiors, and creative agencies.

## Files

- 7 homepage demos: \`index.html\`, \`home-02.html\` through \`home-07.html\`
- Inner pages: About, Services, Service Details, Projects, Project Details, Team, Team Details, Pricing, FAQ, Blog Grid, Blog Details, Contact, Shop, Product Details, Cart, Checkout, 404, Coming Soon
- Assets: \`assets/css/main.css\`, \`assets/js/main.js\`, and organized image folders

## Customization

Change the color mood per page through CSS variables on the \`body\` tag:

\`\`\`html
<body style="--accent:#b78a54;--dark:#171512;--soft:#f4efe8;">
\`\`\`

Typography uses free Google Fonts: Inter and Playfair Display. Icons use free Bootstrap Icons.

## Notes

This is a static HTML template. The contact, newsletter, cart, and checkout forms include front-end demo behavior only. Connect them to your preferred backend or e-commerce platform before production use.
`;

const credits = `
# Credits

## Frameworks and Libraries

- Bootstrap 5: https://getbootstrap.com/
- Bootstrap Icons: https://icons.getbootstrap.com/
- Google Fonts: Inter and Playfair Display: https://fonts.google.com/

## Images

Demo images are royalty-free placeholders sourced from Unsplash image URLs and downloaded into the local assets folder for preview use. Replace demo images with client-approved production photography for final commercial projects.

Unsplash: https://unsplash.com/license
`;

const changelog = `
# Changelog

## 1.0.0 - 2026-06-04

- Initial release
- Added 10 unique homepage demos
- Added 18 inner pages
- Added responsive Bootstrap 5 layout, Projects filter, counters, reveal animations, shop pages, documentation, credits, and changelog
`;

demos.forEach((demo, i) => write(demo.file, homePage(demo, i)));
Object.entries(innerPages).forEach(([file, html]) => write(file, html));
write("assets/css/main.css", css);
write("assets/js/main.js", js);
write("documentation/index.html", pageWrap("Documentation", `<section class="inner-hero"><div class="container"><h1>Documentation</h1><p>Open README.md for full customization notes, file structure, and credits.</p></div></section>`));
write("documentation/README.md", docs);
write("credits.md", credits);
write("changelog.md", changelog);

console.log("Nexora template generated.");
