"use client"
import { useState, useEffect, memo } from 'react';
import ProductsCards from "../components/ProductsCards";

// Memoize ProductsCards to prevent unnecessary re-renders
const MemoizedProductsCard = memo(ProductsCards);

const PromoProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        // Use AbortController to handle component unmounting
        const controller = new AbortController();
        const signal = controller.signal;
        
        const fetchProducts = async () => {
            try {
                const response = await fetch('/data/products.json', { signal });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                
                if (data.products && Array.isArray(data.products)) {
                    const productsList = data.products.slice(0, 5).map(product => ({
                        id: product.id,
                        title: product.name || `Mystery of ${product.region || 'Unknown'}`,
                        price: product.price || 29,
                        imageurl: product.coverImage || '/placeholder-image.jpg',
                        author: product.author,
                        region: product.region || '',
                        description: product.description,
                        categories: product.categories
                    }));
                    
                    setProducts(productsList);
                } else {
                    throw new Error('Invalid data structure');
                }
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error("Error fetching products:", error);
                    setError("Failed to load Products");
                }
            } finally {
                if (!signal.aborted) {
                    setLoading(false);
                }
            }
        };
        
        fetchProducts();
        
        return () => controller.abort();
    }, []);
    
    if (loading) return <div className="text-center py-10">Loading Products...</div>;
    if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

    return (
        <section className="bg-black py-8 px-4">
            <div className="mx-auto">
                <div className="text-white mb-6">
                    <h2 className="text-2xl ml-8 font-bold">Find your complete guide to everywhere you need to visit</h2>
                </div>
                <div className="flex flex-wrap justify-left ml-8 gap-5">
                    {products.map((product) => (
                        <MemoizedProductsCard
                            key={product.id}
                            title={product.title || `Mystery of ${product.region}`}
                            price={product.price}
                            imageurl={product.imageurl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}   

export default PromoProducts;