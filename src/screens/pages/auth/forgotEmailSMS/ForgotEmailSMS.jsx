import React from 'react'
import DefaultPhoneNumber from './components/DefaultPhoneNumber/DefaultPhoneNumber'
import DefaultRadioCheckbox from '../../../components/DefaultRadioCheckbox/DefaultRadioCheckbox'
import { useNavigate } from 'react-router-dom';

function ForgotEmailSMS() {
  const Navigate = useNavigate();
  return (
    <>
      <div>
        <DefaultRadioCheckbox />
      </div>
      <div className='mt-5'>
        We will text you a verification code to reset your
        password. Message and data rates may apply.
      </div>
      <div className='mt-5'>
        <DefaultPhoneNumber />
      </div>
      <div className='mt-8 font-semibold'>
        <button className='bg-blue-600 h-12 rounded  w-full text-center text-white'>
          Text Me
        </button>
      </div>
      <div className='mt-5' >
        <p className='text-blue-600  cursor-pointer hover:underline' onClick={() => Navigate('/auth/forgotform')}>I can't remember my email address or phone number.</p>
      </div>
    </>
  )
}

export default ForgotEmailSMS