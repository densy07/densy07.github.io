# Repository Guidelines

## Purpose

- This repository is the static GitHub Pages directory for the owner's Vercel sites.
- Keep the published page fast, accessible, and usable without a build step.

## Implementation

- Use plain HTML, CSS, and small, dependency-free JavaScript only.
- Keep every enabled site link in `index.html` so the directory remains usable when JavaScript is disabled.
- Use `styles.css` for presentation and `script.js` only for progressive enhancement.
- Do not add a framework, package manager, dependency, generated bundle, or runtime API call.

## Catalog updates

- Refresh the catalog from the connected Vercel account before changing site entries.
- Merge the Vercel result into `sites.json` first. Match by project name: update `url` and order; preserve existing `enable` and `nameZh` values; default new projects to `enable: true` and draft a `nameZh`; drop projects that no longer exist on Vercel.
- Treat a missing `enable` field as `true`. Users may set `enable` to `false` in `sites.json` to keep a site in the local catalog without publishing it.
- `nameZh` is local configuration. Do not overwrite it on refresh. If it is missing or empty, draft a Chinese title before writing JSON; if it is still empty when rendering, fall back to `name`.
- Users may edit `enable` and `nameZh` in `sites.json` after a merge.
- After the JSON merge, write only `sites.filter(site => site.enable !== false)` into `index.html` (count, snapshot date, and cards numbered from `01`). Each card uses `nameZh` as the heading, `name` as the subtitle, and a `data-search` value of `nameZh`, `name`, and the hostname. Disabled sites must not appear in the HTML.
- Do not fetch `sites.json` or any other catalog API at runtime.
- Publish one stable primary URL per project. Prefer the shortest public project alias and exclude Git branch aliases and deployment-specific hashed URLs.
- Treat project names, links, ordering, counts, and snapshot dates as a point-in-time export. Update `sites.json` `snapshot` to the refresh date.
- Never publish credentials, environment values, team IDs, project IDs, deployment IDs, or other private account metadata.
- Do not present deployment health or availability as live data on this static page.
- Do not add a generator script, package manager, or build step for catalog updates.

## Validation

- Confirm `sites.json` names, URLs, and order match the latest Vercel query, and that existing `enable` and `nameZh` values were preserved.
- Confirm every site in `sites.json` has `name`, `url`, `enable`, and `nameZh`.
- Confirm the rendered catalog count, Chinese titles, English subtitles, and URLs match the enabled `sites.json` entries, not the full Vercel list.
- Verify every published URL is unique, uses HTTPS, and follows the stable-alias rule.
- Check JavaScript syntax, serve the files with a local static HTTP server, and run `git diff --check`.
- Do not add a build step solely for validation.

## Operations

- Do not commit, push, deploy, or modify GitHub Pages or Vercel configuration without explicit user authorization.
