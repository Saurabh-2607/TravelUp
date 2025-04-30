import { memo } from 'react';

const ProductsCards = ({title, price, imageurl}) => {
    // Use intersection observer to lazy load images
    const handleImageError = (e) => {
        console.error(`Failed to load image for "${title}"`);
        e.target.onerror = null;
        e.target.style.backgroundImage = "url('/placeholder-image.jpg')";
    };

    return (
        <div className="w-42 h-75 relative">
            <button className="w-42 h-16 absolute bottom-0 bg-white text-center text-black text-base font-bold">
                Buy
            </button>
            <div 
                className="w-42 h-59 relative bg-cover bg-center"
                style={{
                    backgroundImage: `url(${imageurl || '/placeholder-image.jpg'})`,
                }}
                onError={handleImageError}
                loading="lazy"
                data-src={imageurl}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
                <div className="absolute px-3 bottom-4 inline-flex justify-start items-start gap-2 overflow-hidden">
                    <div className="text-center justify-center text-white text-xl font-bold">{title}</div>
                </div>
                <div className="w-14 h-14 absolute top-0 right-0 overflow-hidden">
                    <div className="w-14 h-14 bg-white" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black text-lg font-bold">${price}</div>
                </div>
            </div>
        </div>
    );
}

// Memoize component to prevent unnecessary re-renders
export default memo(ProductsCards);
