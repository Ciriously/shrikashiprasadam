import React from 'react';
import Brassitems from "../../assets/Hero/Brassitems.svg";
import Handicraft from "../../assets/Hero/Handicraft.svg";
import Paintings from "../../assets/Hero/paintings.svg";
import Rudra from "../../assets/Hero/Rudraksh.svg";

const BannerCards = () => {
    return (
        <div className="flex justify-center">
            <section
                id="Projects"
                className="w-max items-center font-inknut  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center justify-center gap-y-8 gap-x-8 mt-10 mb-5"
            >
                <div className="relative w-[300px] h-[380px]  rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                    style={{ backgroundImage: `url(${Brassitems})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <a href="#" className="h-full w-full flex items-end">
                        <div className="px-4 py-3 w-full">
                            <div className="flex items-center justify-center">
                                <p className="text-3xl   font-bold text-white cursor-auto my-3">
                                    Brass Items
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="relative w-[300px] h-[380px] rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                    style={{ backgroundImage: `url(${Rudra})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <a href="#" className="h-full w-full flex items-end">
                        <div className="px-4 py-3 w-full">
                            <div className="flex items-center justify-center">
                                <p className="text-3xl font-bold text-white cursor-auto my-3">
                                    Rudra
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="relative w-[300px] h-[380px] rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                    style={{ backgroundImage: `url(${Handicraft})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <a href="#" className="h-full w-full flex items-end">
                        <div className="px-4 py-3 w-full">
                            <div className="flex items-center justify-center">
                                <p className="text-3xl font-bold text-white cursor-auto my-3">
                                    Handicraft
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="relative w-[300px] h-[380px] rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                    style={{ backgroundImage: `url(${Paintings})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <a href="#" className="h-full w-full flex items-end">
                        <div className="px-4 py-3 w-full">
                            <div className="flex items-center justify-center">
                                <p className="text-3xl font-bold text-white cursor-auto my-3">
                                    Paintings
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default BannerCards;
