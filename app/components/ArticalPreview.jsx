const ArticlePreview = ({title, excerpt, category, readingTime, image }) => {
    return (
        <div className="inline-flex justify-start items-center gap-5">
            <div 
                className="w-[350px] h-[320px] bg-black/30 relative overflow-hidden flex-shrink-0" 
                style={{
                    backgroundImage: image ? `url(${image})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <div className="inline-flex flex-col justify-start items-start gap-6">
                <div className="flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch inline-flex justify-center items-center gap-3 overflow-hidden">
                        <div className="justify-start text-black text-base font-normal leading-relaxed">#{category}</div>
                        <div className="w-1 h-1 bg-zinc-400 rounded-full" />
                        <div className="flex-1 justify-start text-neutral-400 text-base font-normal leading-relaxed">{readingTime} reading</div>
                    </div>
                    <div className="justify-start text-black text-4xl font-bold leading-10">{title}</div>
                    <div className="justify-start text-neutral-400 text-lg font-normal leading-relaxed">{excerpt}</div>
                </div>
                <button className="w-40 h-14 px-5 py-2 s-font bg-black text-white font-semibold text-sm hover:bg-gray-800 transition">
                    Read more
                </button>
            </div>
        </div>
    );
};

export default ArticlePreview;