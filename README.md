# Onkar Rane portfolio

Static portfolio for Onkar Rane, Senior Data Engineer. The site is built from plain HTML, CSS, and JavaScript and is prepared for GitHub Pages with the custom domain `onkarane.com`.

## Deploy

The `Deploy portfolio` GitHub Actions workflow assembles the public site from `index.html`, the styles and script, `layout.css`, and `assets/`, then publishes the artifact to GitHub Pages whenever a commit is pushed to `main`.

In the repository's **Settings → Pages**, choose **GitHub Actions** as the build and deployment source and set `onkarane.com` as the custom domain. GitHub Pages publishes the website publicly even when its source repository is private, provided the account or organization plan supports Pages on private repositories.

## Local preview

Serve this directory with any static HTTP server and open the root URL. The page uses responsive CSS, reduced-motion support, and no build-time package dependencies.
