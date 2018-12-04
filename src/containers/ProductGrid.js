import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { fetchProducts, removeProduct } from '../actions/products';
import { addToCart } from '../actions/cart';
import Product from '../components/Product';

class ProductGrid extends Component {
    componentDidMount() {
        this.initialFetch();
    }

    initialFetch = () => {
        if (isEmpty(this.props.products.productsById)) {
            this.props.fetchProducts();
        }
    }

    render() {
        const { productsById, productIds } = this.props.products;
        return (
            <div className='product-grid' data-testid='product-grid'>
                {
                    productIds.map(id => (
                        <Product
                            key={id}
                            addToCart={addToCart}
                            product={productsById[id]}
                        />
                    ))
                }
                <style jsx>{`
                    .product-grid {
                        width: 85vw;
                    }
                `}</style>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    products: state.products,
    ...ownProps
});

const mapActionsToProps = {
    fetchProducts,
    removeProduct
};

export default connect(mapStateToProps, mapActionsToProps)(ProductGrid);
