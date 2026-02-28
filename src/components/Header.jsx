import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingCart, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import { useCart } from '../hooks/CartContext';

const Header = () => {
    const { cartCount } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    React.useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Mobile Menu Button - Left on mobile */}
                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            className="text-gray-500 hover:text-gray-900 focus:outline-none p-2 -ml-2"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open menu</span>
                            <FiMenu className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Logo - Center on mobile, left on desktop */}
                    <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none md:justify-start">
                        <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900">
                            E-Commerce
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-600 transition-colors">Home</Link>
                        <Link to="/products" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">Shop</Link>
                        <Link to="/categories" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">Categories</Link>
                        <Link to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">About</Link>
                        <Link to="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">Contact</Link>
                    </nav>

                    {/* Right Section: Icons */}
                    <div className="flex items-center space-x-4 md:space-x-6">
                        <div className="hidden lg:block relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiSearch className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-black focus:border-black sm:text-sm transition duration-150 ease-in-out"
                                placeholder="Search products..."
                            />
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <button className="hidden sm:block text-gray-400 hover:text-gray-900 transition-colors p-1">
                                <span className="sr-only">Favorites</span>
                                <FiHeart className="h-6 w-6" />
                            </button>
                            <button className="hidden sm:block text-gray-400 hover:text-gray-900 transition-colors p-1">
                                <span className="sr-only">Account</span>
                                <FiUser className="h-6 w-6" />
                            </button>
                            <Link to="/cart" className="text-gray-400 hover:text-gray-900 transition-colors p-1 relative">
                                <span className="sr-only">Cart</span>
                                <FiShoppingCart className="h-6 w-6" />
                                {cartCount > 0 && (
                                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 min-w-[1.25rem] h-5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-black rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 flex md:hidden animate-fade-in">
                    {/* Background overlay */}
                    <div
                        className="fixed inset-0 bg-black/50 transition-opacity"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Panel */}
                    <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl animate-slide-in-left">
                        <div className="flex px-4 pb-2 pt-5 items-center justify-between">
                            <div className="text-xl font-bold tracking-tight text-gray-900">
                                Menu
                            </div>
                            <button
                                type="button"
                                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <FiX className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Mobile Search */}
                        <div className="mt-4 px-4 sm:hidden">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiSearch className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-black focus:border-black text-base"
                                    placeholder="Search..."
                                />
                            </div>
                        </div>

                        {/* Mobile Links */}
                        <div className="space-y-6 px-4 py-6 border-t border-gray-200 mt-6">
                            <div className="flow-root">
                                <Link to="/" className="-m-2 block p-2 font-medium text-gray-900 hover:bg-gray-50 rounded-md">Home</Link>
                            </div>
                            <div className="flow-root">
                                <Link to="/products" className="-m-2 block p-2 font-medium text-gray-900 hover:bg-gray-50 rounded-md">Shop All</Link>
                            </div>
                            <div className="flow-root">
                                <Link to="/categories" className="-m-2 block p-2 font-medium text-gray-900 hover:bg-gray-50 rounded-md">Categories</Link>
                            </div>
                            <div className="flow-root">
                                <Link to="/about" className="-m-2 block p-2 font-medium text-gray-900 hover:bg-gray-50 rounded-md">About Us</Link>
                            </div>
                            <div className="flow-root">
                                <Link to="/contact" className="-m-2 block p-2 font-medium text-gray-900 hover:bg-gray-50 rounded-md">Contact Support</Link>
                            </div>
                        </div>

                        {/* Mobile User Actions */}
                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            <div className="flow-root">
                                <Link to="/" className="-m-2 flex items-center p-2 font-medium text-gray-900 hover:bg-gray-50 rounded-md">
                                    <FiUser className="h-5 w-5 mr-3 text-gray-400" /> Sign in
                                </Link>
                            </div>
                            <div className="flow-root">
                                <Link to="/" className="-m-2 flex items-center p-2 font-medium text-gray-900 hover:bg-gray-50 rounded-md">
                                    <span className="w-5 h-5 flex justify-center items-center mr-3 font-bold">New?</span> Create account
                                </Link>
                            </div>
                            <div className="flow-root">
                                <Link to="/" className="-m-2 flex items-center p-2 font-medium text-gray-900 hover:bg-gray-50 rounded-md">
                                    <FiHeart className="h-5 w-5 mr-3 text-gray-400" /> Favorites
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
