"use client";

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import ArticleCard from './ArticleCard'

const CategorySorted = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const scrollContainerRef = useRef(null);
    
    // Scroll functions for horizontal navigation
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
    
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('/data/articles.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch articles');
                }
                
                const data = await response.json();
                // Filter articles by category
                const categoryArticles = data
                    .filter(article => article.category === category)
                    .map(article => ({
                        id: article.id,
                        title: article.title,
                        excerpt: article.excerpt,
                        image: article.imageUrl,
                        category: article.category,
                        readingTime: article.readingTime || "5 minutes reading"
                    }));
                
                setArticles(categoryArticles);
                setLoading(false);
            } catch (error) {
                console.error(`Error fetching articles for category ${category}:`, error);
                setLoading(false);
            }
        };
        
        fetchArticles();
    }, [category]);
    
    if (loading) {
        return <div>Loading articles...</div>;
    }
    
    if (articles.length === 0) {
        return <div className="mb-16">No articles found for {category}</div>;
    }
    
    return (
        <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">{category}</h2>
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
                className="flex gap-6 overflow-x-auto no-scrollbar pb-4"
                style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
            >
                {articles.map(article => (
                    <div key={article.id} className="flex-shrink-0">
                        <ArticleCard article={{
                            id: article.id,
                            title: article.title,
                            excerpt: article.excerpt,
                            imageUrl: article.image,
                            category: article.category,
                            readingTime: article.readingTime
                        }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySorted;