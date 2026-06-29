# Downloadable assets

Files placed in this folder are served from the site root under `/assets/`.

## Application PDF

The careers page ("Open Positions") links each role to an application PDF. Add the
file here and make sure the name matches the `pdf` path in
`web/src/pages/CareersPage.vue`:

- `capital-aerospace-application.pdf` → served at `/assets/capital-aerospace-application.pdf`

To use a different application form per position, drop additional PDFs here and
update the `positions` array in `CareersPage.vue`.
