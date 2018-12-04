import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeFromCart } from '../actions/cart';
import CartItem from '../components/CartItem';

class CartGrid extends Component {
    render() {
        const { itemsById, itemIds } = this.props.cart;
        const { cartItems } = this.props;
        return (
            <div className='cart-grid' data-testid='cart-grid'>
                <h3>Cart{cartItems > 0 ? `: ${cartItems} items` : null}</h3>
                {
                    itemIds.map(id => (
                        <CartItem
                            key={id}
                            removeFromCart={this.props.removeFromCart}
                            item={itemsById[id]}
                        />
                    ))
                }
                <style jsx>{`
                    .cart-grid {
                        width: 85vw;
                    }
                `}</style>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    cart: state.cart,
    cartItems: state.cart.itemIds.map(id => state.cart.itemsById[id].quantity).reduce((a, b) => a + b, 0),
    ...ownProps
});

const mapActionsToProps = {
    removeFromCart
};

export default connect(mapStateToProps, mapActionsToProps)(CartGrid);
