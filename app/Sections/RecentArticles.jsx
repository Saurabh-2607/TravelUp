"use client";

import { useState, useEffect } from 'react';
import PromoProducts from './PromoProducts';
import ArticlePreview from '../components/ArticalPreview';
import AboutCard from '../components/AboutCard';
import Destination from './Destination';

const RecentArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch('/articles.json')
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
        <section className="absolute left-25 right-25 py-12">
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
                    <div className="flex justify-center mt-8">
                        <nav className="flex items-center gap-1">
                            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-sm">
                                &lt;
                            </button>
                            
                            {[1, 2, 3, 4, 5, "...", 10, 11, 12, 13, 14].map((page, index) => (
                                <button 
                                    key={index} 
                                    className={`w-8 h-8 flex items-center justify-center ${
                                        page === 1 ? "border-2 border-black font-bold" : "border border-gray-300"
                                    } rounded-sm`}
                                >
                                    {page}
                                </button>
                            ))}
                            
                            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-sm">
                                &gt;
                            </button>
                        </nav>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <aside className="w-full lg:w-64 flex flex-col gap-8">
                    <AboutCard />

{/* Destinations */}
<Destination/>

{/* Newsletter 
<div className="border border-gray-200 p-4">
    <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
    <p className="text-sm mb-4">Subscribe to receive exclusive content updates, travel & photo tips!</p>
    <input 
        type="email" 
        placeholder="Email address" 
        className="w-full border border-gray-300 px-3 py-2 mb-3" 
    />
    <button className="bg-black text-white px-4 py-2 w-full">Subscribe</button>
</div>

<div className="border border-gray-200 p-4">
    <h3 className="text-xl font-semibold mb-4">Where to next?</h3>
    <input 
        type="text" 
        placeholder="Destination name" 
        className="w-full border border-gray-300 px-3 py-2 mb-3"
    />
    <input 
        type="date" 
        className="w-full border border-gray-300 px-3 py-2 mb-3"
        placeholder="Check-in date" 
    />
    <input 
        type="date" 
        className="w-full border border-gray-300 px-3 py-2 mb-3"
        placeholder="Check-out date"
    />
    <button className="bg-black text-white px-4 py-2 w-full">Read more</button>
</div> */}
                </aside>
            </div>
        </section>
    );
};

export default RecentArticles;
