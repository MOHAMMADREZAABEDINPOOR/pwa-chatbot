<div align="center">

<img src="assets/readme/hero.gif" width="1200" alt="PIMX CHAT PWA — rotating 3D geometry" />

**[English](README.md) · [فارسی](README.fa.md)**

<img src="assets/readme/identity.svg" width="1200" alt="ai / English and Persian documentation" />

</div>

# PIMX CHAT PWA

A Node/Express AI-chat project with a companion pimxchat web directory, localized pages and SQLite persistence helpers.

[GitHub](https://github.com/MOHAMMADREZAABEDINPOOR/pwa-chatbot) · [PIMX / Profile](https://github.com/MOHAMMADREZAABEDINPOOR) · [Static artwork](assets/readme/hero.png)

## Features

- Chat pages and local language resources
- Express/Node server code and Google AI dependency
- SQLite helpers for persistent records
- Proxy-agent dependencies for configured environments

## Stack

| Tool | Version / source |
|---|---|
| Express | `^5.1.0` |

## Getting started

Node.js 22.12+ and the package manager declared in package.json. Install dependencies from the checked-in lockfile where available.

```bash
git clone https://github.com/MOHAMMADREZAABEDINPOOR/pwa-chatbot.git
cd pwa-chatbot

npm ci
cd pimxchat
node server.js
```

## Configuration

No standard environment template is defined. Standalone exercises need no external configuration; inspect any service constants or paths in the source before running.

## Usage

Inspect pimxchat/server.js and pimxchat/config.js for the current server/provider settings. Install root dependencies, then run the server from the web directory.

## Project structure

| Path | Role |
|---|---|
| [`assets/`](assets/) | Brand/media/README assets |
| [`pimxchat/`](pimxchat/) | Chat/web modules |
| [`package.json`](package.json) | Project entry/configuration file |

## Commands and checks

No automated test command is declared in a manifest. Verify behavior through a local example run.

## Deployment

The Node process/API and SQLite storage need hosting with persistent disk. Static files alone do not run the AI backend.

## Limitations

There are multiple server files and no npm start script. Review the selected entry point and any embedded credentials before deployment. AI responses require connectivity even when static assets are cached.

## Troubleshooting

- Missing packages: install dependencies using the project’s package manager.
- API/network failure: check the configured origin, provider and hosting bindings.
- Old assets: rebuild when a build script exists, then clear the browser cache.

## Contributing

Create a focused branch, verify the affected behavior and explain the change clearly. Keep private data, build outputs and local databases out of commits.

## License

No repository-level license file is included in this snapshot. Public visibility alone does not grant reuse rights; contact the repository owner for terms.

---

Part of **PIMX** · Documentation in English and Persian.
