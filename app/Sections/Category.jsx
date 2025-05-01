"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import CategoryTemplet from "../components/CategoryTemplet.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getCategoriesByPopularity } from "../components/CategoryFinder";

const Category = () => {
const [scrollPosition, setScrollPosition] = React.useState(0);
const scrollContainerRef = React.useRef(null);
const [selectedCategory, setSelectedCategory] = React.useState(null);
const [categories, setCategories] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const loadCategories = async () => {
        try {
            const fetchedCategories = await getCategoriesByPopularity();
            setCategories(fetchedCategories);
            setLoading(false);
        } catch (error) {
            console.error("Error loading categories:", error);
            setLoading(false);
        }
    };
    
    loadCategories();
}, []);

const scrollLeft = () => {
    if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
};

const scrollRight = () => {
    if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
};

const handleCategoryClick = (title) => {
    setSelectedCategory(selectedCategory === title ? null : title);
};

return (
    <div className="px-25 relative">
            <div className="flex justify-between items-center pb-2">
            <div className="text-black flex text-3xl pb-8 pt-12 font-bold">
            Explore by category
            </div>  
            <div className="flex gap-2 items-center">
                    <button
                            onClick={scrollLeft}
                            className="bg-black text-white p-2 hover:bg-gray-800">
                            <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                            onClick={scrollRight}
                            className="bg-black text-white p-2 hover:bg-gray-800">
                            <ChevronRight className="w-5 h-5" />
                    </button>
            </div>
            </div>

            <div 
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto no-scrollbar h-full"
                style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
            >
                <div className="flex gap-4 flex-nowrap items-center h-full">
                    <CategoryTemplet 
                        title="All"
                        imageUrl="https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        className="flex-shrink-0"
                        isSelected={selectedCategory === "All"}
                        onClick={() => handleCategoryClick("All")}
                    />
                    
                    {categories.map((category) => (
                        <CategoryTemplet 
                            key={category}
                            title={category}
                            imageUrl="https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            className="flex-shrink-0"
                            isSelected={selectedCategory === category}
                            onClick={() => handleCategoryClick(category)}
                        />
                    ))}
                </div>
            </div>
    </div>
);
};

export default Category;
