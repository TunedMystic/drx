export default ({ item, removeFromCart }) => (
    <div className='cart-item' data-testid='cart-item'>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <p>qty: {item.quantity}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove from cart</button>
        <style jsx>{`
            .cart-item {
                display: inline-block;
                padding: 0.5rem;
                width: 190px;
                margin: 10px;

                border: 1px solid blue;
            }
        `}</style>
    </div>
);
