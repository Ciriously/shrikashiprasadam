import React from 'react'
import bg1 from "../../assets/bg/bg-l-1.png";
import bg2 from "../../assets/bg/bg-r-1.png";

import ProductCards from '../ui/ProductCards';

// Sample product data
const products = [
    {
        imageUrl: "https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        brand: "Brand A",
        productName: "Product A",
        price: 149,
        discountedPrice: 199
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        brand: "Brand A",
        productName: "Product A",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        brand: "Brand A",
        productName: "Product A",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        brand: "Brand A",
        productName: "Product A",
        price: 149,
        discountedPrice: 199
    },
];
const BestSeller = () => {
    return (
        <div className="relative">
            <img src={bg1} className="absolute bottom-[25rem] -left-[20rem]" alt="Background" />
            <img src={bg2} className="absolute bottom-[22rem] w-60 -right-[18rem]" alt="Background" />

            <ProductCards products={products} header="Our Bestseller" />
        </div>
    )
}

export default BestSeller