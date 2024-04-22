import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import Logo from "../assets/shared/Footerlogo.svg"

const Footer = () => {
    return (
        <div><>

            <footer className="bg-[#F49817] bg-opacity-25">
                <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <div className="flex justify-center text-teal-600 sm:justify-start">
                                <img src={Logo} alt="logo" />
                            </div>
                            {/* About Us Section */}
                            <div className="text-center w-auto sm:text-left">
                                <p className="text-xl  font-inter  font-bold text-gray-900">Contact Us</p>
                                <ul className="mt-4 font-inter space-y-4 text-md">
                                    <li>
                                        <a
                                            className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                            href="#"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-5 shrink-0 text-gray-900"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                            <span className="flex-1 text-gray-700">john@doe.com</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                            href="#"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-5 shrink-0 text-gray-900"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                            <span className="flex-1 text-gray-700">0123456789</span>
                                        </a>
                                    </li>
                                    <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5 shrink-0 text-gray-900"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                                            Shri Kashi Vishwanath TempleTrust Helpdesk
                                            Near Shapuri Mall, Bansfatak,     Varanasi- 221001
                                        </address>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 gap-8 w-max sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                            <div className="text-center sm:text-left">
                                <p className="text-xl font-inter font-bold text-gray-900">About Us</p>
                                <ul className="mt-8 text-md space-y-4 w-max font-inter ">
                                    <li>
                                        <a
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            href="#"
                                        >

                                            Company History
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            href="#"
                                        >
                                            Meet the Team
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            href="#"
                                        >
                                            Employee Handbook
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            href="#"
                                        >

                                            Careers
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            href="#"
                                        >

                                            Careers
                                        </a>
                                    </li>   <li>
                                        <a
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            href="#"
                                        >

                                            Careers
                                        </a>
                                    </li>   <li>
                                        <a
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            href="#"
                                        >

                                            Careers
                                        </a>
                                    </li>   <li>
                                        <a
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            href="#"
                                        >

                                            Careers
                                        </a>
                                    </li>   <li>
                                        <a
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            href="#"
                                        >

                                            Shri Kashi Vishwanath App
                                        </a>
                                    </li>   <li>
                                        <a
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            href="#"
                                        >

                                            Careers
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center  sm:text-left">
                                <p className="text-xl font-bold font-inter text-gray-900">Our Services</p>
                                <ul className="mt-8 w-max space-y-4 text-md">
                                    <li>
                                        <a
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            href="#"
                                        >
                                            Web Development
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            href="#"
                                        >
                                            {" "}
                                            Web Design{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            href="#"
                                        >
                                            {" "}
                                            Marketing{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            href="#"
                                        >
                                            Kashi Vishwanath Prasad
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="text-xl font-bold font-inter text-gray-900">Helpful Links</p>
                                <ul className="mt-8 space-y-4 text-md">
                                    <li>
                                        <a
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            href="#"
                                        >
                                            {" "}
                                            FAQs{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            href="#"
                                        >
                                            {" "}
                                            Support{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-gray-700 transition hover:text-gray-700/75"
                                            href="#"
                                        >
                                            {" "}
                                            Privacy Policy{" "}
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="mt-12 border-t border-black pt-6">
                        <div className="text-center sm:flex sm:justify-between sm:text-left">
                            <p className="text-sm text-gray-500">
                                <div className="flex text-black">
                                    <FaFacebook className="mx-2 h-8 w-10" />
                                    <FaTwitter className="mx-2 h-8 w-10" />
                                    <FaInstagram className="mx-2 h-8 w-10" />
                                </div>

                            </p>
                            <p className="mt-4 text-lg font-inter text-black sm:order-first sm:mt-0">
                                © 2024 3i Consulting Pvt. Ltd. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
        </div>
    )
}

export default Footer