import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-gray-900 text-white py-24 sm:py-32">
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        alt="Office workspace"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">Our Story</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We're on a mission to deliver premium quality products that enhance your everyday life. Founded in 2024, E-Commerce started with a simple idea: great design shouldn't be a luxury.
                    </p>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900">Our Core Values</h2>
                    <p className="mt-4 text-xl text-gray-500">Everything we do is guided by these principles.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Value 1 */}
                    <div className="text-center group">
                        <div className="w-16 h-16 mx-auto bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:-translate-y-2 transition-transform">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Uncompromising Quality</h3>
                        <p className="text-gray-500">We carefully source the best materials and work with top manufacturers to ensure our products stand the test of time.</p>
                    </div>

                    {/* Value 2 */}
                    <div className="text-center group">
                        <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:-translate-y-2 transition-transform">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable Practices</h3>
                        <p className="text-gray-500">We believe in protecting the planet. That's why we prioritize eco-friendly packaging and ethical sourcing.</p>
                    </div>

                    {/* Value 3 */}
                    <div className="text-center group">
                        <div className="w-16 h-16 mx-auto bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:-translate-y-2 transition-transform">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Customer First</h3>
                        <p className="text-gray-500">Your satisfaction is our top priority. We provide excellent customer service and hassle-free returns.</p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-black text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-800 pt-16 mt-16 first:mt-0 first:pt-0">
                        <div>
                            <div className="text-4xl font-extrabold mb-2">50K+</div>
                            <div className="text-gray-400 font-medium">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-extrabold mb-2">100+</div>
                            <div className="text-gray-400 font-medium">Premium Products</div>
                        </div>
                        <div>
                            <div className="text-4xl font-extrabold mb-2">24/7</div>
                            <div className="text-gray-400 font-medium">Customer Support</div>
                        </div>
                        <div>
                            <div className="text-4xl font-extrabold mb-2">4.9/5</div>
                            <div className="text-gray-400 font-medium">Average Rating</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 py-16 sm:py-24 text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Experience the Difference</h2>
                    <p className="text-xl text-gray-500 mb-8">Ready to upgrade your lifestyle? Browse our latest collections and find your new favorites.</p>
                    <div className="flex justify-center gap-4">
                        <Link to="/products" className="px-8 py-4 bg-black text-white rounded-md font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg shadow-black/20">
                            Start Shopping
                        </Link>
                        <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 border border-gray-300 rounded-md font-bold text-lg hover:bg-gray-50 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
