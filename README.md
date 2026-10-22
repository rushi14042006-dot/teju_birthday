# The Road We Took — 2019 to ∞
Run: `npm install` then `npm run dev`. Build: `npm run build` then `npm run preview`.
## Photos
Drop your files in `public/images/` using the names in `src/data/*.ts`:
hero/teju-hero.jpg, hero-02.jpg, hero-03.jpg · timeline/ch-01..10.jpg · archive/memory-001..064.jpg · finale/finale.jpg.
Missing files show a labelled placeholder (and a console warning). For more photos, edit the length in `src/data/memories.ts` or replace the array with your own objects.
## Words
Captions/stories: `src/data/memories.ts`. Timeline: `timeline.ts`. All letters and the unsent letter: `letters.ts`. Text in [brackets] is placeholder.
## Deploy
- GitHub Pages: set `base` in vite.config.ts to `'/repo-name/'`, run `npm run build`, publish `dist/` (e.g. gh-pages branch).
- Netlify: build `npm run build`, publish dir `dist`.
- Vercel: import repo, framework Vite, output `dist`.
## Memory Reel & countdown
Add photos to `public/images/reel/` as `reel-001.jpg`, `reel-002.jpg`… and set `COUNT` in `src/data/reel.ts` (or list your own objects with captions/dates).
The countdown targets 23 October 2026, 00:00 in the visitor's local time; change it in `src/components/Countdown.tsx`.
## Surprise features
- **Sealed content:** the Unsent Letter and the finale unlock at 23 Oct 2026 00:00, the daily cards open 19–23 Oct, and the time capsule opens 23 Oct 2027 (all in the visitor's local time). Preview everything with `?preview=letmein` (change `PREVIEW_KEY` in `src/data/config.ts`). This is client-side only, so a determined visitor could bypass it.
- **Entry password:** `PASSWORD` in `src/data/config.ts` (blank disables it). Client-side only, not real security.
- **Easter egg:** type the `EGG_WORD` anywhere, or click the ∞ in the footer.
- **Quiz, awards, daily cards, capsule:** `src/data/fun.ts`. **Friendship start date:** `FRIENDS_SINCE` in config.
- **Photo optimiser:** put originals in `photos-original/<folder>/`, run `npm run images`, get compressed copies in `public/images/`.
## Cake & Future You
- Cake message: `cakeNote` in `src/data/fun.ts`. The microphone is only used to detect a loud puff of air, nothing is recorded or sent, and tapping works without it (microphones need https or localhost).
- Letter from Future You: question and letter wording in `src/components/FutureYou.tsx`. Answers never leave the browser.
## Coquette design layer
Palette variables are at the bottom of `src/index.css` (blush, cream, rose, lilac, cherry). Floating hearts, bows, pearls, butterflies and petals are inline SVG in `src/components/Floaties.tsx` (edit the `items` list to move or remove them); no image assets or 3D library are needed.
## Pages
The site is a multi-page experience (hash routes, so it works on GitHub Pages): Home, Our Story, Memories & Reels, Our Universe, Teju, Letters, Birthday. Titles, taglines and descriptions: `src/components/Pages.tsx`. Cover photos: `public/images/pages/<id>.jpg` (story, memories, universe, teju, letters, birthday).
## The Ribbon Road (Memories & Reels page)
Chapters live in `src/data/timelineChapters.ts` (add an object to add a chapter; photos at `public/images/timeline/<image id>.jpg`, e.g. `beginning-01.jpg`). The ribbon path is generated from the measured chapter positions (`src/utils/ribbonGeometry.ts`), so it re-fits on resize. It is rendered by `src/components/RibbonRoad/RibbonRoad.tsx` and ends in `RibbonInfinity.tsx`. To use it on another page: `import RibbonRoad from './components/RibbonRoad/RibbonRoad'` and render `<RibbonRoad/>` (it has no global nav of its own). It expects an element with id `archive` for the "Visit the Memory Archive" button.
## Ribbon Road (Memories page)
`<RibbonRoad/>` (src/components/RibbonRoad/) is a self-contained timeline that sits under the Memories & Reels hero. To use it on another page, import it and render `<RibbonRoad/>`; it brings its own sticky chapter bar and does not touch the global navigation.
- Chapters/photos/notes: `src/data/timelineChapters.ts` (add an object to add a chapter). Ribbon colours, widths and loops: `src/data/ribbonConfig.ts`.
- Photos: `public/images/timeline/` (beginning-01.jpg, school-memory-01..03.jpg, between-01.jpg, growing-up-01..02.jpg, milestone-2024-01.jpg, milestone-2025-01.jpg, milestone-2026-01..02.jpg, favorite-memory-01.jpg).
