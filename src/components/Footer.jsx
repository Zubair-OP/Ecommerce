import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-center md:text-left">

                    {/* Brand & Socials */}
                    <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
                        <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900 mb-4 block">
                            E-Commerce
                        </Link>
                        <p className="text-gray-500 text-sm mb-6 max-w-sm">
                            Your one-stop destination for premium products. Quality meets affordability in every item we offer.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                                <span className="sr-only">Facebook</span>
                                <FiFacebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                                <span className="sr-only">Twitter</span>
                                <FiTwitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                                <span className="sr-only">Instagram</span>
                                <FiInstagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <FiLinkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Shop</h3>
                        <ul className="space-y-4">
                            <li><Link to="/categories/new" className="text-base text-gray-500 hover:text-gray-900">New Arrivals</Link></li>
                            <li><Link to="/products" className="text-base text-gray-500 hover:text-gray-900">All Products</Link></li>
                            <li><Link to="/categories/sale" className="text-base text-gray-500 hover:text-gray-900">Sale</Link></li>
                            <li><Link to="/categories/bestsellers" className="text-base text-gray-500 hover:text-gray-900">Bestsellers</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Support</h3>
                        <ul className="space-y-4">
                            <li><Link to="/help" className="text-base text-gray-500 hover:text-gray-900">Help Center</Link></li>
                            <li><Link to="/returns" className="text-base text-gray-500 hover:text-gray-900">Returns</Link></li>
                            <li><Link to="/shipping" className="text-base text-gray-500 hover:text-gray-900">Shipping Info</Link></li>
                            <li><Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Newsletter</h3>
                        <p className="text-base text-gray-500 mb-4 max-w-sm">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                        <form className="flex w-full max-w-sm mx-auto md:mx-0">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                                required
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-r-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col flex-col-reverse md:flex-row justify-between items-center text-center">
                    <p className="text-base text-gray-400 mt-6 md:mt-0">
                        &copy; {new Date().getFullYear()} E-Commerce, Inc. All rights reserved.
                    </p>
                    <div className="flex justify-center flex-wrap gap-4 md:space-x-6 md:gap-0">
                        <Link to="/privacy" className="text-sm text-gray-400 hover:text-gray-900">Privacy Policy</Link>
                        <Link to="/terms" className="text-sm text-gray-400 hover:text-gray-900">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
