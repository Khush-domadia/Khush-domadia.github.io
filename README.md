# Khush Domadiya — Healthcare Business Analyst Portfolio

Production-ready static portfolio for GitHub Pages. The design combines a clinical enterprise visual system, editorial case-study storytelling, and a five-stage Business Analyst operating model.

## Files included

- `index.html` — main portfolio
- `styles.css` — shared responsive styles
- `app.js` — navigation, reveal animation, scroll UI, and project search
- `projects.html` — searchable project archive
- `pmo-dashboard.html` — PMO Delivery Health Dashboard evidence page
- `pmo-project-pack.html` — Scholarship Portal PMO artifact library
- `favicon.svg`
- `robots.txt`
- `sitemap.xml`
- `404.html`
- `images/headshot.jpg`
- `assets/Resume.pdf` — the new resume supplied for this redesign
- `ASSET_CHECKLIST.md` — exact files and links expected from the existing repository
- `LINK_AUDIT.md` — comparison of older links with the production build
- `QA_REPORT.md` — validation and responsive-test summary
- `previews/` — screenshots generated during testing

## Important: merge this into the existing repository

The new pages link to case studies and PMO artifacts that already live in the current repository's `assets/` folder. **Do not delete the existing `assets/` folder when copying these files.** Merge the package into the repository so those files remain available.

Recommended workflow in VS Code:

1. Make a backup branch of the current repository.
2. Copy the contents of this package into the repository root.
3. Choose **merge/replace files**, not delete-and-recreate the entire repository.
4. Keep the existing case-study and PMO files inside `assets/`.
5. Confirm the filenames in `ASSET_CHECKLIST.md` match exactly; GitHub Pages paths are case-sensitive.
6. Open `index.html` locally with Live Server.
7. Test the resume, case-study, PMO artifact, Tableau, LinkedIn, GitHub, and email links.
8. Commit and push to the branch used by GitHub Pages.

## Hero overlap fix

The portrait and the “Portfolio signal” panel are independent CSS grid items on desktop, tablet, and mobile. Neither uses absolute positioning, so the two cards do not overlap at any supported breakpoint.

## Local testing

Opening `index.html` directly works for most content. VS Code Live Server is preferable because it more closely matches GitHub Pages and makes relative-link testing easier.

## Main links already incorporated

- Resume
- LinkedIn
- GitHub
- Email
- Wayfinding case study
- ACS Meetings App case study
- PMO Delivery Health Dashboard documents and Tableau views
- Scholarship Portal PMO artifact set
- Existing analytics and GitHub project repositories

See `ASSET_CHECKLIST.md` for the three optional ACS supporting artifacts referenced in the older HTML but not activated in this build.
