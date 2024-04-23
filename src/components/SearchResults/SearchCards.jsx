import React from 'react'

import ProductCards from '../../components/ui/ProductCards';

// Sample product data
const products = [
    {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png",
        brand: "Brand A",
        productName: "Idols",
        price: 149,
        discountedPrice: 199
    },
    {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png",
        brand: "Brand A",
        productName: "Idols",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png",
        brand: "Brand A",
        productName: "Idols",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png",
        brand: "Brand A",
        productName: "Idols",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png",
        brand: "Brand A",
        productName: "Idols",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png",
        brand: "Brand A",
        productName: "Idols",
        price: 149,
        discountedPrice: 199
    },
];
const SearchCards = () => {
    return (
        <div className="relative">

            <ProductCards products={products} />
        </div>
    )
}


export default SearchCards