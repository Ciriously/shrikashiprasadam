import React from 'react'
import ShoppingCart from '../components/cart/ShoppingCart'
import Total from '../components/cart/Total'

const Cart = () => {
    return (
        <div className="flex w-4/5 mt-8">
            {/* <div className="w-4/5">
                <ShoppingCart />
            </div> */}
            <div className="w-1/4">
                <Total />
            </div>
        </div>
    )
}

export default Cart