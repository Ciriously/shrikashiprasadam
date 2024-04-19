import React from 'react';

const Banner = () => {
    return (
        <div className="flex justify-center text-[#F26414] font-inter font-bold  h-20 items-center mx-auto w-1/4">
            <div className="w-4/5 h-10 text-lg text-center border-r border-[#F26414] flex items-center justify-center">Home</div>
            <div className="w-4/5 h-10 text-lg text-center border-r border-[#F26414] flex items-center justify-center">Idols</div>
            <div className="w-4/5 h-10 text-lg text-center border-r border-[#F26414] flex items-center justify-center">Mala</div>
            <div className="w-4/5 h-10 text-lg text-center border-r border-[#F26414] flex items-center justify-center">Vastram</div>
            <div className="w-4/5 pl-4 h-10 text-lg text-center flex items-center justify-center">Handicrafts</div>
        </div>
    );
};

export default Banner;