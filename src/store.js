import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import cartReducer from './reducers/cart';
import productsReducer from './reducers/products';

export default function createReduxStore(state) {
    const reducers = {
        cart: cartReducer,
        products: productsReducer
    };

    return createStore(
        combineReducers(reducers),
        state,
        composeWithDevTools(applyMiddleware(thunk))
    );
}
