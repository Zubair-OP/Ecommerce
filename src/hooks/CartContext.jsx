import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem('ecom_cart');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error("Failed to parse cart JSON:", error);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('ecom_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity = 1, size = null) => {
        setCartItems(prev => {
            const existingItemIndex = prev.findIndex(
                item => item.id === product.id && item.size === size
            );

            if (existingItemIndex !== -1) {
                const newCart = [...prev];
                newCart[existingItemIndex].quantity += quantity;
                return newCart;
            }

            return [...prev, { ...product, quantity, size }];
        });
    };

    const updateQuantity = (id, size, quantity) => {
        if (quantity < 1) return;
        setCartItems(prev =>
            prev.map(item =>
                (item.id === id && item.size === size) ? { ...item, quantity } : item
            )
        );
    };

    const removeFromCart = (id, size) => {
        setCartItems(prev => prev.filter(item => !(item.id === id && item.size === size)));
    };

    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, cartTotal, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};
