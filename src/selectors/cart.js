import { createSelector } from 'reselect';

export const getCart = (state) => state.cart;

export const getCartQuantity = createSelector(
    state => state.cart.itemIds,
    state => state.cart.itemsById,
    (itemIds, itemsById) => (
        itemIds.map(id => itemsById[id].quantity).reduce((a, b) => a + b, 0)
    )
)
