import React from 'react'

function Lists({ questionName }) {
    return (
        <div>
            <li className='bg-[rgb(45,45,45)] py-7 px-5 flex justify-between hover:bg-[rgb(67,66,66)] duration-500'>
                <p className='font-semibold text-xl'>{questionName}</p>
                <p className='font-bold text-2xl'>+</p>
            </li>
        </div>
    )
}

export default Lists