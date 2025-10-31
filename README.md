# JezzyVision Portfolio

## 🎬 Professional Visual Content & Digital Solutions

A modern, stylish portfolio website built with **Next.js 14**, **Framer Motion**, and **Tailwind CSS**. Designed for video producers, content creators, and digital strategists to showcase their work with elegant animations and smooth interactions.

## ✨ Features

- 🎨 **Modern Design** - Sleek and professional interface with contemporary aesthetics
- ⚡ **Fast Performance** - Built with Next.js 14 for optimal speed and SEO
- 🎬 **Video-Ready** - Dedicated section for showcasing video projects and portfolio work
- 🎯 **Services Showcase** - Display your services (Video Production, Content Creation, Digital Strategy)
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- ✨ **Smooth Animations** - Powered by Framer Motion for elegant, physics-based animations
- 🌙 **Dark/Light Mode** - Built-in theme switching support
- 📧 **Contact Section** - Easy-to-customize contact form
- 🎨 **Customizable Colors** - JezzyVision theme with modern color palette (Indigo, Pink, Blue)
- 🚀 **Production Ready** - Deployed to GitHub Pages with continuous deployment

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or later)
- npm or yarn package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/JezzyJesse/jezzyvision-portfolio.git
   cd jezzyvision-portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in your browser:**

   Visit [http://localhost:3000](http://localhost:3000) to see the development version.

## 📦 Build & Deployment

### Building for Production

```bash
npm run build
npm run start
```

### Deployed Site

🌐 **Live Preview**: [https://jezzyjesse.github.io/jezzyvision-portfolio](https://jezzyjesse.github.io/jezzyvision-portfolio)

The site is automatically deployed to GitHub Pages on every push to the main branch.

## 📁 Project Structure

```
jezzyvision-portfolio/
├── public/
│   ├── images/         # Image assets
│   └── videos/         # Video assets (placeholder)
├── src/
│   ├── app/           # Next.js app router pages
│   ├── common/
│   │   ├── components/ # Reusable React components
│   │   ├── lib/       # Data, types, and utilities
│   │   ├── styles/    # Global CSS styles
│   │   ├── theme/     # Theme configuration
│   │   ├── stores/    # State management
│   │   └── utils/     # Utility functions
├── package.json       # Project dependencies
├── next.config.js     # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## 🎨 Customization

### Update Portfolio Data

Edit `src/common/lib/data.ts` to customize:
- Navigation links
- Services information
- Videos gallery
- Contact information
- Theme colors
- Animation settings

### Example - Adding a New Service

```typescript
export const servicesData = [
  {
    title: 'Your Service',
    description: 'Service description',
    icon: React.createElement(YourIcon),
  },
  // ...
] as const;
```

### Example - Adding Videos

```typescript
export const videosData = [
  {
    id: 'video-1',
    title: 'Your Video Title',
    description: 'Video description',
    url: 'https://youtube.com/...',
    thumbnail: 'image-url',
  },
  // ...
] as const;
```

### Customize Colors

Edit the theme colors in `src/common/lib/data.ts`:

```typescript
export const themeColors = {
  primary: '#6366f1',   // Indigo
  secondary: '#ec4899', // Pink
  accent: '#3b82f6',    // Blue
  dark: '#1f2937',      // Dark Gray
  light: '#f9fafb',     // Light Gray
} as const;
```

## 🛠️ Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Email**: [@react-email](https://react.email/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Hosting**: [GitHub Pages](https://pages.github.com/)

## 📝 Sections Ready to Customize

- ✅ **Hero/Home Section** - First impression with elegant animations
- ✅ **Services Section** - Showcase your services with detailed descriptions
- ✅ **Videos Section** - Dedicated gallery for video content
- ✅ **Contact Section** - Contact form and information
- ✅ **Navigation** - Easy-to-navigate menu structure
- ✅ **Theme** - Modern color scheme ready to customize
- ✅ **Animations** - Smooth, elegant transitions throughout

## 🔄 Continuous Deployment

This repository uses GitHub Actions to automatically build and deploy to GitHub Pages on every push to the main branch.

**Workflow**: `.github/workflows/pages/`

The site will be automatically rebuilt and deployed whenever you push changes.

## 📧 Contact & Support

For questions or support, please contact: **contact@jezzyvision.com**

Or reach out through:
- 🐦 Twitter: [@jezzyvision](https://twitter.com/jezzyvision)
- 💼 LinkedIn: [JezzyVision](https://linkedin.com/company/jezzyvision)
- 📸 Instagram: [@jezzyvision](https://instagram.com/jezzyvision)
- 📺 YouTube: [@jezzyvision](https://youtube.com/@jezzyvision)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

Based on the portfolio template by [bbyc4kes](https://github.com/bbyc4kes/portfolio).

Customized and rebranded for **JezzyVision**.

---

**Made with ❤️ by JezzyVision Team** | [Visit Live Site](https://jezzyjesse.github.io/jezzyvision-portfolio)
