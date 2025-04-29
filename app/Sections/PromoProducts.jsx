"use client"
import { useState, useEffect } from 'react';
import ProductsCards from "../components/ProductsCards";

const PromoProducts = () => {

    const [products, setProducts] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
        useEffect(() => {
            fetch('/products.json')
                .then(response => response.json())
                .then(data => {
                    const productsList = data.slice(0, 5).map(product => ({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        imageurl: product.imageUrl
                    }));
                    setProducts(productsList);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching articles:", error);
                    setLoading(false);
                    setError("Failed to load Products");
                });
        }, []);
    
    
        if (loading) return <div>Loading Products...</div>;
        if (error) return <div>Error: {error}</div>;
        if (!products.length) return <div>No Products found</div>;


    return (
        <section className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Featured Travel Guides</h2>
                    <p className="text-gray-600">Discover our best-selling travel guides to enhance your journey</p>
                </div>
                <div>
                {products.map((product) => (
                    <ProductsCards
                        key={product.id}
                        id={product.id}
                        title={product.title}
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