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

/**
 * Fetches categories sorted by article count in descending order
 * @returns {Promise<Array<string>>} Array of category names sorted by popularity
 */
export async function getCategoriesByPopularity() {
  try {
    // Fetch articles data
    const response = await fetch('/data/articles.json');
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    
    const articles = await response.json();
    
    // Count articles in each category
    const categoryCount = articles.reduce((acc, article) => {
      const category = article.category;
      if (category) {
        acc[category] = (acc[category] || 0) + 1;
      }
      return acc;
    }, {});
    
    // Sort categories by count in descending order
    return Object.entries(categoryCount)
      .sort((a, b) => b[1] - a[1])
      .map(([category]) => category);
  } catch (error) {
    console.error('Error fetching categories by popularity:', error);
    return [];
  }
}

/**
 * Fetches categories with their article counts in descending order
 * @returns {Promise<Array<[string, number]>>} Array of [category, count] pairs
 */
export async function getCategoriesWithCounts() {
  try {
    const response = await fetch('/data/articles.json');
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    
    const articles = await response.json();
    
    // Count articles in each category
    const categoryCount = articles.reduce((acc, article) => {
      const category = article.category;
      if (category) {
        acc[category] = (acc[category] || 0) + 1;
      }
      return acc;
    }, {});
    
    // Return array of [category, count] pairs sorted by count
    return Object.entries(categoryCount)
      .sort((a, b) => b[1] - a[1]);
  } catch (error) {
    console.error('Error fetching categories with counts:', error);
    return [];
  }
}
