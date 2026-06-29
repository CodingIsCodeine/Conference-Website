# Conference gallery — originals & optimization

This folder holds the **full-resolution camera originals** for the home-page
Conference Gallery. Originals are **kept local only** (git-ignored) because they
are large (~9–10 MB each). The website ships the **optimized WebP copies** that
the pipeline generates into `public/`.

## Folders

```
gallery-originals/
  pre-conference/    <- drop originals here
  day-1/
  day-2/
  captions.json      <- optional (see below)
```

File names don't matter (any `.jpg/.jpeg/.png`); they are sorted naturally, so
`01.JPG, 02.JPG, …` keeps a predictable order.

## Add or update photos (one command)

1. Drop/replace photos in the section folders above.
2. Run:

   ```bash
   npm run optimize:gallery
   ```

This regenerates, for every photo:

- `public/images/galleries/conference/<section>/<name>.webp` — full image, max
  2048 px longest edge, WebP q82 (visually indistinguishable from the original
  at on-screen sizes).
- `public/images/galleries/conference/<section>/thumbs/<name>.webp` — 400 px
  thumbnail, WebP q72.

…and rewrites the typed manifest `src/data/galleryManifest.ts`, which the
gallery component imports. **No code or path edits are ever required** — the
gallery updates itself from the manifest. Removing a photo and re-running also
prunes its stale WebP outputs.

## Captions (optional)

Create `gallery-originals/captions.json` to caption photos; captions survive
regeneration. Keys are `"<section-id>/<file-name-without-extension>"`:

```json
{
  "day-1/01": "Inaugural session",
  "day-1/05": "Keynote address",
  "day-2/12": "Best-paper award"
}
```

## Tuning (rarely needed)

Edit the `FULL` / `THUMB` constants in `scripts/optimize-gallery.mjs` to change
the max dimension or quality. AVIF is intentionally not used: WebP is universally
supported and works in both `<img>` and the CSS blurred backdrop without a
`<picture>` fallback, while keeping encode time low.
