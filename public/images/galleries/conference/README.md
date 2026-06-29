# Conference Gallery photos

The Conference Gallery on the home page reads photos from these three folders
(15 per section). Until a file exists, that slot shows a tasteful placeholder
tile, so the gallery always looks intentional.

## Expected files

- `pre-conference/pre-01.jpg` … `pre-15.jpg`
- `day-1/day1-01.jpg` … `day1-15.jpg`
- `day-2/day2-01.jpg` … `day2-15.jpg`

Just drop in JPG/PNG files with these exact names — no code changes needed.
To change a path, add a caption, or use a different count, edit
`CONFERENCE_GALLERY` in `src/pages/Index.tsx`.

## Before adding (recommended)

Keep page weight low: resize photos so the longest edge is ~1600 px and export
at quality ~80 (a few hundred KB each). The gallery shows images with
`object-contain` over a soft blurred backdrop, so any aspect ratio looks clean
without cropping or stretching.
