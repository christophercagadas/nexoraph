# Nexora Group PH - One Page Website

A fully responsive, modern, and animated one-page website built with React, ShadCN/UI, Tailwind CSS, and GSAP for animations.

## Features

- ✨ Modern and clean design
- 🎨 Fully responsive (mobile, tablet, desktop)
- 🌓 Dark mode support with toggle
- 🎭 GSAP animations throughout
- 📱 Mobile-friendly hamburger menu
- 🎯 Smooth scroll navigation
- 💼 6 comprehensive service offerings
- 📧 Contact form
- 🚀 Fast and optimized

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN/UI** - Component library
- **GSAP** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v20.19+ or v22.12+ recommended, though v20.9+ may work)
- npm or yarn

### Installation

1. The project is already initialized with all dependencies installed.

2. If you need to reinstall dependencies:
```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # ShadCN UI components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.jsx
│   │   ├── textarea.jsx
│   │   └── sheet.jsx
│   ├── Navbar.jsx       # Navigation with dark mode toggle
│   ├── Hero.jsx         # Hero section with GSAP animations
│   ├── About.jsx        # About Us section
│   ├── Services.jsx     # Services showcase (6 services)
│   ├── WhyUs.jsx        # Why Choose Us section
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer
├── context/
│   └── ThemeContext.jsx # Dark mode context
├── lib/
│   └── utils.js         # Utility functions
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## Sections

1. **Hero** - Eye-catching landing with animated background and call-to-action
2. **About Us** - Company introduction with slide-in animations
3. **Services** - 6 service cards with hover effects:
   - Executive Assistance
   - Back Office Support
   - Customer Service
   - Lead Generation
   - Data Processing
   - Technical Support
4. **Why Choose Us** - 4 key value propositions
5. **Contact** - Contact form and business information
6. **Footer** - Social links and site navigation

## Customization

### Colors

Edit `tailwind.config.js` to customize the teal accent color or add new colors.

### Content

Update the content in each component file:
- `Hero.jsx` - Main headline and tagline
- `About.jsx` - Company description
- `Services.jsx` - Service offerings
- `Contact.jsx` - Contact information

### Dark Mode

Dark mode is controlled via `ThemeContext.jsx` and persists in localStorage.

## Animations

All animations are powered by GSAP:
- **Hero**: Fade-up text animations and animated background
- **About**: Slide-in animations on scroll
- **Services**: Staggered card animations
- **WhyUs**: Scale-in animations for value propositions
- **Contact**: Fade-in form and info sections

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Nexora Group PH. All rights reserved.

## Contact

- Email: contact@nexoragroupph.com
- Website: [Coming Soon]
