import { schema } from 'normalizr';

export const productSchema = new schema.Entity('products');
export const productListSchema = [productSchema];
