import { MERGE_PRODUCTS, REMOVE_PRODUCT } from '../types';
import reducer from './products';

describe('Reducer: Products', () => {
    const initialState = { productsById: {}, productIds: [] };

    const productAId = 'xb3v';
    const productA = {
        [productAId]: {
            id: productAId,
            name: 'Book',
            price: 3.99
        }
    };

    const productBId = 'mr7d';
    const productB = {
        [productBId]: {
            id: productBId,
            name: 'Pen',
            price: 4.52
        }
    };

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should add product to initial state with MERGE_PRODUCTS', () => {
        const expectedState = {
            productsById: { ...productA },
            productIds: [productAId]
        };

        expect(
            reducer(
                initialState,
                {
                    type: MERGE_PRODUCTS,
                    products: productA
                }
            )
        ).toEqual(expectedState);
    });

    it('should add product to existing state with MERGE_PRODUCTS', () => {
        initialState.productsById = { ...productA };
        initialState.productIds = [productAId];

        const expectedState = {
            productsById: { ...productA, ...productB },
            productIds: [productAId, productBId]
        };

        expect(
            reducer(
                initialState,
                {
                    type: MERGE_PRODUCTS,
                    products: productB
                }
            )
        ).toEqual(expectedState);
    });

    it('should remove product from state with REMOVE_PRODUCT', () => {
        initialState.productsById = { ...productA, ...productB };
        initialState.productIds = [productAId, productBId];

        const expectedState = {
            productsById: { ...productA },
            productIds: [productAId]
        };

        expect(
            reducer(
                initialState,
                {
                    type: REMOVE_PRODUCT,
                    productId: productBId
                }
            )
        ).toEqual(expectedState);
    });

});
