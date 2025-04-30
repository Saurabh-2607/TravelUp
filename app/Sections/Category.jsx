"use client";
import { useState, useRef, useCallback, useMemo } from "react";
import CategoryTemplet from "../components/CategoryTemplet.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Category = () => {
    const scrollContainerRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Memoize scroll functions to prevent unnecessary re-renders
    const scrollLeft = useCallback(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    }, []);

    const scrollRight = useCallback(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    }, []);

    const handleCategoryClick = useCallback((title) => {
        setSelectedCategory(prevSelected => prevSelected === title ? null : title);
    }, []);

    // Pre-define categories to avoid re-creating this array on each render
    const categories = useMemo(() => [
        { title: "All", imageUrl: "/placeholder-category.jpg" },
        { title: "Mountains", imageUrl: "/placeholder-category.jpg" },
        { title: "Foods", imageUrl: "/placeholder-category.jpg" },
        { title: "Guides", imageUrl: "/placeholder-category.jpg" },
        { title: "Stories", imageUrl: "/placeholder-category.jpg" },
        { title: "Cities", imageUrl: "/placeholder-category.jpg" },
        { title: "Vlogs", imageUrl: "/placeholder-category.jpg" },
        { title: "Monuments", imageUrl: "/placeholder-category.jpg" },
        { title: "Wildlife", imageUrl: "/placeholder-category.jpg" }
    ], []);

    return (
        <div className="px-25 relative">
            <div className="flex justify-between items-center pb-2">
                <div className="text-black flex text-3xl pb-8 pt-12 font-bold">
                    Explore by category
                </div>  
                <div className="flex gap-2 items-center">
                    <button
                        onClick={scrollLeft}
                        className="bg-black text-white p-2 hover:bg-gray-800"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="bg-black text-white p-2 hover:bg-gray-800"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div 
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto no-scrollbar h-full"
                style={{ 
                    scrollbarWidth: 'none',
                    WebkitOverflowScrolling: 'touch',
                    scrollSnapType: 'x mandatory' 
                }}
            >
                <div className="flex gap-4 flex-nowrap items-center h-full">
                    {categories.map((category) => (
                        <CategoryTemplet 
                            key={category.title}
                            title={category.title}
                            imageUrl={category.imageUrl}
                            className="flex-shrink-0 scroll-snap-align-start"
                            isSelected={selectedCategory === category.title}
                            onClick={() => handleCategoryClick(category.title)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
