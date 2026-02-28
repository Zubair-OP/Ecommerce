import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

const ProductCard = ({ product }) => {
    return (
        <div className="group relative bg-white border border-gray-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            {/* Image Container with aspect ratio */}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl bg-gray-100 relative mb-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Quick Actions overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                        <FiShoppingCart className="w-5 h-5" />
                    </button>
                    <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 shadow-lg">
                        <FiHeart className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                        <Link to={`/product/${product.id}`} className="hover:text-indigo-600 transition-colors">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </Link>
                    </h3>
                    <p className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
                </div>
                <p className="text-sm text-gray-500">{product.category}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-1">
                    <div className="flex text-yellow-400">
                        {'★'.repeat(Math.floor(product.rating))}
                        <span className="text-gray-300">{'★'.repeat(5 - Math.floor(product.rating))}</span>
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
