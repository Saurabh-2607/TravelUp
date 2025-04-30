"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import Navbar from './Navbar';

const ArticleDetail = ({ articleId }) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  
  useEffect(() => {
    // Use AbortController for cleanup
    const controller = new AbortController();
    const signal = controller.signal;
    
    const fetchArticle = async () => {
      try {
        const res = await fetch('/data/articles.json', { signal });
        const articles = await res.json();
        
        const foundArticle = articles.find(a => a.id === articleId);
        if (!foundArticle) {
          setError('Article not found');
          setLoading(false);
          return;
        }
        
        setArticle(foundArticle);
        setLoading(false);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error("Error fetching article:", error);
          setError('Failed to load article');
          setLoading(false);
        }
      }
    };
    
    fetchArticle();
    
    return () => controller.abort();
  }, [articleId]);
  
  const goBack = () => {
    router.back();
  };
  
  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  if (loading) return <div className="text-center py-20">Loading article...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  if (!article) return <div className="text-center py-20">Article not found</div>;
  
  const { 
    title, 
    author,
    authorAvatar,
    publishedDate, 
    category,
    readingTime,
    imageUrl,
    content,
    excerpt
  } = article;
  
  return (
    <article className="min-h-screen">
      <div className="absolute top-0 left-0 right-0 z-10">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <div className="relative w-full h-[70vh]">
        <Image
          src={imageUrl || '/placeholder-image.jpg'}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Back Button */}
        <button 
          onClick={goBack}
          className="absolute top-24 left-8 z-20 flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        
        {/* Share Button */}
        <button 
          className="absolute top-24 right-8 z-20 flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
        >
          <Share2 size={20} />
          <span>Share</span>
        </button>
      </div>
      
      {/* Article Content */}
      <div className="container mx-auto px-25 -mt-32 relative z-10">
        <div className="bg-white p-8 shadow-lg max-w-4xl mx-auto">
          {/* Category */}
          <div className="mb-4">
            <span className="bg-black text-white px-4 py-2 uppercase text-sm font-bold">
              {category || "Travel"}
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          
          {/* Meta information */}
          <div className="flex flex-wrap gap-6 mb-8 text-gray-500 s-font">
            {/* Author info */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image 
                  src={authorAvatar || '/Profile.jpg'} 
                  alt={author || 'Author'} 
                  width={40} 
                  height={40} 
                  className="object-cover"
                />
              </div>
              <span>{author || 'Anonymous'}</span>
            </div>
            
            {/* Date */}
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{formatDate(publishedDate || new Date().toISOString())}</span>
            </div>
            
            {/* Reading time */}
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{readingTime || '10 min read'}</span>
            </div>
          </div>
          
          {/* Article intro */}
          <div className="text-xl text-gray-700 mb-8 font-medium italic">
            {excerpt}
          </div>
          
          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            {content ? (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              <div>
                <p>
                  Traveling has always been one of the most rewarding experiences in my life. The sights, sounds, and tastes of new places open up perspectives that simply cannot be gained any other way. This particular journey took me to places I'd only dreamed about before.
                </p>
                <p>
                  The morning started with the gentle rays of the sun peeking through my window. I had prepared for this trip for months, researching the best spots, learning basic phrases of the local language, and connecting with fellow travelers who had ventured here before.
                </p>
                <p>
                  As I navigated the cobblestone streets, the aroma of freshly baked bread and brewing coffee filled the air. Locals greeted me with warm smiles, seemingly appreciative of my attempts to speak their language, however clumsy. It's these small interactions that often become the most cherished memories.
                </p>
                <p>
                  The highlight of the day was undoubtedly the visit to an ancient monument that stood as a testament to the rich history of the region. As I stood there, taking in the grandeur, I couldn't help but reflect on how many others had stood in this very spot over the centuries, each with their own stories and dreams.
                </p>
                <p>
                  By the end of the day, with tired feet but an enriched soul, I realized that the true value of travel isn't just in the places we see, but in the way they change us. Each journey leaves an indelible mark, shaping our perspectives and broadening our horizons in ways we might never have imagined.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Related articles section could be added here */}
    </article>
  );
};

export default ArticleDetail;
