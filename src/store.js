import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import searchReducer from './reducers/search';

export default function createReduxStore(state) {
    const reducers = {
        search: searchReducer,
    };

    return createStore(
        combineReducers(reducers),
        state,
        composeWithDevTools(applyMiddleware(thunk))
    );
}
