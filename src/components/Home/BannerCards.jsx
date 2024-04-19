import React from 'react'
import Brassitems from "../../assets/Hero/Brassitems.svg"
import Handicraft from "../../assets/Hero/Handicraft.svg"
import Paintings from "../../assets/Hero/paintings.svg"
import Rudra from "../../assets/Hero/Rudraksh.svg"

const BannerCards = () => {
    return (
        <div>
            <>

                {/* ✅ Grid Section - Starts Here 👇 */}
                <section
                    id="Projects"
                    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-24 gap-x-14 mt-10 mb-5"
                >
                    {/*   ✅ Product card 1 - Starts Here 👇 */}
                    <div className="relative w-[294px] h-[364px] rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                        style={{ backgroundImage: `url(${Brassitems})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <a href="#" className="h-full w-full flex items-end">
                            <div className="px-4 py-3 w-full ">
                                <div className="flex items-center justify-center">
                                    <p className="text-lg font-semibold text-white cursor-auto my-3">
                                        Brass Items
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/*   🛑 Product card 1 - Ends Here  */}
                    {/*   ✅ Product card 2 - Starts Here 👇 */}
                    <div className="relative w-[294px] h-[364px] rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                        style={{ backgroundImage: `url(${Rudra})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <a href="#" className="h-full w-full flex items-end">
                            <div className="px-4 py-3 w-full ">
                                <div className="flex items-center justify-center">
                                    <p className="text-lg font-semibold text-white cursor-auto my-3">
                                        Brass Items
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/*   🛑 Product card 2- Ends Here  */}
                    {/*   ✅ Product card 3 - Starts Here 👇 */}
                    <div className="relative w-[294px] h-[364px] rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                        style={{ backgroundImage: `url(${Handicraft})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <a href="#" className="h-full w-full flex items-end">
                            <div className="px-4 py-3 w-full ">
                                <div className="flex items-center justify-center">
                                    <p className="text-lg font-semibold text-white cursor-auto my-3">
                                        Brass Items
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/*   🛑 Product card 3 - Ends Here  */}
                    {/*   ✅ Product card 4 - Starts Here 👇 */}
                    <div className="relative w-[294px] h-[364px] rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                        style={{ backgroundImage: `url(${Paintings})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <a href="#" className="h-full w-full flex items-end">
                            <div className="px-4 py-3 w-full ">
                                <div className="flex items-center justify-center">
                                    <p className="text-lg font-semibold text-white cursor-auto my-3">
                                        Brass Items
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/*   🛑 Product card 4 - Ends Here  */}


                </section>

            </>

        </div>
    )
}

export default BannerCards