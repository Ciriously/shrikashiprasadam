import React from 'react';

const ProductCards = ({ products, header }) => {
    return (
        <div>
            {/* Header Section - Starts Here */}
            <div className="flex  mx-auto justify-between font-inder items-center mb-2">
                <h2 className="text-3xl font-bold">{header}</h2>
                <button className="text-[#F26414] font-poppins text-xl  underline hover:text-orange-700 font-regular">See All</button>
            </div>

            <section className="w-fit mx-auto grid grid-cols-1 h-[345px]  lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                {products.map((product, index) => (
                    <div key={index} className="w-[300px]  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <a href="#">
                            <img
                                src={product.imageUrl}
                                alt={product.productName}
                                className="h-[300px] w-full object-cover rounded-t-xl"
                            />
                            <div className="px-4 py-3 w-72">
                                {/* <span className="text-gray-400 mr-3 font-inter uppercase text-xs">{product.brand}</span> */}
                                <p className="text-lg font-bold font-inter text-gray-400 truncate block capitalize">
                                    {product.productName}
                                </p>
                                <div className="flex items-center">
                                    <p className="text-xl font-[700] font-inter text-black cursor-auto my-3">
                                        ${product.price}
                                    </p>
                                    <del className='text-gray-400'>
                                        <p className="text-sm font-inter text-gray-400 font-bold cursor-auto ml-2">${product.discountedPrice}</p>
                                    </del>
                                    <div className="ml-auto">
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ProductCards;
