export default ({ product, addToCart }) => (
    <div className='product' data-testid='product'>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
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
