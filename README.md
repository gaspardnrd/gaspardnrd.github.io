# Portfolio — Gaspard Nordin

Site statique (HTML / CSS / JavaScript), sans framework ni installation.

## Structure

```
portfolio/
├── index.html          ← le texte de la page (à propos, compétences, contact)
├── css/style.css       ← l'apparence (couleur principale : --accent en haut du fichier)
├── js/projets.js       ← TES PROJETS : le seul fichier à toucher pour en ajouter
├── js/main.js          ← le fonctionnement (filtres, fenêtre de détail, thème sombre)
└── assets/
    ├── cv.pdf          ← ton CV
    ├── images/         ← photo.jpg (portrait) + images des projets
    └── docs/           ← rapports, posters, présentations en PDF
```

## Voir le site sur ton ordinateur
Double-clique sur `index.html` : il s'ouvre dans ton navigateur.

## Ajouter un projet
Dans `js/projets.js`, copie un bloc `{ ... },`, colle-le dans la liste et modifie les champs.
Pour un rapport : mets le PDF dans `assets/docs/` et ajoute
`{ texte: "Rapport (PDF)", url: "assets/docs/mon-rapport.pdf" }` dans `liens`.

## Mettre en ligne (GitHub Pages, gratuit)
1. Crée un compte sur github.com.
2. Crée un dépôt nommé exactement `ton-pseudo.github.io` (public).
3. « Add file » → « Upload files » → glisse le CONTENU du dossier `portfolio`
   (index.html doit être à la racine) → « Commit changes ».
4. Settings → Pages → Source : « Deploy from a branch », branche `main`, dossier `/ (root)`.
5. Après 1–2 minutes, le site est en ligne sur `https://ton-pseudo.github.io`.

Pour une mise à jour : réuploade les fichiers modifiés, le site se met à jour tout seul.

Alternative sans compte GitHub : app.netlify.com/drop → glisse le dossier `portfolio`.
