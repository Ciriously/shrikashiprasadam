import React from 'react'

import ProductCards from '../../ui/ProductCards';


const products = [
    {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/handcrft.jpeg",
        brand: "Brand A",
        productName: "Handicrafts",
        price: 149,
        discountedPrice: 199
    },
    {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/handcrft.jpeg",
        brand: "Brand A",
        productName: "Handicrafts",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/handcrft.jpeg",
        brand: "Brand A",
        productName: "Handicrafts",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/handcrft.jpeg",
        brand: "Brand A",
        productName: "Handicrafts",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/handcrft.jpeg",
        brand: "Brand A",
        productName: "Handicrafts",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/handcrft.jpeg",
        brand: "Brand A",
        productName: "Handicrafts",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/handcrft.jpeg",
        brand: "Brand A",
        productName: "Handicrafts",
        price: 149,
        discountedPrice: 199
    },
];
const Handicraft = () => {
    return (
        <div className="relative">

            <ProductCards products={products} />
        </div>
    )
}
export default Handicraft