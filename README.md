# ⭕ Template Web

> Template Web is a quick starter kit project to build a complete web app using React and Redux.

[![Website](https://img.shields.io/website-up-down-green-red/https/template.azobu.com.svg)](https://template.azobu.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/afd44825-3e55-4c8c-a0c3-5f012c13b706/deploy-status)](https://app.netlify.com/sites/azobu-template/deploys)
![License](https://img.shields.io/github/license/azobu-projects/template-web)

The complete list of all features are located at [`azobu-projects/template`](https://github.com/azobu-projects/template) or live on [template.azobu.com](https://template.azobu.com/about)

## Table of Contents

- Introduction
- [Repositories](#repositories)
- [Tech Stack](#tech-stack)
- [Application Structure](#application-structure)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Setup Environment Variables](#setup-environment-variables)
  - [Run](#run)
  - [Lint](#lint)
  - [Test](#test)
  - [Build](#build)
  - [Deployment](#deployment)

## Repositories

You should clone all of the required repositories:

- [`template`](https://github.com/azobu-projects/template)
- [`template-web`](https://github.com/azobu-projects/template-web)
- [`template-api`](https://github.com/azobu-projects/template-api)

## Tech Stack

### Primary

All the frontend/web dependencies sorted by priority:

- **Git** — Distributed version control system
  - **GitHub** — Provides hosting for software development and version control using Git
- **JavaScript** — The primary programming language
  - **Node.js** — JavaScript runtime environment and package manager
  - **npm, Yarn** — JavaScript runtime environment and package manager
- **REST API** — REpresentational State Transfer, architectural style for distributed hypermedia systems
- **React** — JavaScript library for building user interfaces
  - **Webpack** — JavaScript module bundler
  - **Babel** — Transcompiler for next generation JavaScript
- **Redux** — Predictable state container for JavaScript apps
- **React Redux** — Official React binding for Redux
- **React Router** — Declarative routing for React
- **React Hook Form** — Simple React forms handling and validation
- **Connected React Router** — Redux binding for React Router v4
  - **`query-string`** — Parse and stringify URL query strings
- **Redux DevTools Extension** — Tools for debugging Redux state changes
- **Redux Logger** — Logger for Redux
- **Redux Thunk** — Redux middleware for asynchronous actions with Thunk
- **React Helmet (Async)** — Document head manager to enhance SEO
- **CSS-in-JS** — Pattern which CSS is composed using JavaScript
  - **Styled System** — Style props for rapid UI development
  - **xstyled** — Consistent theme based on Styled System for `styled-components` and `emotion`
  - **Emotion** — Library designed for writing CSS styles with JavaScript
- **Axios** — Promise based HTTP client for the browser and Mode.js
- **React-GA** — React Google Analytics Module
- **Sentry** — Application monitoring and error tracking software
- **LogRocket** — Logging and Session Replay for JavaScript Apps
- **JSON Web Token (JWT)** — Compact URL-safe means of representing claims
  - **`jwt-decode`** — Library that helps decoding JWT
- **`dayjs`** — Small immutable date time library alternative to Moment.js
- **React HTML Parser** — Converts HTML strings directly into React components
- **React Lazy Load Image Component** — React Component to lazy load images and components using a HOC
- **Draft.js** — Rich Text Editor Framework for React
- **Serve** — Static website serving for local development
- **ESLint** — Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript
  - **Prettier** — Opinionated code formatter and extension for code editor
  - **Standard** — JavaScript style guide, linter, and formatter
- **Netlify** — All-in-one platform for automating modern web projects
- **Cloudflare** — Enterprise-grade authoritative DNS service
- **Uniregistry** — Retail domain name registrar

### Alternative

Alternative or future dependencies:

- **Maps API**
  - **Google Maps** — Web mapping service developed by Google
  - **Mapbox** — Mapping platform for custom designed maps
- **D3.js** — JavaScript library for producing dynamic, interactive data visualizations
- Alternative of REST API:
  - **GraphQL API** — Data query and manipulation language for APIs
    - **Apollo** — Data graph platform to unify APIs, microservices, and databases with GraphQL
- **Cypress** — JavaScript end-to-end testing framework
- **Jest** — Delightful JavaScript testing framework
- **React** Testing Library — Very light-weight solution for testing React components
- **Sinon** — Standalone test spies, stubs and mocks for JavaScript
- **TypeScript** — Typed JavaScript at application-scale JavaScript
- **Redux Saga** — Redux middleware for asynchronous actions or side effects with Saga
- **Marked.js** — Markdown parser and compiler
- **New Relic** — Single source of truth for infrastructure monitoring, APM agents, browser monitoring, and logging
- **Docker** — Virtualization to deliver software in packages called containers
  - **Docker Compose** — Provides a way to document and configure all of the app service dependencies

### Avoided

Never be dependencies:

- **Other non-JavaScript family languages**
  - Avoid Elm, ReasonML, and others. Template is scope limited to raw JavaScript or TypeScript-related. For that other matters it's better to create different repositories.
- **Other non-React libraries/frameworks**
  - Avoid Preact as some of the React features and integrations are missing
  - Avoid jQuery and non-familiar ones
- **Other non-Redux state management solutions**
  - Avoid Redux Toolkit as it is less flexible than plain Redux
  - Avoid MobX and non-familiar ones
- **High-level framework or wrapper for React**
  - Avoid Next.js and GatsbyJS because Template is focused on less magic and faster build time.

For dependencies in the API part, [see `template-api`](https://github.com/azobu-projects/template-api).

## Application Structure

```sh
template-web
├── LICENSE    # License
├── README.md  # Documentation
├── coverage   # Test coverage files
├── package.json    # Node.js package configuration
├── postinstall.sh  # Script to be run after dependencies installation
├── public
│   ├── _redirects     # Setup redirect index.html for static hosting like Netlify
│   ├── assets         # Various asset files
│   ├── favicon.ico    # Favicon
│   ├── index.html     # Primary HTML file for application root
│   ├── manifest.json  # Application manifest meta data
│   └── robots.txt     # Rules for search engine crawlers
├── src
│   ├── App.js        # Primary React application configuration
│   ├── App.test.js   # Test file for App.js
│   ├── components    # Stateless functional components or dumb components
│   ├── containers    # Stateful containers or smart components
│   ├── data          # JSON data files
│   ├── index.js      # Entry point for the React application
│   ├── pages         # Pages for React Router
│   ├── redux         # Files for Redux
│   │   ├── actions   # Redux actions with thunks
│   │   ├── reducers  # Redux reducers
│   │   └── store.js  # Redux store
│   ├── serviceWorker.js  # Setup Service Worker
│   ├── setupTests.js     # Setup Jest test suite
│   ├── site.json         # Metadata for the application
│   └── utils  # Various utility functions
└── yarn.lock  # Lock version of dependencies
```

There are various dotfiles related to environment variables, ESLint, Git ignore, and Prettier.

## Getting Started

### Installation

Install dependencies using `yarn`:

```sh
yarn
```

You should also install and run `template-api` before continuing.

### Setup Environment Variables

For development, edit `.env.development.local` file:

```sh
REACT_APP_API_URL=http://localhost:3000
REACT_APP_GOOGLE_ANALYTICS_UA=UA-xxxxxxxxx-x
```

For production, edit `.env.production.local` file:

```sh
REACT_APP_API_URL=http://api.example.com
REACT_APP_GOOGLE_ANALYTICS_UA=UA-xxxxxxxxx-x
```

### Run

```sh
yarn dev
```

Access the web app on <http://localhost:8000>.

### Lint

```sh
yarn lint
```

To fix basic issues:

```sh
yarn lint --fix
```

### Test

```sh
yarn test
```

### Build

```sh
yarn build
```

```sh
yarn serve
```

Access the built web app on <http://localhost:5000>.

### Deployment

If deployment is taken care of by Netlify, setup:

```sh
# Build command
yarn build
# Publish directory
build/
```

## Tips

- [Hot reloading with create-react-app without ejecting](https://medium.com/@brianhan/hot-reloading-cra-without-eject-b54af352c642)

## Authors

- [M Haidar Hanif](https://mhaidarhanif.com) ([@mhaidarh](https://github.com/mhaidarh))
- [Azobu Team](https://azobu.com) ([@azobu](https://github.com/azobu))

## License

See [LICENSE](./LICENSE)
