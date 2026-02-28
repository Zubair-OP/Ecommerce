import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { mockProducts } from '../data/products';

const Home = () => {
    // Grab the first 4 products for the featured section
    const featuredProducts = mockProducts.slice(0, 4);

    return (
        <div className="bg-white">
            <Hero />

            {/* Featured Categories */}
            <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-baseline sm:justify-between mb-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
                    <Link to="/categories" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                        Browse all categories &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-8">
                    <div className="group relative aspect-w-2 aspect-h-1 sm:aspect-h-1 sm:aspect-w-1 lg:aspect-h-1 lg:aspect-w-2 overflow-hidden rounded-lg bg-gray-100 transition-shadow hover:shadow-lg">
                        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800" alt="Clothing" className="object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white font-bold text-xl">Clothing</div>
                    </div>
                    <div className="group relative aspect-w-2 aspect-h-1 sm:aspect-h-1 sm:aspect-w-1 lg:aspect-h-1 lg:aspect-w-2 overflow-hidden rounded-lg bg-gray-100 transition-shadow hover:shadow-lg">
                        <img src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800" alt="Footwear" className="object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white font-bold text-xl">Footwear</div>
                    </div>
                    <div className="group relative aspect-w-2 aspect-h-1 sm:aspect-h-1 sm:aspect-w-1 lg:aspect-h-1 lg:aspect-w-2 overflow-hidden rounded-lg bg-gray-100 transition-shadow hover:shadow-lg sm:col-span-2 lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800" alt="Electronics" className="object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white font-bold text-xl">Electronics</div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between mb-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Trending Now</h2>
                    <Link to="/products" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
                        View the collection &rarr;
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Home;
