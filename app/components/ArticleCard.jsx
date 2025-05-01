import Link from 'next/link';
import Image from 'next/image';

const ArticleCard = ({ article }) => {
    const { id, title, excerpt, imageUrl, category, readingTime = '8 minutes reading' } = article;
    
    // Function to trim excerpt to fit available space
    const trimExcerpt = (text) => {
        if (!text) return '';
        const words = text.split(' ');
        // Limit to approximately 18 words for the trimmed width
        if (words.length <= 18) return text;
        return words.slice(0, 18).join(' ') + '...';
    };
    
    const trimmedExcerpt = trimExcerpt(excerpt);
    
    return (
        <div className="w-[400px] h-[500px] relative">
            <div className="relative w-full h-52">
                <Image 
                    src={imageUrl} 
                    alt={title}
                    fill
                    sizes="460px"
                    priority={false}
                    className="object-cover w-full h-full"
                    style={{ objectFit: 'cover' }}
                />
                <div className="w-full h-52 absolute top-0 left-0 bg-black/30" />
            </div>
            
            <div className="left-0 top-[230px] absolute inline-flex flex-col justify-start items-start gap-4 overflow-hidden ">
                <div className="flex flex-col justify-start items-start gap-2">
                    <div className="inline-flex justify-start items-center gap-3 overflow-hidden">
                        <div className="text-black text-base font-normal s-font leading-relaxed">#{category}</div>
                        <div className="w-1 h-1 bg-zinc-400 rounded-full" />
                        <div className="text-neutral-400 text-base font-normal s-font leading-relaxed">{readingTime} reading</div>
                    </div>
                    <h2 className="w-[400px] text-black text-3xl font-bold leading-8 line-clamp-2 overflow-hidden">{title}</h2>
                    <p className="w-[400px] text-neutral-400 text-base font-normal s-font leading-relaxed line-clamp-3">{trimmedExcerpt}</p>
                </div>
                
                <Link href={`/articles/${id}`} className="w-40 h-14 relative">
                    <div className="w-35 h-14 bg-black flex items-center justify-center">
                        <span className="text-center text-white text-base font-bold s-font leading-normal">Read more</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ArticleCard;