"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import InstagramPost from './InstagramPost';
import { Instagram } from 'lucide-react';

// Define image URLs outside the component to avoid recreation on each render
const imageUrls = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1494526585095-c41746248156",
    "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
];

// Use fixed values instead of random generation for consistency
const initialPosts = imageUrls.map((url, index) => ({
    imageUrl: url,
    id: `travel-${index}`,
    likes: ["2.5K", "3.7K", "1.9K", "4.2K", "2.8K", "3.1K"][index % 6],
    comments: ["342", "156", "287", "198", "243", "319"][index % 6]
}));

const Footer = () => {
    const currentYear = new Date().getFullYear();
    // Initialize with pre-transformed posts
    const [posts] = useState(initialPosts);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    
    // Simpler image preloading
    useEffect(() => {
        // Counter for loaded images
        let loadedCount = 0;
        const totalImages = imageUrls.length;
        
        // Create an array to hold all the image promises
        const imagePromises = imageUrls.map((url) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = url;
                img.onload = () => resolve();
                img.onerror = () => resolve(); // Still resolve on error to avoid hanging
            });
        });
        
        // Wait for all images to load or error out
        Promise.all(imagePromises)
            .then(() => {
                setImagesLoaded(true);
            })
            .catch(() => {
                // Still set to loaded even if some images fail
                setImagesLoaded(true);
            });
            
        // Set a timeout as a fallback in case image loading takes too long
        const timeout = setTimeout(() => {
            setImagesLoaded(true);
        }, 3000);
        
        return () => clearTimeout(timeout);
    }, []);

    return (
<div>
    <section className="relative">
        <Link 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block ml-25 w-[400px]"
        >
            <div className="h-15 bg-black text-white flex items-center justify-between px-6 hover:bg-gray-800 transition-colors">
                <span className="text-xl font-bold s-font">Follow me on Instagram</span>
                <Instagram size={24} />
            </div>
        </Link>
        
        {/* Fixed height container for Instagram posts */}
        <div className="flex flex-row overflow-x-auto min-h-[300px]">
            {posts.map((post, index) => (
                <div
                    key={index}
                    className="flex-shrink-0 w-[200px] md:w-[250px] lg:w-[300px] aspect-square"
                    style={{ 
                        opacity: imagesLoaded ? 1 : 0.4, 
                        transition: 'opacity 0.5s ease-in',
                        background: "#f0f0f0"
                    }}
                >
                    <InstagramPost
                        imageUrl={post.imageUrl}
                        postUrl={`https://www.instagram.com/p/${post.id}/`}
                        defaultLikes={post.likes}
                        defaultComments={post.comments}
                    />
                </div>
            ))}
        </div>
    </section>
    
    <footer className="w-full bg-white mt-auto border-t">
        <div className="container mx-auto px-4 py-4">
            <div className="flex ml-25 mr-25 flex-wrap justify-between items-center">
                <div className="md:w-auto mb-4 md:mb-0">
                    <div className="text-center md:text-left text-black text-2xl font-bold">TravelUp</div>
                    <div className="text-neutral-400 text-sm font-normal s-font">Copyrights © {currentYear}. All Rights Reserved.</div>
                </div>
                <nav className="flex flex-wrap space-x-6">
                    <Link href="/" className="text-neutral-400 hover:text-black text-lg font-normal s-font">Home</Link>
                    <Link href="/about" className="text-neutral-400 hover:text-black text-lg font-normal s-font">About me</Link>
                    <Link href="/categories" className="text-neutral-400 hover:text-black text-lg font-normal s-font">Categories</Link>
                    <Link href="/contact" className="text-neutral-400 hover:text-black text-lg font-normal s-font">Contact</Link>
                </nav>
            </div>
        </div>
    </footer>
</div>
    );
}

export default Footer;