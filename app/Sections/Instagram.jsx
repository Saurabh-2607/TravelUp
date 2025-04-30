"use client"
import { useState, useEffect } from 'react';
import InstagramPost from "../components/InstagramPost";

const Instagram = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Immediately create posts from the hardcoded image URLs to avoid fetch delays
        const imageUrls = [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb",

            "https://images.unsplash.com/photo-1494526585095-c41746248156",
            "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
            "https://images.unsplash.com/photo-1500534623283-312aade485b7",
            "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        ];
        
        const transformedPosts = imageUrls.map((url, index) => ({
            imageUrl: url,
            id: `travel-${index}`,
            likes: `${Math.floor(Math.random() * 10) + 1}.${Math.floor(Math.random() * 9)}K`,
            comments: `${Math.floor(Math.random() * 500) + 100}`
        }));
        
        setPosts(transformedPosts);
        setLoading(false);
    }, []);

    if (loading) return <section className="py-12"><h2 className="text-3xl font-semibold mb-8">Instagram</h2><div>Loading posts...</div></section>;
    if (error) return <section className="py-12"><h2 className="text-3xl font-semibold mb-8">Instagram</h2><div className="text-red-500">{error}</div></section>;

    return (
        <section className="py-12">
            <h2 className="text-3xl font-semibold mb-8">Instagram</h2>
            
            {posts.length === 0 ? (
                <p>No Instagram posts to display</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {posts.map((post, index) => (
                        <InstagramPost 
                            key={index}
                            imageUrl={post.imageUrl || post.url || post.image}
                            postUrl={post.postUrl || post.instagramUrl || `https://www.instagram.com/p/${post.id || 'default'}/`}
                            defaultLikes={post.likes || "2.5K"}
                            defaultComments={post.comments || "342"}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default Instagram;