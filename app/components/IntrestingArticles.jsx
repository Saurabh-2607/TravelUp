"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ArticleCard from './ArticleCard';

const IntrestingArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('/data/articles.json');
                const data = await response.json();
                
                // Get 3 random articles
                const shuffled = [...data].sort(() => 0.5 - Math.random());
                const selectedArticles = shuffled.slice(0, 3);
                
                setArticles(selectedArticles);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching articles:", error);
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    const handleArticleClick = (id) => {
        router.push(`/articles/${id}`);
    };

    if (loading) return <div className="text-center py-6">Loading articles...</div>;

    return (
        <div className="w-full py-8">
            <h2 className="text-3xl font-bold mb-6">Interesting Articles to Read</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <ArticleCard 
                        key={article.id} 
                        article={{
                            id: article.id,
                            title: article.title,
                            excerpt: article.excerpt,
                            imageUrl: article.imageUrl,
                            category: article.category || "Travel",
                            readingTime: article.readingTime || "5 min reading"
                        }} 
                    />
                ))}
            </div>
        </div>
    );
};

export default IntrestingArticles;