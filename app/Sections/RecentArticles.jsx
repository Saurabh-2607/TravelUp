"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import PromoProducts from './PromoProducts';
import ArticlePreview from '../components/ArticalPreview';

const RecentArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/articles.json')
            .then(response => response.json())
            .then(data => {
                const articleSlides = data.slice(0, 5).map(article => ({
                    id: article.id,
                    title: article.title,
                    excerpt: article.excerpt,
                    image: article.imageUrl,
                    category: article.category,
                    readingTime: article.readingTime || "5 min read" // Default reading time if not provided
                }));
                setArticles(articleSlides);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching articles:", error);
                setLoading(false);
                setError("Failed to load articles");
            });
    }, []);


    if (loading) return <div>Loading articles...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!articles.length) return <div>No articles found</div>;

    return (
        <div className="flex flex-col absolute left-25 gap-12 py-8">
            <h2 className="text-3xl font-bold">Recent Articles</h2>
            <div className="space-y-6">
                {articles.map((article) => (
                    <ArticlePreview
                        key={article.id}
                        title={article.title}
                        excerpt={article.excerpt}
                        category={article.category}
                        readingTime={article.readingTime}
                        image={article.image} 
                    />
                ))}
            </div>
            <PromoProducts/>
        </div>
    );
};

export default RecentArticles;