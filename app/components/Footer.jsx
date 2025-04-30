"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import InstagramPost from './InstagramPost';
import { Instagram } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        // Instagram image URLs
        const imageUrls = [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            "https://images.unsplash.com/photo-1494526585095-c41746248156",
            "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
            "https://images.unsplash.com/photo-1500534623283-312aade485b7",
            "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        ];
        
        const transformedPosts = imageUrls.map((url, index) => ({
            imageUrl: url,
            id: `travel-${index}`,
            likes: `${Math.floor(Math.random() * 10) + 1}.${Math.floor(Math.random() * 9)}K`,
            comments: `${Math.floor(Math.random() * 500) + 100}`
        }));
        
        setPosts(transformedPosts);
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
                
                {posts.length === 0 ? (
                    <p className="px-4">No Instagram posts to display</p>
                ) : (
                    <div className="flex flex-row overflow-x-auto">
                        {posts.map((post, index) => (
                            <div key={index} className="flex-shrink-0 w-[200px] md:w-[250px] lg:w-[300px]">
                                <InstagramPost 
                                    imageUrl={post.imageUrl || post.url || post.image}
                                    postUrl={post.postUrl || post.instagramUrl || `https://www.instagram.com/p/${post.id || 'default'}/`}
                                    defaultLikes={post.likes || "2.5K"}
                                    defaultComments={post.comments || "342"}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <footer className="w-full bg-white mt-auto border-t">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex ml-25 mr-25 flex-wrap justify-between items-center">
                        <div className="md:w-auto mb-4 md:mb-0">
                            <div className="text-center md:text-left text-black text-2xl font-bold ">TravelUp</div>
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