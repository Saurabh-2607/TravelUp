"use client";

import { useState, useEffect } from 'react';
import ArticalPreview from './ArticalPreview';

const CategorySorted = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    
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
        <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map(article => (
                    <ArticalPreview key={article.id} {...article} />
                ))}
            </div>
        </div>
    );
};

export default CategorySorted;