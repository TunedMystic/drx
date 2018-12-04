import { ADD_TO_CART, REMOVE_FROM_CART } from '../types';
import reducer from '../reducers/cart';

describe('Reducer: Cart', () => {
    const initialState = { itemsById: {}, itemIds: [] };

    const productAId = 'xb3v';
    const productA = {
        id: productAId,
        name: 'Book',
        price: 3.99
    };

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should add product to cart with ADD_TO_CART', () => {
        const expectedState = {
            itemsById: {
                [productAId]: {
                    ...productA,
                    quantity: 1
                }
            },
            itemIds: [productAId]
        };

        expect(
            reducer(
                initialState,
                {
                    type: ADD_TO_CART,
                    product: productA
                }
            )
        ).toEqual(expectedState);
    });

    it('should increment quantity for existing cart item with ADD_TO_CART', () => {
        initialState.itemsById = {
            [productAId]: {
                ...productA,
                quantity: 1
            }
        };
        initialState.itemIds = [productAId];

        const expectedState = {
            itemsById: {
                [productAId]: {
                    ...productA,
                    quantity: 2
                }
            },
            itemIds: [productAId]
        };

        expect(
            reducer(
                initialState,
                {
                    type: ADD_TO_CART,
                    product: productA
                }
            )
        ).toEqual(expectedState);
    });

    it('should remove cart item with REMOVE_FROM_CART', () => {
        initialState.itemsById = {
            [productAId]: {
                ...productA,
                quantity: 1
            }
        };
        initialState.itemIds = [productAId];

        const expectedState = { itemsById: {}, itemIds: [] };

        expect(
            reducer(
                initialState,
                {
                    type: REMOVE_FROM_CART,
                    productId: productAId
                }
            )
        ).toEqual(expectedState);
    });

});
