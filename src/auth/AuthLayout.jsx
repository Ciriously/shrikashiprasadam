
import React from 'react'
import Signup from './forms/Signup'
import Signin from './forms/Signin'
import Authsvg from '.././assets/shared/auth.svg'

const AuthLayout = () => {
    return (
        <div className='flex h-screen'>
            <section className="flex flex-1 justify-center items-center flex-col py-10">
                <Signin />
            </section>

            <img
                src={Authsvg}
                alt="logo"
                className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
            />
        </div>
    )
}

export default AuthLayout