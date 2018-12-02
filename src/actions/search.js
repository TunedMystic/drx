export const CLEAR_SEARCH = 'search:clearSearch';
export const UPDATE_SEARCH = 'search:updateSearch';

export const updateSearch = (q) => {
    return {
        type: UPDATE_SEARCH,
        q
    };
};

export const clearSearch = () => {
    return { type: CLEAR_SEARCH };
};
