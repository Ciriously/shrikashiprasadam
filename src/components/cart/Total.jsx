import React from 'react';

const Total = () => {
    return (
        <div className="p-8 bg-white font-inter shadow-xl rounded-3xl">
            <h2 className="text-xl text-[#565656] font-semibold mb-4">Order Summary</h2>
            <dl className="grid grid-cols-2 gap-4">
                <dt className="font-medium text-[#727272]">Total</dt>
                <dd className="mb-2 text-black font-bold">$100.00</dd>

                <hr className="col-span-2 border border-[#F26414]" />

                <dt className="font-medium text-[#727272]">Shipping Charges</dt>
                <dd className="mb-2  text-black font-bold">$10.00</dd>

                <hr className="col-span-2 border border-[#F26414]" />

                <dt className="font-medium text-[#727272]">Grand Total</dt>
                <dd className=' text-black font-bold'>$110.00</dd>
            </dl>
            <div className="text-right">
                <button className="w-2/3 text-lg bg-[#F26414] bg-opacity-20 text-[#F26414] font-semibold py-2 rounded hover:bg-orange-200 focus:outline-none focus:bg-orange-300 mt-4">
                    Pay Now
                </button>
            </div>
        </div>
    );
};

export default Total;