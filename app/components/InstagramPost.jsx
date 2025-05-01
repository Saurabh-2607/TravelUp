"use client"
import { useState, useEffect } from 'react';
import { Heart, MessageCircle } from 'lucide-react';

const InstagramPost = ({ imageUrl, postUrl, defaultLikes = "2.5K", defaultComments = "342" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Use a placeholder image if imageUrl is missing or fails to load
  const placeholderImage = "/placeholder-image.jpg";
  const displayImage = imageError || !imageUrl ? placeholderImage : imageUrl;

  // Preload the image
  useEffect(() => {
    if (!imageUrl) return;
    
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      setImageError(true);
      setImageLoaded(true); // Mark as loaded even on error
    };
    
    // Set a timeout to prevent infinite loading state
    const timeout = setTimeout(() => {
      setImageLoaded(true);
    }, 2000);
    
    return () => clearTimeout(timeout);
  }, [imageUrl]);

  return (
    <div 
      className="w-full h-full overflow-hidden relative flex-shrink-0 instagram-post"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        borderRadius: 0,
        background: "#f0f0f0",
        aspectRatio: '1/1',
        display: 'block',
      }}
    >
      {/* Placeholder while loading */}
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-12 h-12 rounded-full border-4 border-t-transparent border-gray-300 animate-spin"></div>
        </div>
      )}
      
      {/* Background image with loading transition */}
      <div
        className="w-full h-full absolute inset-0"
        style={{
          opacity: imageLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in',
        }}
      >
        <img 
          src={displayImage} 
          alt="Instagram post" 
          className="w-full h-full object-cover"
          loading="lazy"
          onError={() => {
            console.error("Failed to load image:", imageUrl);
            setImageError(true);
          }}
        />
      </div>
      
      {/* Full overlay that shows on hover */}
      {isHovered && imageLoaded && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10 transition-opacity duration-300">
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-white">
              <Heart className="w-6 h-6 mr-2 text-white fill-white" />
              <span className='s-font'>{defaultLikes}</span>
            </div>
            <div className="flex items-center text-white">
              <MessageCircle className="w-6 h-6 mr-2 text-white" />
              <span className='s-font'>{defaultComments}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstagramPost;