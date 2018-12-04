import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { addToCart } from '../actions/cart';
import { fetchProducts } from '../actions/products';
import { getProducts } from '../selectors/products';
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
                            addToCart={this.props.addToCart}
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
    products: getProducts(state),
    ...ownProps
});

const mapActionsToProps = {
    fetchProducts,
    addToCart
};

export default connect(mapStateToProps, mapActionsToProps)(ProductGrid);
