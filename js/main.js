/* Builds the sidebar on every page, then fills the page from data.js.
 * You normally don't need to edit this file. */

const NAV = [
  { href: "index.html",      label: "Home",       icon: "fa-house" },
  { href: "projects.html",   label: "Projects",   icon: "fa-code-branch" },
  { href: "resume.html",     label: "Resume",     icon: "fa-file-lines" },
  { href: "academics.html",  label: "Academics",  icon: "fa-graduation-cap" },
  { href: "experience.html", label: "Experience", icon: "fa-briefcase" }
];

const esc = s => String(s ?? "").replace(/[&<>"']/g, c =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const current = location.pathname.split("/").pop() || "index.html";

/* ---------- Sidebar ---------- */
document.getElementById("sidebar").innerHTML = `
  <div class="brand">
    <a href="index.html" class="logo">${esc(PROFILE.initials)}<span>.</span></a>
    <p class="tagline">${PROFILE.tagline.map(esc).join("<br>")}</p>
  </div>
  <button class="menu-btn" aria-expanded="false" aria-controls="nav" aria-label="Open menu">
    <i class="fa-solid fa-bars"></i>
  </button>
  <nav id="nav" class="nav">
    ${NAV.map(n => `
      <a href="${n.href}" class="${n.href === current ? "active" : ""}">
        <i class="fa-solid ${n.icon}"></i>${n.label}
      </a>`).join("")}
  </nav>
  <div class="side-footer">
    <div class="socials">
      <a href="${esc(PROFILE.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
      <a href="mailto:${esc(PROFILE.email)}" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
    </div>
    <p>© ${new Date().getFullYear()} ${esc(PROFILE.name)}</p>
  </div>`;

const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
  const open = document.getElementById("sidebar").classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});

/* ---------- Helpers ---------- */
const tags = list => `<ul class="tags">${(list || []).map(t => `<li>${esc(t)}</li>`).join("")}</ul>`;

function photo(cls) {
  return `<img src="${esc(PROFILE.photo)}" alt="Portrait of ${esc(PROFILE.name)}" class="${cls}"
    onerror="this.outerHTML='<div class=&quot;${cls} placeholder&quot;>${esc(PROFILE.initials)}</div>'">`;
}

function projectCard(p, i) {
  return `
    <button class="card project-card" data-index="${i}">
      ${p.image ? `<img class="thumb" src="${esc(p.image)}" alt="" loading="lazy">` : ""}
      <span class="mono">// ${esc(p.category)}</span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.summary)}</p>
      ${tags(p.tags)}
      <span class="more">View details <i class="fa-solid fa-arrow-right"></i></span>
    </button>`;
}

function timeline(items, render) {
  return `<ol class="timeline">${items.map(it => `<li class="card">${render(it)}</li>`).join("")}</ol>`;
}

/* ---------- Page content ---------- */
const view = document.getElementById("view");
const page = document.body.dataset.page;

if (page === "dashboard") {
  const tiles = [
    { href: "projects.html",   icon: "fa-code-branch",    title: "Projects",   text: "Academic projects in modelling, simulation and innovation, with reports." },
    { href: "resume.html",     icon: "fa-file-lines",     title: "Resume",     text: "My CV, to read online or download as a PDF." },
    { href: "academics.html",  icon: "fa-graduation-cap", title: "Academics",  text: "MSc KIMP, Arts et Métiers engineering degree and preparatory classes." },
    { href: "experience.html", icon: "fa-briefcase",      title: "Experience", text: "Construction site internship with VINCI and private tutoring." }
  ];
  view.innerHTML = `
    <h1 class="page-title">Overview</h1>
    <div class="grid-hero">
      <section class="card intro">
        <h2>Modelling & Production Systems</h2>
        <p>I am a French engineering student at Arts et Métiers (ENSAM), completing the MSc KIMP research master
           in Industrial Engineering alongside my engineering degree. I use mathematics and simulation to improve
           how production systems are organised, so that they work better for both the company and the people in them.</p>
        <p>Before Arts et Métiers, I spent three years in preparatory classes in mathematics and physics. Since then
           I have worked on a VINCI construction site in Paris and studied for a semester in Malaysia. Outside
           engineering, I play competitive tennis and football, I am a PADI-certified diver and I enjoy reading philosophy.</p>
        <p class="callout"><i class="fa-solid fa-magnifying-glass"></i>
           Looking for a 6-month research internship in industry from February 2027 (master thesis).</p>
        <div class="intro-links">
          <a class="btn" href="mailto:${esc(PROFILE.email)}"><i class="fa-solid fa-envelope"></i> Contact</a>
          <a class="btn btn-outline" href="${esc(PROFILE.linkedin)}" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
        </div>
      </section>
      <div class="card photo-card">${photo("photo")}</div>
    </div>
    <div class="page-tiles">
      ${tiles.map(t => `
        <a class="card page-tile" href="${t.href}">
          <i class="fa-solid ${t.icon}"></i>
          <h3>${t.title}</h3>
          <p>${t.text}</p>
          <span class="link">Open <i class="fa-solid fa-arrow-right"></i></span>
        </a>`).join("")}
    </div>`;
}

