import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const ArticleCard = ({ article }) => {
    const { id, title, excerpt, imageUrl, category, readingTime = '8 minutes reading' } = article;
    const [imgSrc, setImgSrc] = useState(imageUrl);
    
    // Function to trim excerpt to fit available space
    const trimExcerpt = (text) => {
        if (!text) return '';
        const words = text.split(' ');
        // Limit to approximately 18 words for the trimmed width
        if (words.length <= 18) return text;
        return words.slice(0, 18).join(' ') + '...';
    };
    
    // Function to handle image load errors
    const handleImageError = () => {
        // Switch to the fallback image if the original fails
        setImgSrc(`https://picsum.photos/seed/${title}/800/600`);
    };
    
    const trimmedExcerpt = trimExcerpt(excerpt);
    
    return (
        <div className="w-[380px] h-[450px] relative">
            <div className="relative w-full h-49">
                <Image 
                    src={imgSrc}
                    alt={title}
                    fill
                    sizes="460px"
                    priority={false}
                    className="object-cover w-full h-full"
                    style={{ objectFit: 'cover' }}
                    onError={handleImageError}
                />
                <div className="w-full h-49 absolute top-0 left-0 bg-black/30" />
            </div>
            
            <div className="left-0 top-[218px] absolute inline-flex flex-col justify-start items-start gap-3 overflow-hidden ">
                <div className="flex flex-col justify-start items-start gap-2">
                    <div className="inline-flex justify-start items-center gap-3 overflow-hidden">
                        <div className="text-black text-base font-normal s-font leading-relaxed">#{category}</div>
                        <div className="w-1 h-1 bg-zinc-400 rounded-full" />
                        <div className="text-neutral-400 text-base font-normal s-font leading-relaxed">{readingTime} reading</div>
                    </div>
                    <h2 className="w-[380px] text-black text-3xl font-bold leading-8 line-clamp-2 overflow-hidden">{title}</h2>
                    <p className="w-[380px] text-neutral-400 text-base font-normal s-font leading-relaxed line-clamp-3">{trimmedExcerpt}</p>
                </div>
                
                <Link href={`/articles/${id}`} className="w-38 h-13 relative">
                    <div className="w-38 h-13 bg-black flex items-center justify-center">
                        <span className="text-center text-white text-base font-bold s-font leading-normal">Read more</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ArticleCard;