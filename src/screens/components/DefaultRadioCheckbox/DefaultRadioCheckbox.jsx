import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function DefaultRadioCheckbox() {
    const Navigate = useNavigate();
    const params = useLocation();
    
    return (
        <>
            <div className='mt-4'>
                <div className='mb-5 '>
                    <h2>How would you like to reset your password?</h2>
                </div>
                <div className='flex flex-col gap-2 ms-10'>
                    <label className='cursor-pointer text-xl' onClick={() => Navigate('/auth/LoginHelp')} >
                        <input type="radio" name="radio" checked={params.pathname === "/auth/LoginHelp"} value="email" className='mr-2 cursor-pointer h-5 w-6' />
                        Email
                        <span className="checkmark"></span>
                    </label>
                    <label className='cursor-pointer text-xl' onClick={() => Navigate('/auth/LoginHelpSMS')}>
                        <input type="radio" name="radio" checked={params.pathname === "/auth/LoginHelpSMS"} value="text" className='mr-2 cursor-pointer h-5 w-6' />
                        Text Message (SMS)
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
        </>
    )
}

export default DefaultRadioCheckbox