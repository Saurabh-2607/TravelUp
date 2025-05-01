"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CategorySorted from '../components/CategorySorted';
import { getCategories } from '../components/CategoryFinder';


export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCategories = async () => {
            const categoryList = await getCategories();
            setCategories(categoryList);
            setLoading(false);
        };

        loadCategories();
    }, []);

    return (
        <div className='min-h-screen'>
            <div className="relative">
                <Navbar />
            </div>
            
            <main className='pt-8 px-25'>
                <div className='mb-5'>
                    <h1 className='text-4xl font-bold'>Categories</h1>
                </div>
                
                {loading ? (
                    <p>Loading categories...</p>
                ) : (
                    <div className=''>
                        {categories.map(category => (
                            <CategorySorted key={category} category={category} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
