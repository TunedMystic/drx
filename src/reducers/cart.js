import { ADD_TO_CART, REMOVE_FROM_CART } from '../types';

const initialState = {
    itemsById: {},
    itemIds: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return addItemToCart(state, product);
        case REMOVE_FROM_CART:
            return removeItemFromCart(state, productId);
        default:
            return state;
    }
}

const addItemToCart = (state, product) => {
    return state;
};

const removeItemFromCart = (productId) => {
    return state;
};
