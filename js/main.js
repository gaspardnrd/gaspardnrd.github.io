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
  const master = EDUCATION[0], degree = EDUCATION[1];
  const projectTile = (p, i) => `
    <a class="card mini-project" href="projects.html#p${i}">
      ${p.image ? `<img class="mini-thumb" src="${esc(p.image)}" alt="" loading="lazy">` : ""}
      <span class="mono">// ${esc(p.category)} · ${esc(p.period)}</span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.summary)}</p>
      <span class="link">Read case study <i class="fa-solid fa-arrow-right"></i></span>
    </a>`;
  view.innerHTML = `
    <h1 class="page-title">Overview</h1>
    <div class="grid-hero">
      <section class="card intro">
        <h2>Modelling & Production Systems</h2>
        <p>I am a French engineering student at <strong>Arts et Métiers (ENSAM)</strong>, completing the
           <strong>MSc KIMP research master in Industrial Engineering</strong> alongside my <strong>Diplôme d'Ingénieur</strong>.</p>
        <p>My work sits where mathematics meets the shop floor: <strong>stochastic modelling</strong> (Markov chains, queues,
           Petri nets), <strong>design of experiments</strong> and <strong>multi-agent simulation</strong> to make production
           systems more robust and fairer.</p>
        <p class="callout"><i class="fa-solid fa-magnifying-glass"></i>
           Looking for a <strong>6-month research internship in industry from February 2027</strong> (master thesis).</p>
        <div class="intro-links">
          <a class="btn" href="resume.html"><i class="fa-solid fa-file-lines"></i> Resume</a>
          <a class="btn btn-outline" href="mailto:${esc(PROFILE.email)}"><i class="fa-solid fa-envelope"></i> Contact</a>
          <a class="btn btn-outline" href="${esc(PROFILE.linkedin)}" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
        </div>
      </section>
      <div class="card photo-card">${photo("photo")}</div>
    </div>

    <div class="stats">
      <a class="card stat" href="academics.html">
        <span class="mono">// Research master</span>
        <strong>MSc KIMP</strong><span>${esc(master.period)} · ${esc(master.place)}</span>
      </a>
      <a class="card stat" href="academics.html">
        <span class="mono">// Engineering degree</span>
        <strong>Arts et Métiers</strong><span>Founding member of ParisTech</span>
      </a>
      <a class="card stat" href="academics.html">
        <span class="mono">// International</span>
        <strong>Malaysia</strong><span>Exchange at UTP, Mar — Aug 2026</span>
      </a>
      <a class="card stat" href="experience.html">
        <span class="mono">// Field experience</span>
        <strong>VINCI</strong><span>Formwork, EOLE / Line 15, Paris</span>
      </a>
    </div>

    <div class="section-head">
      <h2>Projects</h2>
      <a class="link" href="projects.html">All projects <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    <div class="grid-2">${PROJECTS.map(projectTile).join("")}</div>

    <div class="grid-2 lower">
      <section class="card">
        <span class="mono">// Academic journey</span>
        <ul class="mini-list">
          ${EDUCATION.map(e => `<li><strong>${esc(e.school)}</strong><span>${esc(e.label || "")} · ${esc(e.period)}</span></li>`).join("")}
        </ul>
        <a class="link" href="academics.html">Academic journey <i class="fa-solid fa-arrow-right"></i></a>
        <span class="mono spaced">// Experience</span>
        <ul class="mini-list">
          ${EXPERIENCE.map(x => `<li><strong>${esc(x.title)}</strong><span>${esc(x.role)} · ${esc(x.period)}</span></li>`).join("")}
        </ul>
        <a class="link" href="experience.html">Experience <i class="fa-solid fa-arrow-right"></i></a>
      </section>
      <section class="card">
        <span class="mono">// Skills</span>
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
