import React from 'react'

import ProductCards from '../../ui/ProductCards';

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
    {
        imageUrl: "https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        brand: "Brand A",
        productName: "Product A",
        price: 149,
        discountedPrice: 199
    },
];
const Idols = () => {
    return (
        <div className="relative">

            <ProductCards products={products} />
        </div>
    )
}

export default Idols