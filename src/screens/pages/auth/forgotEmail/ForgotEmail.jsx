import React from 'react'
import DefaultRadioCheckbox from '../../../components/DefaultRadioCheckbox/DefaultRadioCheckbox'
import { useNavigate } from 'react-router-dom';

function ForgotEmailPass() {
    const Navigate = useNavigate();
    return (
        <>
            <div>
                <DefaultRadioCheckbox />
            </div>
            <div className='mt-5'>
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
            <div className='mt-5' >
                <p className='text-blue-600  cursor-pointer hover:underline' onClick={() => Navigate('/auth/forgotform')}>I can't remember my email address or phone number.</p>
            </div>
        </>


    )
}

export default ForgotEmailPass