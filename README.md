# Astro commerce 

A beautiful website built with Astro framework, converting HTML/CSS designs into a modern, performant web application.

## 🚀 Project Structure

```
src/
├── components/        # Reusable Astro components
│   ├── Header.astro
│   ├── Footer.astro
│   └── Navigation.astro
├── layouts/          # Layout templates for pages
│   └── Layout.astro
├── pages/            # Page routes (file-based routing)
│   └── index.astro
└── styles/           # Global styles
    └── global.css
```

## 📋 Features

- ⚡ **Lightning-Fast** - Built with Astro for optimal performance
- 🎨 **Responsive Design** - Mobile-first design approach
- 📦 **Component-Based** - Reusable, maintainable components
- 🔧 **Easy Customization** - Simple to integrate your HTML/CSS designs

## 🛠️ Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ImpactNeel/Marizu-Dominic.git
cd Marizu-Dominic
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 📝 Development

### Adding New Pages

Create new `.astro` files in `src/pages/` directory. Astro uses file-based routing:

```
src/pages/
├── index.astro       → /
├── about.astro       → /about
└── contact.astro     → /contact
```

### Creating Components

Create reusable components in `src/components/`:

```astro
---
// src/components/MyComponent.astro
const { title } = Astro.props;
---

<div class="my-component">
  <h2>{title}</h2>
  <slot />
</div>

<style>
  .my-component {
    padding: 1rem;
  }
</style>
```

### Importing HTML/CSS

To convert your HTML/CSS designs:

1. Create your component in `src/components/`
2. Paste your HTML structure
3. Add `<style>` block with your CSS
4. Use the component in your pages

Example:
```astro
---
// src/components/Hero.astro
---

<section class="hero">
  <h1>Welcome</h1>
  <p>Your amazing content here</p>
</section>

<style>
  .hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 4rem 2rem;
    text-align: center;
  }
</style>
```

## 🎨 Styling Guide

### Global Styles
Edit `src/styles/global.css` for site-wide styles.

### Scoped Styles
Use `<style>` tags within `.astro` components for scoped CSS.

### CSS Variables
Use CSS custom properties for consistent theming:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --spacing-unit: 1rem;
}
```

## 🔨 Build

To build for production:

```bash
npm run build
```

The optimized site will be in the `dist/` folder.

## 📦 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
```bash
npm run build
# Deploy the dist/ folder
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

- **ImpactNeel** - Initial work

## 📞 Support

For questions or issues, please open an issue on GitHub.

---

**Happy coding!** 🎉
