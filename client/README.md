# SoulCraft - Handmade Crafts Marketplace

A React-based web application that connects artisans with craft enthusiasts, allowing them to showcase and sell their handmade products.

## Features

- **Product Upload**: Sellers can upload their handcrafted items with details and stories
- **AI Enhancement**: Story enhancement feature for product descriptions
- **Product Categories**: Organized sections for Pottery, Jewelry, and Sculptures
- **Responsive Design**: Full mobile and desktop compatibility
- **Modern UI**: Clean and intuitive interface with smooth animations

## Tech Stack

- React 19
- Vite
- CSS3
- ESLint

## Project Structure

```
soulcraft/
├── public/
│   ├── hack.bg.png
│   ├── logo.jpg
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── bg.homemade.jpeg
│   │   ├── jewelry.webp
│   │   ├── pottery.webp
│   │   ├── react.svg
│   │   └── sculp.webp
│   ├── components/
│   │   ├── AIEnhancer/
│   │   │   ├── AIEnhancer.css
│   │   │   └── AIEnhancer.jsx
│   │   ├── Features/
│   │   │   ├── features.css
│   │   │   └── features.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Home/
│   │   │   ├── Home.css
│   │   │   └── Home.jsx
│   │   ├── Navbar/
│   │   │   ├── Navbar.css
│   │   │   └── Navbar.jsx
│   │   └── ProductUpload/
│   │       ├── ProductUpload.css
│   │       └── ProductUpload.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Component Overview

- **AIEnhancer**: Enhances product stories using AI
- **Features**: Displays product categories and collection
- **Footer**: Website footer with contact information
- **Home**: Landing page with hero section and stats
- **Navbar**: Navigation with search and AI enhancement
- **ProductUpload**: Form for sellers to upload new products

## Getting Started

1. Clone the repository
```sh
git clone <repository-url>
```

2. Install dependencies
```sh
npm install
```

3. Run development server
```sh
npm run dev
```

4. Build for production
```sh
npm run build
```

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

## Dependencies

- React: ^19.1.1
- React DOM: ^19.1.1
- Vite: ^7.1.2

## Development Dependencies

- ESLint and related plugins
- @vitejs/plugin-react
- TypeScript types for React

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
