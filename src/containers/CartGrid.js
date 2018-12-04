import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeFromCart } from '../actions/cart';
import { getCart, getCartQuantity } from '../selectors/cart';
import CartItem from '../components/CartItem';

class CartGrid extends Component {
    render() {
        const { itemsById, itemIds } = this.props.cart;
        const { cartQuantity } = this.props;
        return (
            <div className='cart-grid' data-testid='cart-grid'>
                <h3 className='cart-quantity' data-testid='cart-quantity'>Cart{cartQuantity > 0 ? `: ${cartQuantity} items` : null}</h3>
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
    cart: getCart(state),
    cartQuantity: getCartQuantity(state),
    ...ownProps
});

const mapActionsToProps = {
    removeFromCart
};

export default connect(mapStateToProps, mapActionsToProps)(CartGrid);
