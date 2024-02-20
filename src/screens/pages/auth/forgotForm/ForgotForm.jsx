import React from 'react'
import DefaultInput from '../../../components/DefaultInput/DefaultInput'

function ForgotForm() {
    return (
        <>
            <div>
                <h2 className=''>
                    Please provide this information to help us find your account (all fields required):
                </h2>
            </div>
            <div>
                <h3>First name on account</h3>
                <DefaultInput />
            </div>
            <div>
                <h3>Last name on account</h3>
                <DefaultInput />
            </div>
            <div>
                <h3>Credit or debit card number on file</h3>
                <DefaultInput />
            </div>
            <div className='flex gap-5 w-3/4 mt-5'>
                <button className='
                bg-gradient-to-r from-[#0080ff] to-[#0272e2]
                 h-12 rounded w-80 text-white font-semibold p-2 text-center'>
                    Find Account
                </button>
                <button className='bg-slate-200 h-12 rounded  w-56  text-center'>
                    Cancel
                </button>
            </div>
        </>
    )
}

export default ForgotForm