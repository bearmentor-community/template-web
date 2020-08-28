# ⚫ Template Web

> Template description

## Repositories

You should clone all of the required repositories:

- [`template`](https://github.com/azobu-projects/template)
- [`template-web`](https://github.com/azobu-projects/template-web)
- [`template-api`](https://github.com/azobu-projects/template-api)

## Tech Stack

Sorted by priority:

- JavaScript
- Node.js, npm, Yarn
- React
- Redux
- React Redux
- React Router
- React Hook Form
- Connected React Router
  - query-string
- Redux Logger
- Redux Thunk
- Redux DevTools Extension
- React Helmet Async
- React Google Analytics
- CSS-in-JS
  - xstyled
  - Emotion
- Axios
- JSON Web Token (JWT) Decode
- dayjs
- React HTML Parser
- React Lazy Load Image Component
- React Syntax Highlighter
- Draft.js
- Marked.js
- Jest
- Sinon
- React Testing Library
- Serve
- ESLint
  - Prettier
  - Standard
- Netlify
- Cloudflare
- Uniregistry

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
