import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Text Content */}
                    <div className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Premium products</span>{' '}
                                <span className="block text-indigo-600 xl:inline">for your lifestyle</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Discover our latest collection of carefully curated items. Upgrade your everyday carry with products designed for durability and style.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <Link
                                        to="/products"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
                                    >
                                        Shop Now
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <Link
                                        to="/categories"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
                                    >
                                        Explore Categories
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="mt-8 lg:mt-0">
                        <img
                            className="w-full h-56 object-cover rounded-lg sm:h-72 md:h-96 lg:h-full"
                            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600"
                            alt="Shopping experience"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
