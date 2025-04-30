'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const FullscreenMenu = ({ onClose, isOpen }) => {
    const [email, setEmail] = useState('');
    const [activeItem, setActiveItem] = useState('Home');
    
    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About me', path: '/about' },
        { name: 'Categories', path: '/categories' },
        { name: 'Contact', path: '/contact' }
    ];
    
    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log('Subscribing email:', email);
        setEmail('');
    };
    
    // Handle escape key to close menu
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') onClose();
        };
        
        window.addEventListener('keydown', handleEsc);
        
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);
    
    const menuVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.2, ease: "easeInOut" }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };
    
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 w-full h-full z-150 overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                >
                    <div className="w-full h-full flex justify-center items-center pt-24">
                        <div className="absolute inset-0 bg-black opacity-95" />
                        
                        {/* Add a div that blocks interactions with elements behind */}
                        <div className="absolute inset-0" onClick={onClose}></div>
                        
                        <div className="z-10 flex flex-col md:flex-row w-full max-w-7xl px-6 md:px-16 relative">
                            {/* Close button for better UX */}
                            <button 
                                className="absolute top-0 right-6 text-white text-2xl p-2" 
                                onClick={onClose}
                                aria-label="Close menu"
                            >
                                ✕
                            </button>
                            
                            <motion.div 
                                className="w-full md:w-1/2 flex flex-col justify-start items-start gap-8 md:gap-12 my-10 md:my-0"
                                variants={menuVariants}
                            >
                                {menuItems.map((item, index) => (
                                    <motion.div 
                                        key={item.name} 
                                        className={`w-full relative ${activeItem === item.name ? 'pl-10 md:pl-16' : ''}`}
                                        variants={itemVariants}
                                    >
                                        {activeItem === item.name && (
                                            <motion.div 
                                                className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-0.5 bg-white"
                                                initial={{ width: 0 }}
                                                animate={{ width: 32 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                        <Link href={item.path} onClick={() => {
                                            setActiveItem(item.name);
                                            setTimeout(onClose, 300);
                                        }}>
                                            <div 
                                                className={`text-${activeItem === item.name ? 'white' : 'neutral-400'} text-4xl md:text-6xl font-bold font-['Cormorant_Garamond'] hover:text-white transition-colors duration-300`}
                                            >
                                                {item.name}
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                            
                            <motion.div 
                                className="w-full md:w-1/2 border border-neutral-700 p-8 md:p-12 flex flex-col justify-end"
                                variants={itemVariants}
                            >
                                <motion.div className="mb-4 md:mb-6" variants={itemVariants}>
                                    <h3 className="text-white text-2xl md:text-4xl font-bold font-['Cormorant_Garamond']">Newsletter</h3>
                                </motion.div>
                                
                                <motion.div className="mb-6 md:mb-8" variants={itemVariants}>
                                    <p className="text-neutral-400 text-base md:text-lg font-normal font-['Open_Sans']">
                                        Subscribe to receive exclusive content updates, travel & photo tips!
                                    </p>
                                </motion.div>
                                
                                <motion.form 
                                    onSubmit={handleSubscribe}
                                    className="w-full flex flex-col gap-4"
                                    variants={itemVariants}
                                >
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email address"
                                        className="bg-transparent border-b border-neutral-700 py-2 px-1 text-white focus:outline-none focus:border-white text-base md:text-lg font-normal font-['Open_Sans']"
                                        required
                                    />
                                    <button 
                                        type="submit" 
                                        className="self-start mt-4 text-white bg-transparent border border-white hover:bg-white hover:text-black transition-colors duration-300 py-2 px-4 md:px-6 text-sm md:text-base font-bold"
                                    >
                                        SUBSCRIBE
                                    </button>
                                </motion.form>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FullscreenMenu;
