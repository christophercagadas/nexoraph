# Setup Instructions

## Quick Start

1. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   Note: If you encounter Node.js version errors, the project will still work but you may see warnings. The site should run fine on Node.js v20.9.0.

2. **Open your browser:**
   Navigate to `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

## Features Included

### 1. Responsive Navigation
- Sticky navbar that changes on scroll
- Mobile hamburger menu using ShadCN Sheet component
- Dark mode toggle in navbar
- Smooth scroll to sections

### 2. Hero Section
- GSAP animated text (fade-up effects)
- Animated gradient background
- Call-to-action button

### 3. About Us
- Two-column layout (image placeholder + text)
- GSAP slide-in animations on scroll
- Responsive grid

### 4. Services
- 6 service cards with icons from Lucide React:
  - Executive Assistance
  - Back Office Support
  - Customer Service
  - Lead Generation
  - Data Processing
  - Technical Support
- GSAP stagger animations
- Hover effects (lift + shadow)
- Fully responsive grid

### 5. Why Choose Us
- 4 value propositions with icons
- GSAP scale-in animations
- Gradient icon backgrounds

### 6. Contact Section
- Working contact form
- ShadCN Input and Textarea components
- Contact information display
- GSAP fade-in animations

### 7. Footer
- Social media links
- Quick navigation
- Copyright information

## Customization Guide

### Change Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      teal: {
        // Customize these values
        500: '#14b8a6',
        600: '#0d9488',
        // etc.
      },
    },
  },
}
```

### Modify Content

Each component is self-contained. Edit these files:

- **Company Name/Tagline**: `src/components/Hero.jsx`
- **About Text**: `src/components/About.jsx`
- **Services**: `src/components/Services.jsx`
- **Contact Info**: `src/components/Contact.jsx`

### Add More Services

In `src/components/Services.jsx`, add to the `services` array:

```javascript
{
  icon: YourIconHere,
  title: 'Service Name',
  description: 'Service description...',
}
```

### Adjust Animations

All GSAP animations are in the `useEffect` hooks of each component. Modify:
- `duration` - Speed of animation
- `stagger` - Delay between multiple elements
- `scrollTrigger.start` - When animation triggers

## Dependencies Installed

- **react** & **react-dom**: Core React libraries
- **gsap**: Animation library
- **lucide-react**: Icon library
- **tailwindcss**: Utility CSS framework
- **@radix-ui/react-dialog**: For Sheet/Modal component
- **clsx** & **tailwind-merge**: Utility functions
- **class-variance-authority**: For component variants

## Troubleshooting

### Node.js Version Warning

If you see engine warnings, you can:
1. Continue using the project (it should work fine)
2. Upgrade Node.js to v20.19+ or v22.12+
3. Or downgrade Vite if needed

### Port Already in Use

If port 5173 is taken:
```bash
npm run dev -- --port 3000
```

### Dark Mode Not Persisting

Check browser localStorage is enabled. Dark mode preference saves to localStorage.

### Animations Not Working

Ensure you're viewing in a modern browser with JavaScript enabled.

## Project Structure Details

```
├── public/              # Static assets
├── src/
│   ├── components/      # All React components
│   │   ├── ui/         # Reusable UI components (ShadCN)
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── context/        # React Context (Theme)
│   ├── lib/            # Utility functions
│   ├── App.jsx         # Main component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles + Tailwind
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── vite.config.js      # Vite configuration
```

## Next Steps

1. **Customize Content**: Update text in components
2. **Add Images**: Replace placeholder in About section
3. **Connect Form**: Add backend for contact form
4. **Add Analytics**: Google Analytics, etc.
5. **Deploy**: Vercel, Netlify, or your preferred host

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload contents of dist/ to your server
```

## Support

For issues or questions, refer to:
- React: https://react.dev
- Tailwind: https://tailwindcss.com
- GSAP: https://greensock.com/gsap
- ShadCN: https://ui.shadcn.com
