'use client';
import { Menu, Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FullscreenMenu from "./FullScreenMenu";

const Navbar = ({ forceMenuOpen, onClose }) => {
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
    
    // Determine text color based on menu state or forceMenuOpen prop
    const textColor = forceMenuOpen || menuOpen ? 'text-white' : 'text-black';
    
    // Determine which icon to show based on menu state or forceMenuOpen
    const showCloseIcon = forceMenuOpen || menuOpen;
    
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
                        <X className="w-6 h-6" />
                    </button>
                </div>
                
                <div className="p-8">
                </div>
            </div>
        </div>
    ) : null;

    return (
        <>
            <nav className="relative ml-25 mr-25 py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div 
                        className={`${textColor} cursor-pointer`}
                        onClick={() => {
                            // Don't toggle if forceMenuOpen is true
                            if (!forceMenuOpen) {
                                setMenuOpen(!menuOpen);
                            } else {
                                // When in FullscreenMenu, clicking X should close the menu
                                onClose && onClose();
                            }
                        }}
                    >
                        {showCloseIcon ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </div>
                    <a href="/">
                    <h1 className={`text-2xl font-bold ${textColor}`}>
                        TravelUp
                    </h1>
                    </a>
                    
                    <div className={`${textColor} cursor-pointer`}>
                        <Search className="w-6 h-6" />
                    </div>
                </div>
            </nav>

            {/* Only render FullscreenMenu if not already inside one (prevent circular rendering) */}
            {!forceMenuOpen && (
                <>
                    {mobileMenuOverlay}
                    <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
                </>
            )}
        </>
    );
};

export default Navbar;
