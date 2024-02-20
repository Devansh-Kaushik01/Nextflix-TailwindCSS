import React from 'react'

function DefaultBtn({ btnName }) {
    return (

        <div className=''>
            <button className='bg-red-600 h-12 rounded  w-full text-center'>
                {btnName}
            </button>
        </div>

    )
}

export default DefaultBtn