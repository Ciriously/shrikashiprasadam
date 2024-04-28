import React, { useState } from 'react';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

function Signin({ setAuthState, setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isSignup, setIsSignup] = useState(false);

    const handleToggle = () => {
        setIsSignup(!isSignup);
    };

    const [isForgotPassword, setIsForgotPassword] = useState(false);

    const handleForgotPassword = () => {
        setIsForgotPassword(true);
    };

    const handleLogin = () => {
        // Add your authentication logic here
        // For example, you can call your authentication API
        // and handle the response accordingly
        console.log('Email:', email);
        console.log('Password:', password);

        // After successful authentication, you can update the user state
        // and change the authentication state
    };

    return (
        <div className="flex items-center font-inter justify-center h-screen">
            {isForgotPassword ? (
                <ForgotPassword />
            ) : isSignup ? (
                <Signup />
            ) : (
                <div className="w-full  max-w-md px-14 py-10 bg-white shadow-md rounded-xl">
                    <div className="flex justify-center items-center">
                        <h1 className="text-3xl font-semibold mb-4">Sign In</h1>
                    </div>
                    <label htmlFor="email" className="block text-md text-[#000]  font-bold mb-1">Email</label>
                    <input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-[#F26414]  rounded-md mb-2"
                        type="email"
                        placeholder="Email"
                    />
                    <label htmlFor="password" className="block text-md text-[#575757] font-bold mb-1">Password</label>
                    <input
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-[#F26414] rounded-md mb-2"
                        type="password"
                        placeholder="Password"
                    />
                    <button
                        onClick={handleLogin}
                        className="w-full bg-[#F26414] text-white font-semibold py-2 mt-4 rounded-md hover:bg-orange-800 focus:outline-none focus:bg-orange-800"
                    >
                        SIGN IN
                    </button>
                    <div className="flex items-center mt-6">
                        <input type="checkbox" className="mr-2" />
                        <label for="keep-signed-in" className="text-sm text-[#575757]">Keep me signed in</label>
                    </div>
                    <div className="text-right mt-2">
                        <button
                            onClick={handleForgotPassword}
                            className="text-[#575757] text-sm"
                        >
                            Forgot Password ?
                        </button>
                    </div>

                    <p className="text-center mt-4 text-sm text-[#7D7D7D]">
                        By signing in you are agreeing to our{' '}
                        <a href="/terms-of-use" className="text-[#242424] underline">Terms of Use</a> and our{' '}
                        <a href="/privacy-policy" className="text-[#242424] underline">Privacy Policy</a>.
                    </p>
                    <div className="flex items-center mt-6">
                        <hr className="flex-grow border-t border-[#FE9B64]" />
                        <span className="mx-2 text-sm text-[#575757]">New to site?</span>
                        <hr className="flex-grow border-t border-[#FE9B64]" />
                    </div>
                    <button
                        onClick={handleToggle}
                        className="w-full uppercase bg-[#F26414] text-white font-semibold py-2 rounded-md hover:bg-orange-800 focus:outline-none focus:bg-orange-800 mt-4"
                    >
                        Create an Account
                    </button>

                </div>
            )}

        </div>
    );
}

export default Signin;
