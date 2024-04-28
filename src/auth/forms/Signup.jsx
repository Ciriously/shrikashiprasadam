import React, { useState } from 'react';
import RegistrationSuccess from '../../assets/animations/animations';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [mobileno, setMobileno] = useState('');
    const [isSignup, setIsSignup] = useState(false); // Fix the state name

    const handleSignup = () => {
        // Add your signup logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Retype Password:', retypePassword);

        // After successful signup, set isSignup to true
        setIsSignup(true);
    };

    return (
        <div className="w-full max-w-lg px-14 py-10 bg-white shadow-md rounded-xl">
            {isSignup ? (
                <RegistrationSuccess title="Registration Successful" />
            ) : (
                <>
                    <div className="flex justify-center items-center">
                        <h1 className="text-3xl font-semibold mb-4">Create Account</h1>
                    </div>
                    <label htmlFor="name" className="block text-md text-[#000] font-bold mb-2">Name</label>
                    <input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-[#F26414] rounded-md mb-2"
                        type="text"
                        placeholder="Name"
                    />
                    <label htmlFor="email" className="block text-md text-[#000] font-bold mb-2">Email</label>
                    <input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-[#F26414] rounded-md mb-2"
                        type="email"
                        placeholder="Email"
                    />
                    <label htmlFor="phone" className="block text-md text-[#000] font-bold mb-2">Mobile Number</label>
                    <input
                        id="mobileno"
                        value={mobileno}
                        onChange={(e) => setMobileno(e.target.value)} // Fix the state setter
                        className="w-full px-4 py-2 border border-[#F26414] rounded-md mb-2"
                        type="tel" // Change the type to "tel"
                        placeholder="Enter your mobile no."
                    />
                    <label htmlFor="password" className="block text-md text-[#575757] font-bold mb-2">Password</label>
                    <input
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-[#F26414] rounded-md mb-2"
                        type="password"
                        placeholder="Password"
                    />
                    <label htmlFor="retype-password" className="block text-md text-[#575757] font-bold mb-2">Re-enter password</label>
                    <input
                        id="retype-password"
                        value={retypePassword}
                        onChange={(e) => setRetypePassword(e.target.value)}
                        className="w-full px-4 py-2 border border-[#F26414] rounded-md mb-4"
                        type="password"
                        placeholder="Retype Password"
                    />
                    <button
                        onClick={handleSignup}
                        className="w-full bg-[#F26414] text-white font-semibold py-2 rounded-md hover:bg-orange-800 focus:outline-none focus:bg-orange-800"
                    >
                        CREATE AN ACCOUNT
                    </button>
                    <p className="text-left mt-4 text-sm text-[#7D7D7D]">
                        By creating an account, you agree to our{' '}
                        <a href="/terms-of-use" className="text-[#242424] underline">Terms of Use</a> and our{' '}
                        <a href="/privacy-policy" className="text-[#242424] underline">Privacy Policy</a>.
                    </p>
                    <p className="text-left mt-4 text-sm text-[#7D7D7D]">
                        Already have an account?{' '}
                        <span
                            onClick={() => setIsSignup(false)} // Fix the state setter
                            className="text-[#000] font-medium cursor-pointer underline hover:underline"
                        >
                            Sign-in
                        </span>
                    </p>
                </>
            )}
        </div>
    );
}

export default Signup;
