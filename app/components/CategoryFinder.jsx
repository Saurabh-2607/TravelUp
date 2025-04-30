"use client";

import { useState, useEffect } from 'react';

const CategoryFinder = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch articles data from JSON file
        const response = await fetch('/data/articles.json');
        
        if (!response.ok) {
          throw new Error('Failed to fetch articles data');
        }
        
        const articlesData = await response.json();
        
        // Extract unique categories and count their occurrences
        const categoryCount = articlesData.reduce((acc, article) => {
          const category = article.category;
          if (category) {
            acc[category] = (acc[category] || 0) + 1;
          }
          return acc;
        }, {});
        
        // Convert to array of [category, count] pairs and sort by count (ascending))
        const sortedCategories = Object.entries(categoryCount)
          .sort((a, b) => a[1] - b[1]) // Sort by count (ascending))
          .map(([category]) => category);
        
        setCategories(sortedCategories);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // For debugging or direct component usage
  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories: {error}</p>;

  return (
    <div className="category-finder">
      <h3>Available Categories:</h3>
      <ul>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

// Function to get categories that can be imported elsewhere
export const getCategories = async () => {
  try {
    const response = await fetch('/data/articles.json');
    if (!response.ok) throw new Error('Failed to fetch articles');
    
    const articlesData = await response.json();
    
    // Count occurrences of each category
    const categoryCounts = articlesData.reduce((acc, article) => {
      const category = article.category;
      if (category) {
        acc[category] = (acc[category] || 0) + 1;
      }
      return acc;
    }, {});
    
    // Sort by count (descending)
    return Object.entries(categoryCounts)
      .sort((a, b) => b[1] - a[1]) // Changed from a[1] - b[1]
      .map(([category]) => category);
  } catch (error) {
    console.error('Error in getCategories:', error);
    return [];
  }
};

export default CategoryFinder;
