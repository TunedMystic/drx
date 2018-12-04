import PropTypes from 'prop-types';

const propTypes = {
    product: PropTypes.shape({}).isRequired,
    addToCart: PropTypes.func.isRequired
};

const Product = ({ product, addToCart }) => (
    <div className='product' data-testid='product'>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button
            className='add-to-cart'
            data-testid='add-to-cart'
            onClick={() => addToCart(product)}
        >
            Add to cart
        </button>
        <style jsx>{`
            .product {
                display: inline-block;
                padding: 0.5rem;
                width: 190px;
                margin: 10px;

                border: 1px solid black;
            }
        `}</style>
    </div>
)

Product.propTypes = propTypes;

export default Product;
