import React from 'react'

function ForgotEmailPass() {
    return (
        <>
            <div className=''>
                We will send you an email with instructions on how to reset your password.
            </div>
            <div className='mt-5'>
                <input type='email' className=' rounded w-full pl-5 h-12 border-2' placeholder='Enter your email' />
            </div>
            <div className='mt-8 font-semibold'>
                <button className='bg-blue-600 h-12 rounded  w-full text-center text-white'>
                    Email Me
                </button>
            </div>
        </>


    )
}

export default ForgotEmailPass