# madhan.dev: portfolio + notes

Personal site for **Madhan Kumar Tammineni**: AI engineer / software engineer.
Built with [Astro](https://astro.build) and themed like a bedside **vitals monitor**: each section is a "channel".

## Run locally

```bash
npm install
npm run dev       # http://localhost:4321/Madhan-Portfolio/
npm run build     # production build into dist/
```

## Where things live

| What | File |
| --- | --- |
| All resume content (bio, jobs, projects, skills, extras) | `src/data/profile.ts` |
| Blog posts | `src/content/blog/*.md` |
| Page sections | `src/components/*.astro` |
| Avatar illustration | `src/components/Avatar.astro` |
| Project cover art | `src/components/ProjectArt.astro` |
| Colors / fonts / global styles | `src/styles/global.css` |
| Deploy pipeline | `.github/workflows/deploy.yml` |

## Writing a blog post

1. Add a Markdown file to `src/content/blog/`, e.g. `my-week-in-rag.md`:

   ```md
   ---
   title: "What I learned about RAG chunking"
   description: "One-line summary for the card."
   date: 2026-10-20
   tags: ["ai", "rag"]
   emoji: "🧠"
   draft: false
   ---

   Your post in Markdown…
   ```

2. Commit and push to `main`. GitHub Actions rebuilds the site and the post goes live in about a minute.

Posts are stored as plain files in this repo: no database and no CMS, and you get full version history for free.
Images go in `public/images/blog/`.

## Deploying (GitHub Pages)

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Merge to `main`. The site is published at `https://madhan120-prog.github.io/Madhan-Portfolio/`.

To use a custom domain later, set `site` in `astro.config.mjs` to the domain and remove `base`.

## Features

- Boot-screen intro (once per session, skippable, off for reduced-motion users)
- Animated ECG hero, typewriter roles, "vitals" stat readouts
- Waving illustrated avatar (placeholder until a real photo/bitmoji is added)
- Bento "About" grid, expandable experience timeline, project cards that open into detail modals
- `⌘K` / `Ctrl K` command palette, light/dark theme, cursor glow, scroll progress, scroll-reveal
- Blog with tags, tag filtering, reading time, syntax highlighting, RSS, and sitemap
