"use client";

/**
 * Fetches unique categories from articles data
 * @returns {Promise<Array<string>>} Array of category names
 */
export async function getCategories() {
  try {
    // Fetch articles data
    const response = await fetch('/data/articles.json');
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    
    const articles = await response.json();
    
    // Extract unique categories
    const categories = [...new Set(articles.map(article => article.category))].filter(Boolean);
    
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}
