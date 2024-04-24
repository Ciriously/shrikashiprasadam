import React from 'react';

import bg1 from "../assets/bg/bg-r-1.png";
import bg2 from "../assets/bg/bg-r-1.png";

import Navbar from '../Shared/Navbar';
import Banner from '../Shared/Banner';
import Carousel from '../Shared/carousel';
import ProductCards from '../components/ui/ProductCards'; // Import the ProductCards component
import homeSvg from "../assets/Hero/home.svg";
import BannerCards from '../components/Home/BannerCards';
import BestSeller from '../components/Home/BestSeller';
import NewArrivals from '../components/Home/NewArrivals';
import Categories from '../components/Home/Categories';
import DailyDeals from '../components/Home/DailyDeals';
import Hero from '../Shared/Hero';

const Home = () => {


    return (
        <div className="relative">

            <div className="relative">
                <Carousel />
                <div className="absolute z-10 top-full w-full hidden transform -translate-y-1/4 md:-translate-y-1/2 lg:block">
                    <BannerCards />
                </div>
            </div>
            <div className="w-4/5 mx-auto mt-20 lg:mt-[20rem]">
                <BestSeller />

            </div>
            <div className="w-4/5 mx-auto mb-44 mt-20 lg:mt-[14rem]">

                <NewArrivals />

            </div>
            <Categories />
            <Hero />
            <div className="w-4/5 mx-auto ">

                <DailyDeals />
            </div>

        </div>
    );
};


export default Home;
