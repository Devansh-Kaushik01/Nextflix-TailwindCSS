import React from 'react'
import DefaultPhoneNumber from '../../../components/DefaultPhoneNumber/DefaultPhoneNumber'

function ForgotEmailSMS() {
  return (
    <>
    <div className=''>
        We will text you a verification code to reset your 
        password. Message and data rates may apply. 
    </div>
    <div className='mt-5'>
       <DefaultPhoneNumber/>
    </div>
    <div className='mt-8 font-semibold'>
        <button className='bg-blue-600 h-12 rounded  w-full text-center text-white'>
            Text Me
        </button>
    </div>
</>
  )
}

export default ForgotEmailSMS