import React from 'react'
import { useNavigate } from 'react-router-dom'

function BannerBtn() {
    const Navigate = useNavigate()
    return (
        <>
            <button onClick={() => Navigate("/in/login")} className='bg-red-600 md:h-10 h-9 rounded px-2.5 py-2 sm:w-24 w-30 font-bold text-center
                             hover:bg-[rgb(157,117,119)] duration-500' >
                Sign In
            </button>
        </>
    )
}

export default BannerBtn