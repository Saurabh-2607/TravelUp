"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {Facebook, Instagram, Youtube, Github, ArrowLeft, Share2 } from 'lucide-react';
import Navbar from './Navbar';
import IntrestingArticles from './IntrestingArticles';

const ArticleDetail = ({ articleId }) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imgSrc, setImgSrc] = useState('');
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
  
  useEffect(() => {
    if (article && article.imageUrl) {
      setImgSrc(article.imageUrl);
    } else if (article && article.title) {
      setImgSrc(`https://picsum.photos/seed/${article.title}/800/600`);
    }
  }, [article]);
  
  // Function to handle image loading errors
  const handleImageError = () => {
      setImgSrc(`https://picsum.photos/seed/${article.title}/800/600`);
  };
  
  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    const date = new Date(dateString);
    // Format as DD.MM.YYYY
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  
  if (loading) return <div className="text-center py-20">Loading article...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  if (!article) return <div className="text-center py-20">Article not found</div>;
  
  // Match the structure from the JSON file
  const { 
    title, 
    authorName,
    submissionDate, 
    category,
    readingTime,
    imageUrl,
    fullContent,
    excerpt
  } = article;
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 z-10">
          <Navbar/>
        </div>
        
        <div className="absolute inset-0">
          <Image
            src={imgSrc}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
            onError={handleImageError}
          />
        </div>
        
        <div className='absolute w-3/4 h-auto -mt-40 mx-auto left-0 right-0 bottom-0 bg-white p-8'>
        <div className='w-full max-w-[706px] mx-auto'>
          <div className="text-4xl mt-5 font-bold text-center leading-10">{title}</div>
          
          <div className="flex justify-between s-font items-center mt-6 mb-4">
            <div className="flex gap-6 items-center text-gray-500">
              <div className="text-black text-m font-normal">
                {category}
              </div>
              <div className="flex items-center gap-2">
                <span>{readingTime} reading</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{formatDate(submissionDate || new Date())}</span>
              </div>
            </div>
            
            {/* Right section: Social icons */}
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 bg-black flex items-center justify-center">
                <Facebook size={16} className="text-white" />
              </a>                        
              <a href="#" className="w-8 h-8 bg-black flex items-center justify-center">
                <Instagram size={16} className="text-white" />
              </a>                        
              <a href="#" className="w-8 h-8 bg-black flex items-center justify-center">
                <Youtube size={16} className="text-white" />
              </a>                        
              <a href="#" className="w-8 h-8 bg-black flex items-center justify-center">
                <Github size={16} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>

      
      <section className="bg-white flex flex-col items-center px-4 py-10 mx-auto">  
        <div className="w-full max-w-[706px] h-0.5 bg-zinc-200 mb-12" />
        
        <p className="text-3xl text-center max-w-[706px] text-gray-700 s-font font-light italic">
          {excerpt}
        </p>
        <div className="w-full h-0.5 max-w-[706px] bg-zinc-200 mt-8 mb-8" />
        
        <div className="w-[704px] justify-start text-black text-base font-normal s-font leading-relaxed">
          {fullContent && (
            <p className="mb-6">{fullContent}</p>
          )}
          
          <p className="mb-4">
            Traveling has always been one of the most rewarding experiences in my life. The sights, sounds, and tastes of new places open up perspectives that simply cannot be gained any other way. This particular journey took me to places I'd only dreamed about before.
          </p>
          
          <p className="mb-6">
            The morning started with the gentle rays of the sun peeking through my window. I had prepared for this trip for months, researching the best spots, learning basic phrases of the local language, and connecting with fellow travelers who had ventured here before.
          </p>
          
          {/* Added image after first two paragraphs */}
          <div className="w-full h-80 relative mb-6">
            <Image 
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
              alt="Scenic travel landscape"
              className="object-cover rounded-md"
              fill
            />
          </div>
          
          <p className="mb-4">
            As I navigated the cobblestone streets, the aroma of freshly baked bread and brewing coffee filled the air. Locals greeted me with warm smiles, seemingly appreciative of my attempts to speak their language, however clumsy. It's these small interactions that often become the most cherished memories.
          </p>
          
          <p className="mb-4">
            The highlight of the day was undoubtedly the visit to an ancient monument that stood as a testament to the rich history of the region. As I stood there, taking in the grandeur, I couldn't help but reflect on how many others had stood in this very spot over the centuries, each with their own stories and dreams.
          </p>
          
          <p className="mb-4">
            By the end of the day, with tired feet but an enriched soul, I realized that the true value of travel isn't just in the places we see, but in the way they change us. Each journey leaves an indelible mark, shaping our perspectives and broadening our horizons in ways we might never have imagined.
          </p>
        </div>
      <IntrestingArticles/>
      </section>
    </div>
  );
};

export default ArticleDetail;
