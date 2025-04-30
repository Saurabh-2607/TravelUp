"use client";

import { useState, useEffect, useCallback, memo } from "react";
import Image from "next/image";
import Navbar from '../components/Navbar';
import {ChevronLeft, ChevronRight } from "lucide-react";

const trimToWords = (text, wordLimit) => {
  if (!text) return '';
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};

// Memo-ize slide content to prevent unnecessary re-renders
const SlideContent = memo(({ title, excerpt, category, onPrevSlide, onNextSlide }) => {
  const trimmedTitle = trimToWords(title, 5);
  const trimmedExcerpt = trimToWords(excerpt, 20);
  
  return (
    <div className="absolute bottom-0 left-25 bg-white pb-7 pl-8 max-w-md shadow-lg">
      <div className="flex justify-between items-center">
        <div></div>
        <button
          onClick={onPrevSlide}
          className="bg-black text-white p-2 hover:bg-gray-800"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      <p className="text-sm mb-1 s-font font-medium text-black">{category}</p>
      <h2 className="text-3xl font-bold text-black leading-tight mr-8 mb-3"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {trimmedTitle}
      </h2>
      <p
        className="text-gray-500 s-font mr-8 mb-4 overflow-hidden text-ellipsis"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {trimmedExcerpt}
      </p>
      <button className="px-5 py-3 s-font bg-black text-white font-semibold text-sm hover:bg-gray-800 transition">
        Read more
      </button>
    </div>
  );
});

SlideContent.displayName = 'SlideContent';

export default function HeroSection() {
    const [slides, setSlides] = useState([]);
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(false);
    const [loading, setLoading] = useState(true);

    // Use useCallback to memoize these functions
    const nextSlide = useCallback(() => {
        if (slides.length === 0) return;
        setFade(true);
        setTimeout(() => {
            setCurrent((current + 1) % slides.length);
            setFade(false);
        }, 500);
    }, [current, slides.length]);

    const prevSlide = useCallback(() => {
        if (slides.length === 0) return;
        setFade(true);
        setTimeout(() => {
            setCurrent((current - 1 + slides.length) % slides.length);
            setFade(false);
        }, 500);
    }, [current, slides.length]);

    useEffect(() => {
        // Use AbortController to handle component unmounting
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('/data/articles.json', { signal })
            .then(response => response.json())
            .then(data => {
                const articleSlides = data.slice(0, 5).map(article => ({
                    id: article.id,
                    title: article.title,
                    excerpt: article.excerpt,
                    image: article.imageUrl,
                    category: article.category
                }));
                setSlides(articleSlides);
                setLoading(false);
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    console.error("Error fetching articles:", error);
                    setLoading(false);
                }
            });

        return () => controller.abort();
    }, []);

    useEffect(() => {
        if (slides.length === 0) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide, slides.length]);

    if (loading || slides.length === 0) {
        return (
            <div className="relative w-full h-screen flex items-center justify-center bg-gray-100">
                <p>Loading...</p>
            </div>
        );
    }

    const { title, excerpt, image, category } = slides[current];

    return (
        <div className="relative w-full h-screen overflow-hidden bg-gray-100">
            <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                    fade ? "opacity-0" : "opacity-100"
                }`}
            >
                <Navbar />
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-center"
                    priority={true}
                    sizes="100vw"
                    quality={80}
                />
            </div>


            {/* Use memoized component for slide content */}
            <SlideContent 
                title={title} 
                excerpt={excerpt} 
                category={category} 
                onPrevSlide={prevSlide} 
                onNextSlide={nextSlide} 
            />

            <div className="absolute bottom-61.75 left-137 shadow-lg">
                <button
                    onClick={nextSlide}
                    className="bg-white text-black p-2 hover:bg-gray-200"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}