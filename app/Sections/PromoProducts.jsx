"use client"
import { useState, useEffect } from 'react';
import ProductsCards from "../components/ProductsCards";

const PromoProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch('/products.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Access the products array from the data object
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
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setLoading(false);
                setError("Failed to load Products");
            });
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
                        <ProductsCards
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