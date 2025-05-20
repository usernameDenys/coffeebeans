import React, { useState } from 'react'

const Login = () => {
    const [currentState, setCurrentState] = useState('Login')

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 font-[Barlow]' action="#">
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-2xl font-light font-[Fraunces]'> {currentState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800 ' />
            </div>
            <div className='w-full px-3 py-2 flex flex-col gap-4'>
                {currentState === 'Login' ? null : (<input
                    type='text'
                    className='w-Full px-3 py-2 border border-gray-880'
                    placeholder='First Name'
                    required
                />)}
                {/* {currentState === 'Login' ? null : (<input
                    type='text'
                    className='w-Full px-3 py-2 border border-gray-880'
                    placeholder='Last Name'
                    required
                />)} */}
                <input
                    type='email'
                    className='w-Full px-3 py-2 border border-gray-880'
                    placeholder='Email'
                    required
                />
                <input
                    type='password'
                    className='w-Full px-3 py-2 border border-gray-880'
                    placeholder='Password'
                    required
                />

            </div>
            <div className='w-full flex justify-between text-sm mt-[-8px] px-3'>
                {currentState === 'Login' ?
                    <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>No account yet?</p> : null
                }
                {currentState === 'Login' ?
                    <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p> : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Heare</p>
                }
            </div>
            <button className='w-1/2 m-auto bg-black text-white px-8 py-2 mt-4 rounded cursor-pointer'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>


        </form>
    )
}

export default Login
