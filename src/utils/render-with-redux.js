import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';

import createReduxStore from '../store';

// Render component with redux store.
// Ref: https://github.com/kentcdodds/react-testing-library/blob/master/examples/__tests__/react-redux.js#L69
export default function renderWithRedux(
    ui,
    { initialState, store = createReduxStore(initialState) } = {},
) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        // adding `store` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        store,
    }
}
