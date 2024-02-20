import React from 'react'

function DefaultInput({placeholder,type}) {
  return (
    <div>
         <input type={type}className=' rounded w-full pl-5 h-12 bg-stone-700
           bg-[transparent]'placeholder={placeholder} />
    </div>
  )
}

export default DefaultInput