if (page === "projects") {
  view.innerHTML = `
    <h1 class="page-title">Projects</h1>
    <div class="filters" role="group" aria-label="Filter projects">
      ${["All", ...new Set(PROJECTS.map(p => p.category))].map((c, i) =>
        `<button class="chip" aria-pressed="${i === 0}">${esc(c)}</button>`).join("")}
    </div>
    <div class="grid-3" id="projects">${PROJECTS.map(projectCard).join("")}</div>`;

  document.querySelector(".filters").addEventListener("click", e => {
    const b = e.target.closest(".chip"); if (!b) return;
    document.querySelectorAll(".chip").forEach(x => x.setAttribute("aria-pressed", x === b));
    document.querySelectorAll(".project-card").forEach(card => {
      const p = PROJECTS[card.dataset.index];
      card.hidden = !(b.textContent === "All" || p.category === b.textContent);
    });
  });
  document.getElementById("projects").addEventListener("click", e => {
    const c = e.target.closest(".project-card"); if (c) openProject(+c.dataset.index);
  });
  const m = location.hash.match(/^#p(\d+)$/);
  if (m && PROJECTS[m[1]]) openProject(+m[1]);
}

if (page === "resume") {
  view.innerHTML = `
    <div class="title-row">
      <h1 class="page-title">Curriculum Vitae</h1>
      <a class="btn" href="${esc(PROFILE.cv)}" download><i class="fa-solid fa-download"></i> Download PDF</a>
    </div>
    <div class="card pdf-frame">
      <iframe src="${esc(PROFILE.cv)}" title="Resume of ${esc(PROFILE.name)}"></iframe>
    </div>
    <p class="hint">PDF not showing? <a href="${esc(PROFILE.cv)}" target="_blank" rel="noopener">Open it in a new tab</a>.</p>`;
}

if (page === "academics") {
  view.innerHTML = `
    <h1 class="page-title">Academic Journey</h1>
    ${timeline(EDUCATION, e => `
      <div class="card-head">
        <span>${e.label ? `<span class="badge">${esc(e.label)}</span> ` : ""}<span class="mono">${esc(e.place)}</span></span>
        <span class="date">${esc(e.period)}</span>
      </div>
      <h2>${esc(e.school)}</h2>
      <p class="sub">${esc(e.degree)}</p>
      ${e.description ? `<p>${esc(e.description)}</p>` : ""}
      <ul class="points">${(e.points || []).map(p => `<li>${esc(p)}</li>`).join("")}</ul>
      ${e.skills ? tags(e.skills) : ""}`)}`;
}

if (page === "experience") {
  view.innerHTML = `
    <h1 class="page-title">Experience</h1>
    ${timeline(EXPERIENCE, x => `
      <div class="card-head"><span class="badge">${esc(x.label)}</span><span class="date">${esc(x.period)}</span></div>
      <h2>${esc(x.title)}</h2>
      <p class="sub">${esc(x.role)} · ${esc(x.place)}</p>
      <ul class="points">${x.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>`)}`;
}

/* ---------- Project detail window ---------- */
function openProject(i) {
  const p = PROJECTS[i];
  let dlg = document.querySelector("dialog");
  if (!dlg) {
    dlg = document.createElement("dialog");
    dlg.innerHTML = `<button class="close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button><div class="dlg-body"></div>`;
    document.body.appendChild(dlg);
    dlg.querySelector(".close").onclick = () => dlg.close();
    dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
  }
  dlg.querySelector(".dlg-body").innerHTML = `
    ${p.image && !p.gallery ? `<img class="thumb" src="${esc(p.image)}" alt="">` : ""}
    <span class="mono">// ${esc(p.category)} · ${esc(p.period)}</span>
    <h2>${esc(p.title)}</h2>
    <p class="sub">${esc(p.context)}</p>
    ${p.details.map(d => `<p>${esc(d)}</p>`).join("")}
    ${tags(p.tags)}
    ${(p.gallery || []).map(g => `
      <figure class="figure">
        <a href="${esc(g.src)}" target="_blank" rel="noopener"><img src="${esc(g.src)}" alt="${esc(g.caption)}" loading="lazy"></a>
        <figcaption>${esc(g.caption)}</figcaption>
      </figure>`).join("")}
    ${p.links.length ? `<div class="links">${p.links.map(l =>
      `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.text)}</a>`).join("")}</div>` : ""}`;
  dlg.showModal();
}
