import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { mockProducts } from '../data/products';
import { FiFilter, FiChevronDown } from 'react-icons/fi';

const ProductList = () => {
    const [products, setProducts] = useState(mockProducts);
    const [sortBy, setSortBy] = useState('featured');

    // Simple load more mock state
    const [visibleCount, setVisibleCount] = useState(8);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 4);
    };

    return (
        <div className="bg-gray-50 pb-24 pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header & Controls */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 pb-6 border-b border-gray-200 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">All Products</h1>
                        <p className="mt-2 text-sm text-gray-500">Discover our collection of premium quality items.</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                            <FiFilter className="mr-2 h-5 w-5 text-gray-400" />
                            Filter
                        </button>
                        <div className="relative inline-block text-left">
                            <button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                Sort
                                <FiChevronDown className="ml-1 -mr-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                    {products.slice(0, visibleCount).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Load More Button */}
                {visibleCount < products.length && (
                    <div className="mt-16 flex justify-center">
                        <button
                            onClick={handleLoadMore}
                            className="px-8 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductList;
