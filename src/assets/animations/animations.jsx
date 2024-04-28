import React from 'react';
import Lottie from 'react-lottie';
import animationData from './register.json';

const RegistrationSuccess = ({ title }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="flex flex-col font-inter items-center justify-center ">
            <Lottie options={defaultOptions} height={200} width={200} />
            <h1 className="text-2xl font-bold text-[#575757] text-center mt-4">{title}</h1>
            <p className="text-lg text-[#575757] text-center mt-2">Account created successfully!
                <p className='text-md underline'>Please Login</p></p>

        </div>
    );
};

export default RegistrationSuccess;