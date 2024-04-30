import React, { useState } from 'react';

function UpdatePassword({ setAuthState, setUser }) {
    const [emailOTP, setEmailOTP] = useState(''); // Change variable name to emailOTP
    const [password, setPassword] = useState('');
    const [reenterPassword, setReenterPassword] = useState(''); // Change variable name to reenterPassword

    const handleUpdate = () => {
        // Add your update password logic here
        console.log('Email OTP:', emailOTP);
        console.log('Password:', password);
        console.log('Re-entered Password:', reenterPassword);

        // After successful password update, you can navigate to a different page or handle the response accordingly
    };

    return (
        <div className="flex items-center font-inter justify-center h-screen">
            <div className="w-full max-w-xl px-14 py-10 bg-white shadow-md rounded-xl">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-semibold mb-4">Update Password</h1>
                </div>
                <label htmlFor="emailOTP" className="block text-md text-[#000] font-bold mb-2">Email OTP</label>
                <input
                    id="emailOTP"
                    value={emailOTP}
                    onChange={(e) => setEmailOTP(e.target.value)}
                    className="w-full px-4 py-2 border border-[#F26414] rounded-md mb-2"
                    type="text" // Change type to text
                    placeholder="Enter Email OTP"
                />
                <label htmlFor="password" className="block text-md text-[#000] font-bold mb-2">Password</label>
                <input
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-[#F26414] rounded-md mb-2"
                    type="password"
                    placeholder="Enter Password"
                />
                <label htmlFor="reenterPassword" className="block text-md text-[#000] font-bold mb-2">Re-enter Password</label>
                <input
                    id="reenterPassword"
                    value={reenterPassword}
                    onChange={(e) => setReenterPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-[#F26414] rounded-md mb-2"
                    type="password"
                    placeholder="Re-enter Password"
                />
                <button
                    onClick={handleUpdate}
                    className="w-full mt-4 bg-[#F26414] text-white font-semibold py-2 rounded-md hover:bg-orange-800 focus:outline-none focus:bg-orange-800"
                >
                    UPDATE
                </button>
            </div>
        </div>
    );
}

export default UpdatePassword;
