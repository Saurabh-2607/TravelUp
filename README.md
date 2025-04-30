# TravelUp - Travel Blog & Guide Platform

TravelUp is a comprehensive travel platform built with Next.js that showcases travel articles, guides, and products for travel enthusiasts. The application features a modern, responsive UI with various interactive components.


📝 **Live Demo**: [https://travelup.headbanger.tech/](https://travelup.headbanger.tech/)  
🔗 **GitHub Repository**: [https://github.com/Saurabh-2607/TravelUp](https://github.com/Saurabh-2607/TravelUp)

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Dynamic Content**: Articles, travel guides, and product recommendations
- **Category Navigation**: Browse content by various travel categories
- **Interactive Components**: Sliders, carousels, and interactive UI elements
- **Newsletter Subscription**: Stay updated with the latest travel content
- **Social Media Integration**: Connect with Instagram and other platforms
- **Product Showcases**: Travel guides and books available for purchase

## 📚 Project Structure

```
travelup/
├── app/                  # Main application code
│   ├── articles/         # Article pages
│   ├── categories/       # Category pages
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── components/       # Reusable components
│   ├── Sections/         # Page section components
│   └── globals.css       # Global styles
├── public/               # Static assets
│   └── data/             # JSON data files
└── ...config files       # Next.js and other configuration
```

## 🛠️ Technologies Used

- **Next.js 15**: React framework with server-side rendering
- **React 19**: UI component library
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide Icons**: SVG icon library

## 🚀 Getting Started

First, clone the repository:

```bash
git clone https://github.com/Saurabh-2607/TravelUp.git
cd travelup
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 Pages

- **Home**: Featured articles, category navigation, and recent posts
- **Article Detail**: Full article display with related content
- **Categories**: Browse articles by category
- **About**: Information about the author
- **Contact**: Get in touch form with map integration

## 🧩 Components

- **Navbar**: Navigation with fullscreen menu
- **HeroSection**: Featured article showcase
- **ArticlePreview**: Card-style article previews
- **CategoryTemplet**: Category selection cards
- **ProductsCards**: Product showcase cards
- **Footer**: Site footer with Instagram integration
- **Newsletter**: Email subscription component

## ⚙️ Configuration

### Images

The project is configured to work with multiple image domains:

```js
// next.config.mjs
const nextConfig = {
  images: {
    domains: ['images.unsplash.com','images.pexels.com','cdn.pixabay.com','img.freepik.com'],
  }
};
```

## 🧪 Development

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## 📦 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📝 License

[MIT](LICENSE)
