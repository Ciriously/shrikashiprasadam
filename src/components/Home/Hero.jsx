import React from 'react';
import HeroSvg from "../../assets/Hero/home.svg";

const Hero = () => {
    return (
        <>
            <div className="bg-gray-50 flex items-center">
                <section
                    className="w-full  bg-cover bg-center py-44 relative"
                    style={{ backgroundImage: `url(${HeroSvg})` }}
                >
                </section>
            </div>
        </>
    );
};

export default Hero;
