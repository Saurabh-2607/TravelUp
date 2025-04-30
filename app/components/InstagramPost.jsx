"use client"
import { useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';

const InstagramPost = ({ imageUrl, postUrl, defaultLikes = "2.5K", defaultComments = "342" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Use a placeholder image if imageUrl is missing or fails to load
  const placeholderImage = "/placeholder-image.jpg";
  const displayImage = imageError || !imageUrl ? placeholderImage : imageUrl;

  return (
    <div 
      className="absoulute left-0 min-w-0 aspect-square overflow-hidden relative instagram-post"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ borderRadius: 0 }}
    >
      {/* Background image with error handling */}
      <img 
        src={displayImage} 
        alt="Instagram post" 
        className="w-full h-full object-cover"
        onError={() => {
          console.error("Failed to load image:", imageUrl);
          setImageError(true);
        }}
      />
      
      {/* Full overlay that shows on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300">
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-white">
              <Heart className="w-6 h-6 mr-2 text-white fill-white" />
              <span>{defaultLikes}</span>
            </div>
            <div className="flex items-center text-white">
              <MessageCircle className="w-6 h-6 mr-2 text-white" />
              <span>{defaultComments}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstagramPost;