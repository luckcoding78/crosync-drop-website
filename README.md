# crosync-drop-website

Static GitHub Pages website for Crosync Drop.

## Local development

This site uses plain HTML, CSS, and JavaScript.

Open `index.html`, `privacy.html`, or `terms.html` in a static server, or use the GitHub Pages deployment once published.

## Tests

```bash
npm test
```

## Updating download links

1. Publish new GitHub Release assets
2. Update `assets/js/content.js` download URLs
3. Verify both buttons point to the correct files
4. Push the site update to GitHub Pages

## Deploying to GitHub Pages

1. Push the repository to GitHub
2. In the repository settings, enable GitHub Pages with GitHub Actions
3. Keep `.github/workflows/pages.yml` on `main`
4. Push changes to `main` to publish the latest static site

## Remaining manual inputs

- Replace placeholder GitHub Releases asset names if the final names differ
- Insert final Privacy Policy text in English, Chinese, and Japanese
- Insert final Terms of Use text in English, Chinese, and Japanese
