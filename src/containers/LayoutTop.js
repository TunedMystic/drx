import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import { getCartQuantity } from '../selectors/cart';
import Header from '../components/Header';

const LayoutTop = ({ cartQuantity }) => (
    <div>
        <Header />
        <Link href='/cart'>
            <a data-testid='link-cart'>Cart {cartQuantity > 0 ? `(${cartQuantity})` : null}</a>
        </Link>
        <style jsx>{`
            display: flex;
        `}</style>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    cartQuantity: getCartQuantity(state),
    ...ownProps
});

export default connect(mapStateToProps, {})(LayoutTop);
