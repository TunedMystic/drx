import { ADD_TO_CART, REMOVE_FROM_CART } from '../types';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    product
});

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    productId
});
