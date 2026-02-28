import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/CartContext';
import { FiTrash2, FiMinus, FiPlus, FiArrowRight } from 'react-icons/fi';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 py-16">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Your Cart is Empty</h2>
                <p className="text-gray-500 mb-8 max-w-md text-center">Looks like you haven't added anything to your cart yet. Discover our premium collection and find something you love.</p>
                <Link
                    to="/products"
                    className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 transition-colors"
                >
                    Start Shopping <FiArrowRight className="ml-2" />
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-10">Shopping Cart</h1>

                <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">

                    {/* Cart Items */}
                    <section className="lg:col-span-8">
                        <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
                            {cartItems.map((item) => (
                                <li key={`${item.id}-${item.size}`} className="flex py-6 sm:py-10 bg-white px-4 sm:px-6 mb-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 rounded-lg object-center object-cover sm:w-32 sm:h-32"
                                        />
                                    </div>

                                    <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                            <div>
                                                <div className="flex justify-between">
                                                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                                                        <Link to={`/product/${item.id}`} className="hover:text-indigo-600">
                                                            {item.name}
                                                        </Link>
                                                    </h3>
                                                </div>
                                                <div className="mt-1 flex text-sm">
                                                    <p className="text-gray-500">{item.category}</p>
                                                    {item.size && (
                                                        <p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">
                                                            Size: {item.size}
                                                        </p>
                                                    )}
                                                </div>
                                                <p className="mt-2 text-lg font-bold text-gray-900">${item.price.toFixed(2)}</p>
                                            </div>

                                            <div className="mt-4 sm:mt-0 sm:pr-9 flex items-center justify-between">
                                                {/* Quantity Controls */}
                                                <div className="flex items-center border border-gray-300 rounded-md bg-white">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                                        className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                                                    >
                                                        <FiMinus className="w-4 h-4" />
                                                    </button>
                                                    <span className="w-10 text-center text-sm font-medium text-gray-900">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                                        className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                                                    >
                                                        <FiPlus className="w-4 h-4" />
                                                    </button>
                                                </div>

                                                <div className="absolute top-0 right-0 sm:relative sm:top-auto sm:right-auto">
                                                    <button
                                                        type="button"
                                                        onClick={() => removeFromCart(item.id, item.size)}
                                                        className="-m-2 p-2 inline-flex text-gray-400 hover:text-red-500 transition-colors"
                                                    >
                                                        <span className="sr-only">Remove</span>
                                                        <FiTrash2 className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 flex text-sm text-gray-500 hidden sm:block">
                                            <p>In stock and ready to ship</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Order Summary */}
                    <section className="mt-16 bg-white rounded-xl shadow-sm border border-gray-200 px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-4">
                        <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

                        <dl className="space-y-4 text-sm text-gray-600">
                            <div className="flex items-center justify-between">
                                <dt>Subtotal</dt>
                                <dd className="font-medium text-gray-900">${cartTotal.toFixed(2)}</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt>Shipping</dt>
                                <dd className="font-medium text-gray-900">Calculated at checkout</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt>Tax</dt>
                                <dd className="font-medium text-gray-900">Calculated at checkout</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-lg font-bold text-gray-900">
                                <dt>Order Total</dt>
                                <dd>${cartTotal.toFixed(2)}</dd>
                            </div>
                        </dl>

                        <div className="mt-8">
                            <button className="w-full bg-black border border-transparent rounded-md shadow-sm py-4 px-4 text-base font-bold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors">
                                Proceed to Checkout
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Cart;
