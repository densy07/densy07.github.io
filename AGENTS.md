# Repository Guidelines

## Purpose

- This repository is the static GitHub Pages directory for the owner's Vercel sites.
- Keep the published page fast, accessible, and usable without a build step.

## Implementation

- Use plain HTML, CSS, and small, dependency-free JavaScript only.
- Keep every site link in `index.html` so the directory remains usable when JavaScript is disabled.
- Use `styles.css` for presentation and `script.js` only for progressive enhancement.
- Do not add a framework, package manager, dependency, generated bundle, or runtime API call.

## Catalog updates

- Refresh the catalog from the connected Vercel account before changing site entries.
- Publish one stable primary URL per project. Prefer the shortest public project alias and exclude Git branch aliases and deployment-specific hashed URLs.
- Treat project names, links, ordering, counts, and snapshot dates as a point-in-time export.
- Never publish credentials, environment values, team IDs, project IDs, deployment IDs, or other private account metadata.
- Do not present deployment health or availability as live data on this static page.

## Validation

- Confirm the rendered catalog count and names match the latest Vercel query.
- Verify every published URL is unique, uses HTTPS, and follows the stable-alias rule.
- Check JavaScript syntax, serve the files with a local static HTTP server, and run `git diff --check`.
- Do not add a build step solely for validation.

## Operations

- Do not commit, push, deploy, or modify GitHub Pages or Vercel configuration without explicit user authorization.
