# Portfolio — Gaspard Nordin (v2, multi-page)

## Structure
```
index.html        Dashboard (overview, photo, featured cards, skills)
projects.html     Projects (filters + detail window)
resume.html       Resume (CV shown inside the page + download button)
academics.html    Academic journey (timeline)
experience.html   Experience (timeline)
css/style.css     Look & feel — colours at the top (--accent)
js/data.js        ALL YOUR CONTENT: profile, projects, experience, education, skills
js/main.js        Builds the sidebar and the pages (no need to edit)
assets/cv.pdf     Your CV
assets/images/    photo.jpg + project images
assets/docs/      Reports, posters, slides (PDF)
```

## Editing
- Text, projects, experience, education → `js/data.js` only.
- Photo → put `photo.jpg` in `assets/images/`.
- Project image → put it in `assets/images/` and set `image: "assets/images/name.jpg"`.
- New CV → replace `assets/cv.pdf` (same name).

## Replacing the old site on GitHub
1. Open `https://github.com/USERNAME/USERNAME.github.io/upload`
2. Drag in everything inside this folder (the 5 .html files, `css`, `js`, `assets`, `README.md`).
   Files with the same name are overwritten.
3. Click **Commit changes**. The site updates within 1–2 minutes (refresh with Ctrl + F5).
4. Optional clean-up: the old `js/projets.js` is no longer used. Open it on GitHub →
   `…` menu (top right of the file) → **Delete file** → **Commit changes**.
