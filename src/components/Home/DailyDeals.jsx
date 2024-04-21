import React from 'react'
import TabsSwitcher from '../ui/TabsSwitcher'

const DailyDeals = () => {
    return (
        <div>
            <h2 className="text-4xl mt-8 font-semibold font-inter text-center">Deals of<span className='text-[#F26414]'> the Day</span></h2>
            <p className="text-xl leading-relaxed mt-4 font-inter text-center max-w-4xl mx-auto">
                Discover unbeatable savings every day with our Deals of the Day! From exclusive discounts to limited-time offers, seize the opportunity to enjoy top-notch products and services at incredible prices.
                Hurry, these deals won't last long!
            </p>
            <TabsSwitcher />
        </div>
    )
}

export default DailyDeals