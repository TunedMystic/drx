import { ADD_TO_CART, REMOVE_FROM_CART } from '../types';

const initialState = {
    itemsById: {},
    itemIds: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return addItemToCart(state, action.product);
        case REMOVE_FROM_CART:
            return removeItemFromCart(state, action.productId);
        default:
            return state;
    }
}

const addItemToCart = (state, product) => {
    const productId = product.id;
    let cartItem = undefined;

    if (productId in state.itemsById) {
        cartItem = {
            ...state.itemsById[productId],
            quantity: state.itemsById[productId].quantity + 1
        };
    } else {
        cartItem = { ...product, quantity: 1 };
    }

    return {
        ...state,
        itemsById: {
            ...state.itemsById,
            [productId]: cartItem
        },
        // Ref: https://github.com/andrewngu/sound-redux/blob/4d857b4bee061e2c90117a8ee5e59ce2769d4baf/client/src/reducers/playlists.js#L30
        itemIds: [...new Set([...state.itemIds, productId])]
    };
};

const removeItemFromCart = (state, productId) => {
    const itemIds = state.itemIds.filter(item => item !== productId);
    const { [productId]: value, ...itemsById } = state.itemsById;
    return {
        ...state,
        itemsById,
        itemIds
    };
};
