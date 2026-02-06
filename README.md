# Rick and Morty with Angular

A small Angular application that consumes the [Rick and Morty API](https://rickandmortyapi.com/documentation) to browse characters, view details, search, filter, and paginate results. This project is intended as a learning / demo app for building Angular UIs and integrating with REST APIs.

## Demo

- Live demo: (add your demo URL here)
- Screenshots: (add paths to screenshots or include them in the repo)

## Features

- List characters with pagination
- Search characters by name
- Filter by status, species, gender, and origin (if implemented)
- Character detail pages with more information
- Responsive layout for mobile and desktop
- Simple client-side state management (service + observables)
- Basic error handling and loading states

## Tech stack

- Angular (v12+ recommended)
- TypeScript
- RxJS
- Angular CLI
- Optional: Angular Material or Bootstrap (if used)

## Prerequisites

- Node.js (v14+ recommended)
- npm (v6+ or npm 8+ recommended) or yarn
- Angular CLI (optional but recommended): `npm install -g @angular/cli`

## Getting started (local development)

1. Clone the repository

   ```bash
   git clone https://github.com/gabriel-pipia/Rick-and-Morty-with-Angular.git
   cd Rick-and-Morty-with-Angular
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the dev server

   ```bash
   ng serve
   ```

   Open your browser at http://localhost:4200

## Configuration

The app uses the public Rick and Morty API by default. No API key is required.

If the project uses environment configuration, you can adjust the API base URL in `src/environments/environment.ts`:

```ts
export const environment = {
  production: false,
  apiBaseUrl: 'https://rickandmortyapi.com/api'
};
```

(When building for production, update `environment.prod.ts` if necessary.)

## Build

To build the app for production:

```bash
ng build --prod
```

The built files will be in the `dist/` folder. Serve them with any static server or host provider.

## Tests

Run unit tests:

```bash
ng test
```

Run end-to-end tests (if configured):

```bash
ng e2e
```

## Linting & Formatting

If the project has linting configured:

```bash
ng lint
```

If using Prettier / ESLint, run the relevant scripts from package.json, for example:

```bash
npm run lint
npm run format
```

## Project structure (example)

- src/
  - app/
    - components/       # UI components (character list, detail, search, etc.)
    - services/         # API services and state
    - models/           # TypeScript interfaces
    - pages/            # Page-level components / routes
  - assets/             # images, icons
  - environments/       # environment.ts and environment.prod.ts

Adjust according to the actual structure in this repo.

## API

This app uses the public [Rick and Morty API](https://rickandmortyapi.com/documentation). Example endpoints:

- GET /character
- GET /character/:id
- GET /location
- GET /episode

Refer to the API docs for query parameters and pagination.

## Deployment

- Build the app: `ng build --prod`
- Deploy the contents of `dist/` to your hosting provider (Netlify, Vercel, GitHub Pages, etc.)
- If deploying to GitHub Pages, you can use `angular-cli-ghpages` or other deployment tools.

## Contributing

Contributions are welcome! Suggested workflow:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Commit your changes and push: `git push origin feat/my-feature`
4. Create a pull request with a clear description of changes

Please include tests where appropriate and follow existing code style.

## Roadmap / TODOs (examples)

- Add favorites (localStorage)
- Add caching for API responses
- Improve accessibility
- Add more comprehensive tests (unit + e2e)
- Integrate Angular Material for consistent UI
- Pagination improvements and infinite scroll option

## Troubleshooting

- If the app shows CORS issues, ensure the Rick and Morty API endpoint is reachable or use a proxy during development: configure `proxy.conf.json` and start with `ng serve --proxy-config proxy.conf.json`.
- If dependencies fail to install, try removing `node_modules` and re-running `npm install`.

## License

Specify a license for the project (e.g., MIT). Example:

MIT © your-name

## Acknowledgements

- [Rick and Morty API](https://rickandmortyapi.com/documentation)
- Any libraries or resources you used (Angular, Angular Material, Bootstrap, etc.)

## Contact

Project maintained by Gabriel Pipia — add contact details or link to your GitHub profile: [gabriel-pipia](https://github.com/gabriel-pipia)
