import React, { useState } from 'react';
import logo from "../assets/shared/logo.svg";
import Bg from "../assets/shared/bg.svg"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };
    return (
        <>
            <nav
                className="relative px-4 py-4 bg-[#FFF8E9] flex justify-between items-center"
                style={{ backgroundImage: `url(${Bg})` }}
            >
                <a href="#">
                    <img src={logo} alt="Logo" className="h-16 w-auto" />
                </a>
                <div className="lg:hidden">
                    <button
                        className="navbar-burger flex items-center text-[#F26414] p-1"
                        id="navbar_burger"
                        onClick={toggleMobileMenu}
                    >
                        <svg
                            className="block h-6 w-6 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:space-x-6">
                    <li>
                        <div className="relative mx-auto text-gray-600">
                            <input
                                className="border border-[#F26414] bg-[#FFF8E9] rounded-3xl placeholder-current h-12 w-[50rem] px-8 pl-14  text-base focus:outline-none"
                                type="search"
                                name="search"
                                placeholder="Search for names......"
                            />
                            <button type="submit" className="absolute left-0 top-0 mt-3 ml-4">
                                <svg
                                    className="text-[#F26414] h-6 w-6 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 56.966 56.966"
                                    style={{ enableBackground: "new 0 0 56.966 56.966" }}
                                    xmlSpace="preserve"
                                    height="512px"
                                >
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                        </div>
                    </li>
                </ul>



                <div className="hidden lg:flex">
                    <div className="flex  pr-44 space-x-8">
                        <div className="rounded-full bg-[#FE9B64] bg-opacity-50 w-16 h-16 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-8 w-8 text-white"
                            >
                                <svg width="24" height="24" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.35022 2.64173H5.62013C7.02903 2.64173 8.13788 3.85495 8.02048 5.25081L6.93771 18.244C6.75507 20.3704 8.43792 22.1968 10.5774 22.1968H24.4707C26.3493 22.1968 27.993 20.6574 28.1365 18.7919L28.8409 9.00789C28.9975 6.84236 27.3538 5.08122 25.1752 5.08122H8.33357" stroke="#F26414" stroke-width="1.95681" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21.9399 28.7325C22.8405 28.7325 23.5706 28.0025 23.5706 27.1019C23.5706 26.2013 22.8405 25.4712 21.9399 25.4712C21.0393 25.4712 20.3093 26.2013 20.3093 27.1019C20.3093 28.0025 21.0393 28.7325 21.9399 28.7325Z" stroke="#F26414" stroke-width="1.95681" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.5036 28.7325C12.4042 28.7325 13.1343 28.0025 13.1343 27.1019C13.1343 26.2013 12.4042 25.4712 11.5036 25.4712C10.603 25.4712 9.87292 26.2013 9.87292 27.1019C9.87292 28.0025 10.603 28.7325 11.5036 28.7325Z" stroke="#F26414" stroke-width="1.95681" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.482 10.469H28.1365" stroke="#F26414" stroke-width="1.95681" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </svg>
                        </div>
                        <div className="rounded-full bg-[#FE9B64] bg-opacity-50 w-16 h-16 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-8 w-8 text-white"
                            >
                                <svg width="24" height="24" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0451 11.0772V10.8972C11.0451 7.64077 13.2497 4.79751 16.4035 3.98654C17.5692 3.68678 18.7918 3.68678 19.9576 3.98654C23.1113 4.79751 25.316 7.64078 25.316 10.8972V11.0772H27.571C28.4291 11.0772 29.1575 11.7066 29.2819 12.5557L29.6104 14.7977C30.2571 19.2118 30.2571 23.6967 29.6104 28.1108C29.298 30.2425 27.5791 31.8905 25.4361 32.1127L24.4915 32.2107C20.2954 32.6458 16.0656 32.6458 11.8696 32.2107L10.9249 32.1127C8.78198 31.8905 7.06303 30.2425 6.7507 28.1108C6.10393 23.6967 6.10393 19.2118 6.7507 14.7977L7.07919 12.5557C7.2036 11.7066 7.93194 11.0772 8.79011 11.0772H11.0451ZM16.9647 6.16884C17.7623 5.96374 18.5988 5.96374 19.3964 6.16884C21.5542 6.72371 23.0627 8.66911 23.0627 10.8972V11.0772H13.2984V10.8972C13.2984 8.66911 14.8068 6.72371 16.9647 6.16884ZM11.0451 13.3305V16.7105C11.0451 17.3327 11.5495 17.8371 12.1718 17.8371C12.794 17.8371 13.2984 17.3327 13.2984 16.7105V13.3305H23.0627V16.7105C23.0627 17.3327 23.5671 17.8371 24.1893 17.8371C24.8116 17.8371 25.316 17.3327 25.316 16.7105V13.3305H27.1181L27.3809 15.1244C27.9959 19.3219 27.9959 23.5866 27.3809 27.7842C27.218 28.896 26.3214 29.7555 25.2037 29.8714L24.259 29.9694C20.2175 30.3885 16.1435 30.3885 12.102 29.9694L11.1574 29.8714C10.0397 29.7555 9.14309 28.896 8.98019 27.7842C8.36517 23.5866 8.36517 19.3219 8.98019 15.1244L9.24302 13.3305H11.0451Z" fill="#F26414" />
                                </svg>


                            </svg>
                        </div>
                    </div>
                    <a href="">
                        <button className=" py-3 w-24 m-1 text-xl text-center font-bold bg-[#F26414] border rounded-md text-white  hover:bg-orange-400">
                            Log in
                        </button>
                    </a>
                </div>
            </nav >
            {/* mobile navbar */}
            <div div className={`navbar-menu relative z-50 ${isMobileMenuOpen ? 'block' : 'hidden'}`
            }>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50" />
                <nav className="fixed bg-white top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a href="#" className='mr-auto'>
                            <img src={logo} alt="Logo" className="h-12 w-auto" />
                        </a>
                        <button className="navbar-close" onClick={closeMobileMenu}>
                            <svg
                                className="h-6 w-6  text-gray-400 cursor-pointer hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className=" relative mx-auto text-gray-600">
                        <input
                            className="border-2  border-[#F26414] rounded-3xl bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search"
                            name="search"
                            placeholder="Search"
                        />
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                            <svg
                                className=" text-[#F26414] h-4 w-4 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 56.966 56.966"
                                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                                xmlSpace="preserve"
                                width="512px"
                                height="512px"
                            >
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                            <a
                                className="block py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black  hover:bg-gray-100"
                                href="/login"
                            >
                                Sign in
                            </a>
                            <a
                                className="block py-1.5 px-3 m-1 text-center font-bold bg-[#F26414] border rounded-md text-white  hover:bg-orange-400"
                                href="https://tailwindflex.com/playground"
                            >
                                Log in
                            </a>
                        </div>
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>© 2024 3i Consulting Pvt. Ltd. All rights reserved.</span>
                        </p>
                    </div>
                </nav>
            </div >
        </>
    );
};

export default Navbar;
