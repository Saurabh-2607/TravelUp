import { useRouter } from 'next/navigation';
import { memo } from 'react';

const ArticalPreview = ({ id, title, excerpt, category, readingTime, image }) => {
    const router = useRouter();
    
    // Function to trim excerpt to exactly 25 words
    const trimExcerpt = (text) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length <= 25) return text;
        return words.slice(0, 25).join(' ') + '...';
    };

    const trimmedExcerpt = trimExcerpt(excerpt);
    
    const navigateToArticle = () => {
        if (id) {
            router.push(`/articles/${id}`);
        }
    };
    
    return (
        <div className="inline-flex justify-start items-center gap-5">
            <div 
                className="w-[350px] h-[320px] bg-black/30 relative overflow-hidden flex-shrink-0 cursor-pointer" 
                style={{
                    backgroundImage: image ? `url(${image})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                onClick={navigateToArticle}
            />
            <div className="inline-flex flex-col justify-start items-start gap-2">
                <div className="flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch inline-flex justify-center items-center gap-3 overflow-hidden">
                        <div className="justify-start text-black text-base font-normal s-font leading-relaxed">#{category}</div>
                        <div className="w-1 h-1 bg-zinc-400 rounded-full" />
                        <div className="flex-1 justify-start text-neutral-400 text-base font-normal s-font leading-relaxed">{readingTime} reading</div>
                    </div>
                    <div className="justify-start text-black text-4xl font-bold leading-10 cursor-pointer" onClick={navigateToArticle}>{title}</div>
                    <div className="justify-start text-neutral-400 text-lg font-normal s-font leading-relaxed">{trimmedExcerpt}</div>
                </div>
                <button 
                    className="w-40 h-14 px-2 py-2 s-font bg-black text-white font-semibold text-sm hover:bg-gray-800 transition"
                    onClick={navigateToArticle}
                >
                    Read more
                </button>
            </div>
        </div>
    );
};

export default memo(ArticalPreview);