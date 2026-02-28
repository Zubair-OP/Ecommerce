import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/CartContext';
import { mockProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import { FiMinus, FiPlus, FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = mockProducts.find(p => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('M'); // Mock size selection

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Product not found</h2>
                <button onClick={() => navigate('/products')} className="text-indigo-600 hover:underline">Return to products</button>
            </div>
        );
    }

    const relatedProducts = mockProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

    const handleAddToCart = () => {
        addToCart(product, quantity, selectedSize);
        // Could add toast notification here
    };

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Product Layout */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">

                    {/* Product Image */}
                    <div className="aspect-w-4 aspect-h-5 sm:aspect-w-3 sm:aspect-h-4 lg:aspect-w-4 lg:aspect-h-5 rounded-2xl overflow-hidden bg-gray-100 mb-8 lg:mb-0">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">{product.name}</h1>

                        <div className="flex items-center mb-6">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <FiStar key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                                ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-500">{product.reviews} reviews</span>
                        </div>

                        <p className="text-3xl text-gray-900 font-bold mb-8">${product.price.toFixed(2)}</p>

                        <div className="prose prose-sm text-gray-600 mb-8">
                            <p>{product.description}</p>
                        </div>

                        {/* Size Selector Mock */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</button>
                            </div>
                            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                {['S', 'M', 'L', 'XL'].map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 transition-colors
                      ${selectedSize === size
                                                ? 'bg-black text-white border-black'
                                                : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="mb-8 flex items-center gap-4">
                            <h3 className="text-sm font-medium text-gray-900 mr-4">Quantity</h3>
                            <div className="flex items-center border border-gray-300 rounded-md">
                                <button
                                    onClick={decreaseQuantity}
                                    className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-l-md transition-colors"
                                >
                                    <FiMinus />
                                </button>
                                <span className="w-12 text-center font-medium text-gray-900">{quantity}</span>
                                <button
                                    onClick={increaseQuantity}
                                    className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-r-md transition-colors"
                                >
                                    <FiPlus />
                                </button>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4 mb-10">
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-black text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-lg"
                            >
                                <FiShoppingCart /> Add to Cart
                            </button>
                            <button className="px-6 py-4 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-red-500 transition-all flex items-center justify-center">
                                <FiHeart className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Extra Info */}
                        <div className="border-t border-gray-200 pt-8 space-y-4">
                            <div className="flex items-start">
                                <div className="font-semibold text-gray-900 w-32">Shipping:</div>
                                <div className="text-gray-600 text-sm">Free shipping on orders over $50. Delivers in 3-5 business days.</div>
                            </div>
                            <div className="flex items-start">
                                <div className="font-semibold text-gray-900 w-32">Returns:</div>
                                <div className="text-gray-600 text-sm">30 days return policy. See details in return policy page.</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Reviews Section Mock */}
                <section className="mt-24 border-t border-gray-200 pt-16">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Customer Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400 mr-4">
                                    {[...Array(5)].map((_, i) => <FiStar key={i} className="fill-current w-4 h-4" />)}
                                </div>
                                <span className="font-bold text-gray-900">Excellent Quality</span>
                            </div>
                            <p className="text-gray-600 mb-4">"This product exceeded my expectations. The material feels premium and the fit is perfect!"</p>
                            <p className="text-sm text-gray-400">- John D.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400 mr-4">
                                    {[...Array(4)].map((_, i) => <FiStar key={i} className="fill-current w-4 h-4" />)}
                                    <FiStar className="w-4 h-4 text-gray-300" />
                                </div>
                                <span className="font-bold text-gray-900">Very Good</span>
                            </div>
                            <p className="text-gray-600 mb-4">"Solid choice for the price. Would buy again. Arrived a day late though."</p>
                            <p className="text-sm text-gray-400">- Sarah M.</p>
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className="mt-24 border-t border-gray-200 pt-16">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">You May Also Like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {relatedProducts.map(p => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </div>
    );
};

export default ProductDetails;
