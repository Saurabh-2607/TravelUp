'use client';
import { Menu, Search } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FullscreenMenu from "./FullscreenMenu";
import Newsletter from "./Newsletter";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    
    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);
    
    // Prevent scrolling when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);
    
    // Determine text color based on menu state
    const textColor = menuOpen ? 'text-white' : 'text-black';
    
    const mobileMenuOverlay = menuOpen ? (
        <div 
            className="fixed inset-0 w-full h-full bg-black/90 backdrop-blur-sm z-50" // Ensure high z-index
        >
            <div className="h-full flex flex-col">
                <div className="flex justify-end p-6">
                    <button 
                        onClick={() => setMenuOpen(false)}
                        className="text-white p-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <nav className="flex-1 flex flex-col justify-center items-center">
                    <ul className="space-y-6 text-center">
                        <li>
                            <Link href="/" className="text-white text-2xl hover:text-gray-300">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-white text-2xl hover:text-gray-300">About me</Link>
                        </li>
                        <li>
                            <Link href="/categories" className="text-white text-2xl hover:text-gray-300">Categories</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-white text-2xl hover:text-gray-300">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="p-8">
                    <Newsletter />
                </div>
            </div>
        </div>
    ) : null;

    return (
        <>
            <nav className="relative py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="text-black cursor-pointer">
                        <Menu className="w-6 h-6" />
                    </div>
                    
                    <h1 className="text-2xl font-bold text-black">
                        TravelUp
                    </h1>
                    
                    <div className="text-black cursor-pointer">
                        <Search className="w-6 h-6" />
                    </div>
                </div>
            </nav>

            {mobileMenuOverlay}

            <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
};

export default Navbar;
