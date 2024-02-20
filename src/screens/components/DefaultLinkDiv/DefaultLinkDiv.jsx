import React from 'react'
import { Link } from 'react-router-dom'

function DefaultLinkDiv({linkname1,linkname2,linkname3,linkname4}) {
  return (
    <div className=' w-1\4 flex flex-col p-5 mt-2 underline text-neutral-400 '>
           <Link className='p-2.5 '>{linkname1}</Link>
           <Link className='p-2.5 '>{linkname2}</Link>
           <Link className='p-2.5 '>{linkname3}</Link>
           <Link className='p-2.5 '>{linkname4}</Link>
  </div>
  )
}

export default DefaultLinkDiv