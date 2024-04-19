import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[#FE9B64] bg-opacity-50 px-4 md:px-96 p-4">
            <div className="flex flex-col md:flex-row px-4 md:px-44 justify-between">
                <div className="w-full md:w-1/5  md:border-r border-[#F26414] text-[#F26414] font-bold mb-4 md:mb-0">
                    <div className="text-center mb-2">Home</div>
                </div>
                <div className="w-full md:w-1/5  md:border-r border-[#F26414] text-[#F26414] font-bold mb-4 md:mb-0">
                    <div className="text-center mb-2">Idols</div>
                </div>
                <div className="w-full md:w-1/5  md:border-r border-[#F26414] text-[#F26414] font-bold mb-4 md:mb-0">
                    <div className="text-center mb-2">Mala</div>
                </div>
                <div className="w-full md:w-1/5  md:border-r border-[#F26414] text-[#F26414] font-bold mb-4 md:mb-0">
                    <div className="text-center mb-2">Vastram</div>
                </div>
                <div className="w-full md:w-1/5 text-[#F26414] font-bold">
                    <div className="text-center mb-2">Handicrafts</div>
                </div>
            </div>
        </div>
    );
};

export default Banner;