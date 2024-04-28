import React from 'react';

const Cart = () => {
    const cartItems = [
        { id: 1, name: 'Product A', price: 100 },
        { id: 2, name: 'Product B', price: 200 },
        { id: 3, name: 'Product C', price: 300 },
    ];

    const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

    const handleCheckout = () => {
        alert('Proceeding to checkout...');
    };

    return (
        <div>
            <h1>Shopping Cart</h1>

            {cartItems.map(item => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>Price: ${item.price}</p>
                </div>
            ))}

            <h2>Subtotal: ${subtotal}</h2>

            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default Cart;