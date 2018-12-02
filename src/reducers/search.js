import { CLEAR_SEARCH, UPDATE_SEARCH } from '../actions/search';

const initialState = {
    q: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH:
            return { ...state, q: action.q };
        case CLEAR_SEARCH:
            return initialState;
        default:
            return initialState;
    };
};

export default reducer;
