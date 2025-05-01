import { memo } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

// Default values for when props are not provided
const defaultProps = {
    currentPage: 1,
    totalPages: 5,
    onPageChange: () => {}
};

const Pagination = ({ currentPage = 1, totalPages = 5, onPageChange = () => {} }) => {
    // Function to handle page change
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    // Generate array of page numbers to display
    const getPageNumbers = () => {
        const pages = [];
        const displayCount = 5; // Number of pages to display (excluding ellipsis)
        
        // Always show first page
        pages.push(1);
        
        if (totalPages <= displayCount + 2) {
            // If not too many pages, show all of them
            for (let i = 2; i < totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Show pages around current page
            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);
            
            // Adjust to show at least 3 pages if possible
            if (startPage === 2) endPage = Math.min(4, totalPages - 1);
            if (endPage === totalPages - 1) startPage = Math.max(2, totalPages - 3);
            
            // Add ellipsis before middle pages if needed
            if (startPage > 2) pages.push("...");
            
            // Add middle pages
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
            
            // Add ellipsis after middle pages if needed
            if (endPage < totalPages - 1) pages.push("...");
        }
        
        // Always show last page if there's more than one page
        if (totalPages > 1) pages.push(totalPages);
        
        return pages;
    };

    // If there's only one page, don't render pagination
    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center">
            {/* Previous button */}
            <button 
                className={`w-12 h-12 bg-black flex items-center justify-center ${currentPage === 1 ? 'opacity-50' : ''}`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
            >
                <div className="w-6 h-6 text-white flex items-center justify-center">
                    <ChevronLeft/>
                </div>
            </button>
            
            {/* Page numbers */}
            {getPageNumbers().map((page, index) => (
                <div key={index} className="mx-1">
                    {page === "..." ? (
                        <div className="w-12 s-font h-12 flex items-center justify-center">
                            <span className="text-black text-lg font-normal">•••</span>
                        </div>
                    ) : (
                        <button
                            className={`w-12 s-font h-12 ${
                                currentPage === page 
                                    ? 'bg-white border-2 border-black' 
                                    : 'bg-white'
                            } flex items-center justify-center`}
                            onClick={() => handlePageChange(page)}
                        >
                            <span className="text-black text-lg font-normal">
                                {page}
                            </span>
                        </button>
                    )}
                </div>
            ))}
            
            {/* Next button */}
            <button 
                className={`w-12 h-12 bg-black flex items-center justify-center ${currentPage === totalPages ? 'opacity-50' : ''}`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
            >
                <div className="w-6 h-6 text-white flex items-center justify-center">
                    <ChevronRight/>
                </div>
            </button>
        </div>
    );
};

// Memoize to prevent unnecessary re-renders
export default memo(Pagination);