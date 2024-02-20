import React from 'react'
import Footer2 from '../pages/components/footer-2/Footer2'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'

function AuthRoute() { 
    const Navigate = useNavigate();
    const params = useLocation();
    console.log(params)
    return (
        <div className='w-full h-screen bg-[url(src/screens/images/banner-img-2.jpg)] bg-center bg-cover '>
            <div className='w-full h-screen bg-[rgba(0,0,0,0.5)]'>
                <div className='max-w-[1170px] mx-auto flex justify-center'>
                    <div className='w-2/5 h-800 bg-stone-100 mt-10 p-10'>
                        <div className='font-semibold text-4xl'>
                            <h2 className='text-stone-700'>Forget Email/Password</h2>
                        </div>
                        <div className='mt-4'>
                            <div className='mb-5 '>
                                <h2>How would you like to reset your password?</h2>
                            </div>
                            <div className='flex flex-col gap-2 ms-10'>
                                <label className='cursor-pointer text-xl' onClick={()=>Navigate('/auth/LoginHelp')} >
                                    <input type="radio" name="radio" checked={params.pathname === "/auth/LoginHelp"} value="email" className='mr-2 cursor-pointer h-5 w-6' />
                                    Email
                                    <span className="checkmark"></span>
                                </label>
                                <label className='cursor-pointer text-xl' onClick={()=>Navigate('/auth/LoginHelpSMS')}>
                                    <input type="radio" name="radio" checked={params.pathname === "/auth/LoginHelpSMS"} value="text"  className='mr-2 cursor-pointer h-5 w-6' />
                                    Text Message (SMS)
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <Outlet />
                        </div>
                        <div className='mt-5'>
                            <p className='text-blue-600 hover:underline'>I can't remember my email address or phone number.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default AuthRoute