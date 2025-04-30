import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "TravelUp - Explore the World",
  description: "Your guide to travel experiences around the world",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Preconnect to your important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" as="fetch" href="/data/articles.json" crossOrigin="anonymous" />
        
        {/* Font imports */}
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
