import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import Header from '../components/Header';

const LayoutTop = (props) => (
    <div>
        <Header />
        <Link href='/cart'>
            <a data-testid='link-cart'>Cart {props.cartItems > 0 ? `(${props.cartItems})` : null}</a>
        </Link>
        <style jsx>{`
            display: flex;
        `}</style>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: state.cart.itemIds.map(id => state.cart.itemsById[id].quantity).reduce((a, b) => a + b, 0)
});

export default connect(mapStateToProps, {})(LayoutTop);
