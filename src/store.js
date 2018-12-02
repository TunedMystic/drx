import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import searchReducer from './reducers/search';

const allReducers = combineReducers({
    search: searchReducer,
});

const store = state => createStore(allReducers, state, composeWithDevTools(applyMiddleware(thunk)))

export default store;
