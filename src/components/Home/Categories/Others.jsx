import React from 'react'

import ProductCards from '../../ui/ProductCards';

// Sample product data
const products = [
    {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/fbctgva_2024-04-16T04_09_41.002Z_output_2.jpeg",
        brand: "Brand A",
        productName: "Others",
        price: 149,
        discountedPrice: 199
    },
    {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg",
        brand: "Brand A",
        productName: "Others",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/55_Diamond_Cut_Sphatik_Mala_27072019160633.jpeg",
        brand: "Brand A",
        productName: "Others",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/img-Photoroom.jpg",
        brand: "Brand A",
        productName: "Others",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/img-Photoroom.jpg",
        brand: "Brand A",
        productName: "Others",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/img-Photoroom.jpg",
        brand: "Brand A",
        productName: "Others",
        price: 149,
        discountedPrice: 199
    },
];
const Others = () => {
    return (
        <div className="relative">

            <ProductCards products={products} />
        </div>
    )
}


export default Others