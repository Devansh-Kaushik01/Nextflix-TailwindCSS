import React from 'react'
import { Link } from 'react-router-dom'
import LanguageBtn from '../../../components/languageBtn/LanguageBtn'

function Footer2() {
  return (
    <div>
             <div className='w-full bg-black h-500 '>
                <div className='max-w-[1170px] mx-auto  py-20 text-stone-400'>
                    <div className='ms-56 mb-7'><p>Questions? Call <span className='hover:underline '>000-800-919-1694</span></p></div>
                    <div className=' flex flex-col-4 justify-center gap-24 '>
                        <div className='flex flex-col gap-5'>
                            <Link className='uppercase'>Faq</Link>
                            <Link>Cookie Preferences</Link>
                            <div className=''>
                                <LanguageBtn />
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <Link className=''>Help Center</Link>
                            <Link>Corporate Information</Link>
                        </div>
                        <div className=''>
                            <Link>Terms of Use</Link>
                        </div>
                        <div className=''>
                            <Link>Privacy</Link>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer2