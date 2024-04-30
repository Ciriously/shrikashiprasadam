
import React from 'react'
import Signup from './forms/Signup'
import Signin from './forms/Signin'
import Authsvg from '.././assets/shared/auth.svg'
import bgImage from '.././assets/shared/form.svg'

const AuthLayout = () => {
    return (
        <div className='flex h-screen'>
            <img
                src={Authsvg}
                alt="logo"
                className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
            />
            <section
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="flex flex-1 justify-center items-center flex-col py-10"
            >
                <Signin />
            </section>

        </div>
    )
}

export default AuthLayout