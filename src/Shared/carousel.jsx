import React, { useState, useEffect } from 'react';

// import Bg1 from "../assets/Hero/home.svg";
// import Bg2 from "../assets/Hero/secondImage.svg";
// import Bg3 from "../assets/Hero/thirdImage.svg";

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Calculate the next slide index, wrapping around to the first slide if necessary
            setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
        }, 2000); // Rotate every 2 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    // Define an array of background images
    const images = [
        "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/consecrated-web-2024.avif",
        "https://staticin.sadhguru.org/in/pub/media/om/homeslider/w/e/web_11_.jpg",
        "https://staticin.sadhguru.org/in/pub/media/om/homeslider/s/a/sanjeevini-web-2024.jpg"
    ];

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden  md:h-[30rem]">
                {/* Render each slide */}
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${currentSlide === index ? '' : 'hidden'
                            }`}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full"
                        />
                    </div>
                ))}
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {/* Render indicators for each slide */}
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-transparent' : 'bg-transparent'}`}
                        aria-current={currentSlide === index}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-red-300"
                data-carousel-prev=""
                onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3)} // Wrap around to the last slide
            >
                {/* Previous arrow */}
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next=""
                onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % 3)} // Wrap around to the first slide
            >
                {/* Next arrow */}
            </button>
        </div>
    );
};

export default Carousel;
