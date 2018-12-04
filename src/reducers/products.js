import { MERGE_PRODUCTS, REMOVE_PRODUCT } from '../types';

const initialState = {
    productsById: {},
    productIds: [],
    // isLoading: false 
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case MERGE_PRODUCTS:
            return mergeProducts(state, action.data.entities.products);
        case REMOVE_PRODUCT:
            return removeProduct(state, action.productId);
        default:
            return state;
    };
};

const mergeProducts = (state, products) => {
    return {
        ...state,
        productsById: { ...state.productsById, ...products },
        productIds: [ ...state.productIds, ...Object.keys(products) ]
    };
}

const removeProduct = (state, productId) => {
    const productIds = state.productIds.filter(item => item !== productId);
    // Use destructuring assignment to remove item from obj.
    // Ref: https://stackoverflow.com/a/47227198/9545946
    const { [productId]: value, ...productsById } = state.productsById;
    return {
        ...state,
        productsById,
        productIds
    };
};
