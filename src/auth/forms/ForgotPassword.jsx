import React, { useState } from 'react';
import UpdatePassword from './UpdatePassword'; // Import the UpdatePassword component

function ForgotPassword({ setAuthState, setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isForgotPassword, setIsForgotPassword] = useState(false);

    const handleToggle = () => {
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
                <UpdatePassword />
            ) : (
                <div className="w-full max-w-md px-14 py-10 bg-white shadow-md rounded-xl">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl font-semibold mb-4">Reset Password</h1>
                        <p className="text-sm text-gray-600 mb-4">Enter the email address associated with your kashiprasadam account.</p>
                    </div>
                    <label htmlFor="email" className="block text-md text-[#000] font-bold mb-2">Email</label>
                    <input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-[#F26414] rounded-md mb-2"
                        type="email"
                        placeholder="Enter your e-mail"
                    />
                    <button
                        onClick={handleToggle}
                        className="w-full mt-4 bg-[#F26414] text-white font-semibold py-2 rounded-md hover:bg-orange-800 focus:outline-none focus:bg-orange-800"
                    >
                        Continue
                    </button>


                </div>
            )}
        </div>
    );
}



export default ForgotPassword