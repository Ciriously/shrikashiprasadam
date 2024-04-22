import React from 'react'

import ProductCards from '../ui/ProductCards';

import bg1 from "../../assets/bg/bg-l-2.png";
import bg2 from "../../assets/bg/bg-r-2.png";



// Sample product data
const products = [
    {
        imageUrl: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        brand: "Brand A",
        productName: "Product A",
        price: 149,
        discountedPrice: 199
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        brand: "Brand A",
        productName: "Product A",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        brand: "Brand A",
        productName: "Product A",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        brand: "Brand A",
        productName: "Product A",
        price: 149,
        discountedPrice: 199
    },
];
const NewArrivals = () => {
    return (
        <div className="relative">
            {/* <img src={bg1} className="absolute bottom-[25rem] -left-[20rem]" alt="Background" /> */}
            {/* <img src={bg2} className="absolute bottom-[25rem] -right-[18rem]" alt="Background" /> */}

            <ProductCards products={products} header="New Arrivals" />
        </div>
    )
}

export default NewArrivals