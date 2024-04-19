import React from 'react';

const Hero = ({ bgImage }) => {
    return (
        <div className="relative bg-contain  bg-no-repeat h-[20rem] md:h-[40rem] xl:h-[40rem]" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="absolute inset-0 "></div>
        </div>
    );
};

export default Hero;