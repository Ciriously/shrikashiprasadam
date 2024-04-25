import React from 'react';

const ProductCards = ({ products, header, seeAllButton, addToCartButton }) => {
    return (
        <div>
            <div className="flex mx-6 justify-between font-inter items-center mb-2">
                <h2 className="text-3xl font-bold">{header}</h2>
                {seeAllButton && (
                    <button className="text-[#F26414] font-poppins text-xl underline hover:text-orange-700 font-regular">
                        {seeAllButton}
                    </button>
                )}
            </div>

            <section className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4 mt-10 mb-5">
                {products.map((product, index) => (
                    <div key={index} className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <a href="#" className="flex flex-col h-full">
                            <img
                                src={product.imageUrl}
                                alt={product.productName}
                                className="h-60 sm:h-72 w-full object-cover rounded-t-xl"
                            />
                            <div className="px-4 py-3 flex flex-col justify-between flex-grow">
                                <div>
                                    <p className="text-lg font-bold font-inter text-gray-400 truncate capitalize">
                                        {product.productName}
                                    </p>
                                    <div className="flex items-center mt-2">
                                        <p className="text-xl font-semibold font-inter text-black cursor-auto mr-2">
                                            ${product.price}
                                        </p>
                                        {product.discountedPrice && (
                                            <del className='text-gray-400'>
                                                ${product.discountedPrice}
                                            </del>
                                        )}
                                        {/* Add to Cart Button */}
                                        {addToCartButton && (
                                            <button className="bg-[#F26414] text-md font-inter w-max font-medium text-white px-1 py-2 rounded-lg ml-auto sm:text-lg md:px-1">
                                                {addToCartButton}
                                            </button>
                                        )}
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
