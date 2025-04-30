"use client";

import { useState, useEffect } from 'react';
import PromoProducts from './PromoProducts';
import ArticlePreview from '../components/ArticalPreview';
import AboutCard from '../components/AboutCard';
import Destination from './Destination';
import Newsletter from '../components/Newsletter';
import Advertisement from '../components/Advertisemnet';
import Pagination from '../components/Pagination';
import Instagram from './Instagram';

const RecentArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch('/data/articles.json')
            .then(res => res.json())
            .then(data => {
                const articleSlides = data.slice(0, 6).map(article => ({
                    id: article.id,
                    title: article.title,
                    excerpt: article.excerpt,
                    image: article.imageUrl,
                    category: article.category || "Guides",
                    readingTime: article.readingTime || "8 minutes reading"
                }));
                setArticles(articleSlides);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center py-10">Loading articles...</div>;

    return (
        <section className="relative py-12 mx-auto px-25">
            <h2 className="text-3xl font-semibold mb-8">Recent articles</h2>
            <div className="flex flex-col lg:flex-row gap-8">

                {/* LEFT COLUMN */}
                <div className="flex-1 flex flex-col gap-12">
                    {/* Top 3 Articles */}
                    {articles.slice(0, 3).map((article) => (
                        <ArticlePreview key={article.id} {...article} />
                    ))}

                    {/* Promo Section */}
                    <div className="w-full">
                        <PromoProducts />
                    </div>

                    {/* Remaining Articles */}
                    {articles.slice(3).map((article) => (
                        <ArticlePreview key={article.id} {...article} />
                    ))}

                    {/* Pagination */}
                    <Pagination/>
                </div>

                <aside className="w-full lg:w-64 flex flex-col gap-8">
                    <AboutCard />

                    <Destination/>
                    <Newsletter/>
                    <Advertisement/>
                
                </aside>
            </div>
            <Instagram/>
        </section>
    );
};

export default RecentArticles;
