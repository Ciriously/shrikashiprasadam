import React from 'react'

import ProductCards from '../ui/ProductCards';

import bg1 from "../../assets/bg/bg-l-2.png";
import bg2 from "../../assets/bg/bg-r-2.png";



// Sample product data
const products = [
    {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg",
        brand: "Brand A",
        productName: "9 Mukhi Rudraksha",
        price: 149,
        discountedPrice: 199
    },
    {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/3.png",
        brand: "Divine Temples Heavy",
        productName: "Product A",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png",
        brand: "Brand A",
        productName: "Ganesh Ji Idol brass metal",
        price: 149,
        discountedPrice: 199
    }, {
        imageUrl: "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/DSC05857copy_1_900x.jpg",
        brand: "Brand A",
        productName: "Rudraksha malas",
        price: 149,
        discountedPrice: 199
    },
];
const NewArrivals = () => {
    return (
        <div className="relative">
            {/* <img src={bg1} className="absolute bottom-[25rem] -left-[20rem]" alt="Background" /> */}
            {/* <img src={bg2} className="absolute bottom-[25rem] -right-[18rem]" alt="Background" /> */}

            <ProductCards products={products} header="New Arrivals" seeAllButton="See All" />
        </div>
    )
}

export default NewArrivals