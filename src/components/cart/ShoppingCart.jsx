import React, { useState } from 'react';

const ShoppingCart = () => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const removeItem = () => {
        // Add your remove item logic here
        console.log('Item removed');
    };

    return (
        <div className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

            <div className="flex items-start border border-gray-300 p-4 rounded">
                <img
                    src="https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Product"
                    className="w-1/3 h-auto object-cover rounded mr-4"
                />

                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Divine Temples Heavy Loud Blowing Shankh</h3>

                    <div className="flex items-start mt-2">
                        <span className="mr-2">Quantity:</span>
                        <div className="flex bg-[#F26414] bg-opacity-20 w-1/4 items-center mr-4">
                            <button
                                className="text-gray-500  focus:outline-none"
                                onClick={decrementQuantity}
                            >
                                -
                            </button>
                            <span className="mx-2">{quantity}</span>
                            <button
                                className="text-gray-500 focus:outline-none"
                                onClick={incrementQuantity}
                            >
                                +
                            </button>
                        </div>
                        <div className="flex items-start">
                            <button className="text-red-500" onClick={removeItem}>Remove Item</button>
                            <img src="remove-icon.svg" alt="Remove" className="ml-2 w-4 h-4" />
                        </div>
                    </div>

                    <div className="mt-2">
                        <span className="font-semibold">Price:</span> $100.00
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
