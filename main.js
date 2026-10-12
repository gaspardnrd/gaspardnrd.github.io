// ===== Année du pied de page =====
document.getElementById("annee").textContent = new Date().getFullYear();

// ===== Thème clair / sombre (mémorisé dans le navigateur) =====
const root = document.documentElement;
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
} catch (e) {}

document.querySelector(".theme-toggle").addEventListener("click", () => {
  const isDark = root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = isDark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});

// ===== Menu mobile =====
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("menu");
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
menu.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  })
);

// ===== Projets : cartes, filtres et fenêtre de détail =====
const grid = document.querySelector(".projects-grid");
const filters = document.querySelector(".filters");
const modal = document.querySelector(".project-modal");
const modalBody = modal.querySelector(".modal-body");

// Échappe le texte pour éviter d'injecter du HTML par erreur
const esc = s => String(s ?? "").replace(/[&<>"']/g, c =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function vignette(p, cls) {
  return p.image
    ? `<img class="${cls}" src="${esc(p.image)}" alt="" loading="lazy"
         onerror="this.outerHTML='<div class=&quot;${cls} placeholder&quot;>${esc(p.categorie)}</div>'">`
    : `<div class="${cls} placeholder">${esc(p.categorie)}</div>`;
}

function afficherProjets(categorie) {
  const liste = categorie === "Tous" ? PROJETS : PROJETS.filter(p => p.categorie === categorie);
  grid.innerHTML = liste.map(p => `
    <button class="project-card reveal visible" data-index="${PROJETS.indexOf(p)}">
      ${vignette(p, "thumb")}
      <div class="card-body">
        <span class="card-meta">${esc(p.categorie)} · ${esc(p.annee)}</span>
        <h3>${esc(p.titre)}</h3>
        <p>${esc(p.resume)}</p>
        <ul class="tags">${(p.technos || []).map(t => `<li>${esc(t)}</li>`).join("")}</ul>
      </div>
    </button>`).join("");
}

// Boutons de filtre construits à partir des catégories existantes
const categories = ["Tous", ...new Set(PROJETS.map(p => p.categorie))];
filters.innerHTML = categories.map((c, i) =>
  `<button class="filter-btn" aria-pressed="${i === 0}">${esc(c)}</button>`).join("");
filters.addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  filters.querySelectorAll(".filter-btn").forEach(b => b.setAttribute("aria-pressed", b === btn));
  afficherProjets(btn.textContent);
});

// Ouverture du détail d'un projet
grid.addEventListener("click", e => {
  const card = e.target.closest(".project-card");
  if (!card) return;
  const p = PROJETS[card.dataset.index];
  const paragraphes = String(p.description || "").split(/\n\s*\n/)
    .map(t => `<p>${esc(t)}</p>`).join("");
  modalBody.innerHTML = `
    ${p.image ? vignette(p, "modal-img") : ""}
    <span class="card-meta">${esc(p.cadre)} · ${esc(p.annee)}</span>
    <h3 id="modal-title">${esc(p.titre)}</h3>
    ${paragraphes}
    <ul class="tags">${(p.technos || []).map(t => `<li>${esc(t)}</li>`).join("")}</ul>
    ${p.liens && p.liens.length ? `<div class="links">${p.liens.map(l =>
      `<a class="btn btn-ghost" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.texte)}</a>`).join("")}</div>` : ""}`;
  modal.showModal();
});
modal.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

afficherProjets("Tous");

// ===== Apparition douce des sections au défilement =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("visible"); observer.unobserve(en.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll(".section").forEach(s => { s.classList.add("reveal"); observer.observe(s); });
