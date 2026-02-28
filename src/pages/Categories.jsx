import React from 'react';
import { Link } from 'react-router-dom';
import { mockProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const Categories = () => {
    // Extract unique categories
    const categories = [...new Set(mockProducts.map(p => p.category))];

    // Create category map
    const productsByCategory = categories.reduce((acc, cat) => {
        acc[cat] = mockProducts.filter(p => p.category === cat);
        return acc;
    }, {});

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Shop by Category</h1>
                <p className="text-xl text-gray-500 mb-12 max-w-2xl">Browse our extensive collection of premium products carefully organized into specific categories for your convenience.</p>

                {/* Categories Navigation */}
                <div className="flex flex-wrap gap-4 mb-16">
                    {categories.map(cat => (
                        <a
                            key={cat}
                            href={`#category-${cat.toLowerCase()}`}
                            onClick={(e) => {
                                e.preventDefault();
                                const target = document.getElementById(`category-${cat.toLowerCase()}`);
                                if (target) {
                                    target.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="px-6 py-2 bg-white border border-gray-300 rounded-full text-base font-medium text-gray-700 hover:bg-black hover:text-white hover:border-black transition-colors"
                        >
                            {cat}
                        </a>
                    ))}
                </div>

                {/* Category Sections */}
                <div className="space-y-24">
                    {categories.map(category => (
                        <section key={category} id={`category-${category.toLowerCase()}`} className="scroll-mt-24">
                            <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
                                <h2 className="text-3xl font-bold text-gray-900">{category}</h2>
                                <Link to="/products" className="text-indigo-600 hover:text-indigo-800 font-medium">View all {category.toLowerCase()} &rarr;</Link>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {productsByCategory[category].map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Categories;
