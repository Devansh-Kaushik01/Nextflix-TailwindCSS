import React from 'react'
import DefaultFooter from '../pages/components/DefaultFooter/DefaultFooter'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'

function AuthRoute() { 

    return (
        <div className='w-full h-screen bg-[url(src/screens/images/banner-img-2.jpg)] bg-center bg-cover '>
            <div className='w-full h-screen bg-[rgba(0,0,0,0.5)]'>
                <div className='max-w-[1170px] mx-auto flex justify-center'>
                    <div className='w-2/5 h-800 bg-stone-100 mt-10 p-10'>
                        <div className='font-semibold text-4xl'>
                            <h2 className='text-stone-700'>Forget Email/Password</h2>
                        </div>
                        <div className='mt-5'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <DefaultFooter />
        </div>
    )
}
export default AuthRoute