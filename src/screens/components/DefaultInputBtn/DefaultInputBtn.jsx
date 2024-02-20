import React from 'react'

function DefaultInput({ placeholder, btnName }) {
  return (
    <>
      <div className='max-w-[700px] px-2.5 mx-auto mt-5'>
        <form action='' className='grid sm:grid-cols-[70%_auto] sm: grid-cols-1 gap-5 justify-center '>
          <input type='email' className='border-2 pl-5 h-12 border-[#ccc]
           bg-[transparent]'placeholder={placeholder} />
          <button className='bg-red-600 rounded px-2.5 sm:py-0 py-2.5 w-36 font-bold
               hover:bg-[rgb(193,17,25)] duration-500'>
            {btnName}
          </button>
        </form>
      </div>
    </>
  )
}

export default DefaultInput