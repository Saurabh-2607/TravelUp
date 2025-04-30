"use client";

import { useState, useEffect, Suspense, lazy } from 'react';
import dynamic from 'next/dynamic';
import ArticlePreview from '../components/ArticalPreview';

// Lazy load heavy components
const LazyPromoProducts = lazy(() => import('./PromoProducts'));
const AboutCard = lazy(() => import('../components/AboutCard'));
const Destination = lazy(() => import('./Destination'));
const Newsletter = lazy(() => import('../components/Newsletter'));
const Advertisement = lazy(() => import('../components/Advertisemnet'));
const Pagination = lazy(() => import('../components/Pagination'));

// Dynamic import with SSR disabled for Instagram component (typically heavy with images)
const Instagram = dynamic(() => import('./Instagram'), { ssr: false });

// Loading fallbacks
const LoadingBox = () => <div className="w-full h-40 bg-gray-100 animate-pulse"></div>;

const RecentArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const articlesPerPage = 6;

    useEffect(() => {
        // Use AbortController for cleanup
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchArticles = async () => {
            try {
                const res = await fetch('/data/articles.json', { signal });
                const data = await res.json();
                
                // Calculate total pages based on data length
                setTotalPages(Math.ceil(data.length / articlesPerPage));
                
                // Get subset of articles for current page
                const startIndex = (currentPage - 1) * articlesPerPage;
                const endIndex = startIndex + articlesPerPage;
                
                const articleSlides = data.slice(startIndex, endIndex).map(article => ({
                    id: article.id,
                    title: article.title,
                    excerpt: article.excerpt,
                    image: article.imageUrl,
                    category: article.category || "Guides",
                    readingTime: article.readingTime || "8 minutes reading"
                }));
                
                setArticles(articleSlides);
                setLoading(false);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error("Error fetching articles:", error);
                    setLoading(false);
                }
            }
        };

        fetchArticles();
        
        return () => controller.abort();
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Scroll to top of article section when page changes
        window.scrollTo({ top: document.getElementById('recent-articles').offsetTop, behavior: 'smooth' });
    };

    if (loading) return <div className="text-center py-10">Loading articles...</div>;

    return (
        <section id="recent-articles" className="relative py-12 mx-auto px-25">
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
                        <Suspense fallback={<LoadingBox />}>
                            <LazyPromoProducts />
                        </Suspense>
                    </div>

                    {/* Remaining Articles */}
                    {articles.slice(3).map((article) => (
                        <ArticlePreview key={article.id} {...article} />
                    ))}

                    {/* Pagination */}
                    <Suspense fallback={<LoadingBox />}>
                        <Pagination 
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </Suspense>
                </div>

                <aside className="w-full lg:w-64 flex flex-col gap-8">
                    <Suspense fallback={<LoadingBox />}>
                        <AboutCard />
                    </Suspense>

                    <Suspense fallback={<LoadingBox />}>
                        <Destination/>
                    </Suspense>
                    
                    <Suspense fallback={<LoadingBox />}>
                        <Newsletter/>
                    </Suspense>
                    
                    <Suspense fallback={<LoadingBox />}>
                        <Advertisement/>
                    </Suspense>
                </aside>
            </div>
            
            <Suspense fallback={<LoadingBox />}>
                <Instagram/>
            </Suspense>
        </section>
    );
};

export default RecentArticles;
