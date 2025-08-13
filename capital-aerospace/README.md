# Capital Aerospace Corp — Website Starter

This folder contains the full website (code + logo + styles), ready to deploy. **Add your own helicopter photos** into the image folders below.

## Folder Structure
```
capital-aerospace/
├── index.html
├── services.html
├── fleet.html
├── gallery.html
├── team.html
├── careers.html
├── contact.html
├── privacy.html
├── terms.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── manifest.webmanifest
└── assets/
    ├── css/styles.css
    ├── js/script.js
    ├── logo/logo.svg
    └── images/
        ├── .gitkeep
        └── thumbs/
            └── .gitkeep
```

## Add Your 7 Photos
Place these files:
```
assets/images/hero-01.jpg
assets/images/hero-02.jpg
assets/images/hero-03.jpg
assets/images/hero-04.jpg
assets/images/hero-05.jpg
assets/images/hero-06.jpg
assets/images/hero-07.jpg
```
Then create thumbnails (~600px wide) with the same names into:
```
assets/images/thumbs/hero-01.jpg
...
assets/images/thumbs/hero-07.jpg
```

> Tip (PowerShell): if you want, I can provide a script that auto-resizes your originals to the correct sizes.

## Formspree
Edit `contact.html` and replace `YOUR_FORM_ID` with your real Formspree endpoint ID.

## Deploy
If you’re using GitHub + Netlify:
```
git add .
git commit -m "Initial website with images"
git push
```
Netlify will deploy automatically.
