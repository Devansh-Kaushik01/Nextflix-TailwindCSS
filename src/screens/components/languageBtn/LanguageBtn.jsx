import React from 'react'
import { AiOutlineGlobal } from "react-icons/ai";

function LanguageBtn() {
    return (
        <>
            <div className='relative'>
                <div className='absolute left-1 top-3'>
                <AiOutlineGlobal />
                </div>
                <select name="" id="" className='bg-[#1e1d1d]  border-2 border-[white]
                                 sm:p-[7px_20px] p-[5px_20px] rounded'>
                    <option value="" >English</option>
                    <option value="">Hindi</option>
                </select>
            </div>
        </>
    )
}

export default LanguageBtn