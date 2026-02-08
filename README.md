# Rick and Morty with Angular

A modern, elegant Angular application that consumes the [Rick and Morty API](https://rickandmortyapi.com/documentation) to browse characters, episodes, and explore the multiverse. Built with a premium dark theme, glassmorphism effects, and smooth animations.

![Rick and Morty App](./screenshot.png)

## ✨ Features

### Characters
- **Browse all characters** with responsive grid layout
- **Advanced filtering** by status (Alive/Dead/Unknown), gender, and species
- **Real-time search** by character name
- **Server-side filtering** for efficient API usage
- **Detailed character pages** with hero sections and episode appearances

### Episodes
- **Browse all episodes** across all 5 seasons
- **Filter by season** (S01 - S05)
- **Search episodes** by name or episode code
- **Episode detail pages** with character cast

### UI/UX
- **Premium dark theme** with vibrant accent colors
- **Glassmorphism effects** throughout the app
- **Smooth animations** and micro-interactions
- **Responsive design** - Mobile-first approach
- **Hero slider** with featured characters
- **Horizontal card slider** for trending characters
- **Elegant navigation** with animated hamburger menu
- **Loading states** and error handling

## 🎨 Design Highlights

- **Color Palette:**
  - Rick Green: `#97CE4C`
  - Portal Blue: `#00B0C8`
  - Accent Pink: `#E85D75`
  - Dark backgrounds with subtle gradients

- **Typography:** Inter font family for clean, modern look

- **Components:**
  - Character cards with status badges and episode counts
  - Pulsing glow animation for "Alive" characters
  - Gradient borders and hover effects
  - Pill-shaped filter chips and buttons

## 🛠️ Tech Stack

- **Framework:** Angular 17+
- **Language:** TypeScript
- **Styling:** SCSS with custom mixins and variables
- **API:** Rick and Morty REST API
- **Fonts:** Google Fonts (Inter)
- **Icons:** Font Awesome 6

## 📋 Prerequisites

- Node.js (v18+ recommended)
- npm (v9+) or yarn
- Angular CLI: `npm install -g @angular/cli`

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/gabriel-pipia/Rick-and-Morty-with-Angular.git
   cd Rick-and-Morty-with-Angular
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   # or
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation header
│   │   ├── aside/           # Mobile navigation drawer
│   │   ├── slider/          # Hero image slider
│   │   ├── card/            # Character card component
│   │   ├── episode-card/    # Episode card component
│   │   ├── main/            # Home page
│   │   ├── characters/      # Characters list & detail pages
│   │   └── episodes/        # Episodes list & detail pages
│   └── services/            # API and data sharing services
├── assets/
│   ├── scss/
│   │   ├── _Variable.scss   # Design tokens and variables
│   │   ├── _Mixin.scss      # Reusable SCSS mixins
│   │   └── _Reset.scss      # CSS reset
│   └── svg/                 # Logo and icons
└── styles.scss              # Global styles
```

## 🔧 Configuration

The app uses the public Rick and Morty API. No API key required.

```typescript
// API Base URL
https://rickandmortyapi.com/api
```

## 📦 Build

Build for production:
```bash
ng build --configuration production
```

The output will be in the `dist/` folder.

## 🧪 Testing

```bash
# Run unit tests
ng test

# Run end-to-end tests
ng e2e
```

## 🚢 Deployment

1. Build the app for production
2. Deploy the `dist/` folder to your hosting provider:
   - Netlify
   - Vercel
   - GitHub Pages
   - Firebase Hosting

## 🗺️ Roadmap

- [ ] Add favorites (localStorage)
- [ ] Location pages with dimension info
- [ ] Character comparison feature
- [ ] Dark/Light theme toggle
- [ ] Infinite scroll option
- [ ] PWA support
- [ ] More accessibility improvements

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feat/amazing-feature`
5. Open a Pull Request

## 📄 License

MIT © Gabriel Pipia

## 🙏 Acknowledgements

- [Rick and Morty API](https://rickandmortyapi.com/documentation) - The amazing free API
- [Angular](https://angular.io/) - The web framework
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Inter font family

## 📞 Contact

**Gabriel Pipia** - [GitHub](https://github.com/gabriel-pipia)

---

*Wubba Lubba Dub Dub!* 🛸
