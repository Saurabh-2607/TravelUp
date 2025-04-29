"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, Search, ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
    const [slides, setSlides] = useState([]);
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/articles.json')
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
                console.error("Error fetching articles:", error);
                setLoading(false);
            });
    }, []);

    const total = slides.length;

    const nextSlide = () => {
        if (total === 0) return;
        setFade(true);
        setTimeout(() => {
            setCurrent((current + 1) % total);
            setFade(false);
        }, 500);
    };

    const prevSlide = () => {
        if (total === 0) return;
        setFade(true);
        setTimeout(() => {
            setCurrent((current - 1 + total) % total);
            setFade(false);
        }, 500);
    };

    useEffect(() => {
        if (total === 0) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [current, total]);

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
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-8 bg-white backdrop-blur-md z-10"> */}
                <div className="absolute top-6 left-25 text-black">
                    <Menu className="filter w-6 h-6" />
                </div>
                <h1 className="absolute bg-blend-color-burn top-6 left-1/2 mb-8 -translate-x-1/2 text-2xl font-bold text-black">
                    TravelUp
                </h1>
                <div className="absolute top-6 right-25 text-black">
                    <Search className="w-6 h-6" />
                </div>
            {/* </div> */}

            {/* Slide Content */}
            <div className="absolute bottom-0 left-25 bg-white pb-7 pl-8 max-w-md shadow-lg">
                <div className="flex justify-between items-center">
                    <div></div>
                    <button
                        onClick={prevSlide}
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
                    {title}
                </h2>
                <p
                    className="text-gray-500 s-font mr-8 mb-4 overflow-hidden text-ellipsis"
                    style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                    }}
                >
                    {excerpt}
                </p>
                <button className="px-5 py-2 s-font bg-black text-white font-semibold text-sm hover:bg-gray-800 transition">
                    Read more
                </button>
            </div>

            <div className="absolute bottom-59.75 left-137 shadow-lg">
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