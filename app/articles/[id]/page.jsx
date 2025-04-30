import { notFound } from "next/navigation";
import { Suspense } from "react";
import ArticleDetail from "../../components/ArticleDetail";

// Loading fallback
const LoadingArticle = () => (
  <div className="container mx-auto px-25 py-12">
    <div className="w-full h-64 bg-gray-100 animate-pulse mb-8"></div>
    <div className="w-2/3 h-12 bg-gray-100 animate-pulse mb-4"></div>
    <div className="w-1/3 h-8 bg-gray-100 animate-pulse mb-6"></div>
    <div className="space-y-4">
      <div className="w-full h-6 bg-gray-100 animate-pulse"></div>
      <div className="w-full h-6 bg-gray-100 animate-pulse"></div>
      <div className="w-3/4 h-6 bg-gray-100 animate-pulse"></div>
    </div>
  </div>
);

// Generate metadata for the page
export async function generateMetadata({ params }) {
  try {
    // Fetch article data
    const res = await fetch(`/data/articles.json`);
    const articles = await res.json();
    const article = articles.find(a => a.id === params.id);
    
    if (!article) return { title: 'Article Not Found' };
    
    return {
      title: `${article.title} | TravelUp`,
      description: article.excerpt,
      openGraph: {
        title: article.title,
        description: article.excerpt,
        images: [{ url: article.imageUrl }],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return { title: 'Article | TravelUp' };
  }
}

export default function ArticlePage({ params }) {
  return (
    <main>
      <Suspense fallback={<LoadingArticle />}>
        <ArticleDetail articleId={params.id} />
      </Suspense>
    </main>
  );
}
