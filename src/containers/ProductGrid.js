import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { fetchProducts, removeProduct } from '../actions/products';

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
            <div>
                <h3>Product Grid</h3>
                <ul>                
                    {
                        productIds.map(id => (
                            <li key={id}>{productsById[id].name}</li>
                        ))
                    }
                </ul>
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
