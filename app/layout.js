import "./globals.css";
import { Suspense } from 'react';
import Footer from "./components/Footer";

export const metadata = {
  title: "TravelUp - Explore the World",
  description: "Your guide to travel experiences around the world",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff"
};

// Create a loading fallback
const FooterFallback = () => <div className="h-40 bg-gray-100"></div>;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Preconnect to your important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" as="fetch" href="/data/articles.json" crossOrigin="anonymous" />
        
        {/* Add FontDisplay settings */}
        <style type="text/css" dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'Cormorant Garamond';
            font-display: swap;
          }
          @font-face {
            font-family: 'Open Sans';
            font-display: swap;
          }
        `}} />
      </head>
      <body className="flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col">
          {children}
        </div>
        <Suspense fallback={<FooterFallback />}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
