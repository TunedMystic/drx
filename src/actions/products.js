import { normalize } from 'normalizr';

import { MERGE_PRODUCTS, REMOVE_PRODUCT } from '../types';
import api from '../utils/api';
import { productSchema } from '../schemas';

const mergeProducts = (data) => ({
    type: MERGE_PRODUCTS,
    products: data.entities.products
});

export const fetchProducts = () => dispatch => (
    api
    .products
    .fetchAll()
    .then(data => {
        dispatch(mergeProducts(
            normalize(data, [productSchema])
        ))
    })
);

export const removeProduct = (productId) => ({
    type: REMOVE_PRODUCT,
    productId
});
