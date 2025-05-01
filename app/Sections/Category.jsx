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
                        imageUrl="https://picsum.photos/seed/All/800/600" 
                        className="flex-shrink-0"
                        isSelected={selectedCategory === "All"}
                        onClick={() => handleCategoryClick("All")}
                    />
                    
                    {categories.map((category) => (
                        <CategoryTemplet 
                            key={category}
                            title={category}
                            imageUrl={`https://picsum.photos/seed/${category}/800/600`}
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
