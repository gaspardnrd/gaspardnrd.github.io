/* Builds the sidebar on every page, then fills the page from data.js.
 * You normally don't need to edit this file. */

const NAV = [
  { href: "index.html",      label: "Dashboard",  icon: "fa-house" },
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
  const featured = PROJECTS.find(p => p.featured) || PROJECTS[0];
  const fi = PROJECTS.indexOf(featured);
  view.innerHTML = `
    <h1 class="page-title">Overview</h1>
    <div class="grid-hero">
      <section class="card intro">
        <h2>Modelling & Production Systems</h2>
        <p>I am a French engineering student at <strong>Arts et Métiers Institute of Technology (ENSAM)</strong>,
           interested in the point where mathematics meets the shop floor.</p>
        <p>I use <strong>graph theory, stochastic models and multi-agent simulation</strong> to make production
           planning more robust and fairer. I am looking for a <strong>6-month research internship starting in February</strong>.</p>
        <a class="link" href="resume.html">View full resume <i class="fa-solid fa-arrow-right"></i></a>
      </section>
      <div class="card photo-card">${photo("photo")}</div>
    </div>
    <div class="grid-2">
      <a class="card feature" href="projects.html#p${fi}">
        <span class="badge">Featured project</span>
        <h3>${esc(featured.title)}</h3>
        <p>${esc(featured.summary)}</p>
        <span class="link">Read case study <i class="fa-solid fa-arrow-right"></i></span>
      </a>
      <a class="card feature" href="academics.html">
        <span class="badge badge-alt">International</span>
        <h3>Exchange in Malaysia</h3>
        <p>Semester at Universiti Teknologi PETRONAS, March — August 2026.</p>
        <span class="link">Academic journey <i class="fa-solid fa-arrow-right"></i></span>
      </a>
      <a class="card feature" href="experience.html">
        <span class="badge">Field experience</span>
        <h3>VINCI Construction</h3>
        <p>Formwork on the EOLE / Line 15 interfaces, Paris.</p>
        <span class="link">Experience <i class="fa-solid fa-arrow-right"></i></span>
      </a>
      <section class="card">
        <span class="mono">// SKILLS</span>
        ${Object.entries(SKILLS).map(([k, v]) => `<h4>${esc(k)}</h4>${tags(v)}`).join("")}
      </section>
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
      <div class="card-head"><span class="mono">${esc(e.place)}</span><span class="date">${esc(e.period)}</span></div>
      <h2>${esc(e.school)}</h2>
      <p class="sub">${esc(e.degree)}</p>
      <ul class="points">${e.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>`)}`;
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
    ${p.image ? `<img class="thumb" src="${esc(p.image)}" alt="">` : ""}
    <span class="mono">// ${esc(p.category)} · ${esc(p.period)}</span>
    <h2>${esc(p.title)}</h2>
    <p class="sub">${esc(p.context)}</p>
    ${p.details.map(d => `<p>${esc(d)}</p>`).join("")}
    ${tags(p.tags)}
    ${p.links.length ? `<div class="links">${p.links.map(l =>
      `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.text)}</a>`).join("")}</div>` : ""}`;
  dlg.showModal();
}
