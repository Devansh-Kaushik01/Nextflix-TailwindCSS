import React from 'react'
import { Link } from 'react-router-dom'
import LanguageBtn from '../../../components/languageBtn/LanguageBtn'
import DefaultLinkDiv from '../../../components/DefaultLinkDiv/DefaultLinkDiv'

function Footer() {
    return (
        <div className='max-w-[1170px] mx-auto sm:pt-24 h-screen'>
            <div className='flex flex-col-2 p-2.5 h-600 max-w-full'>
                <div className=' w-1\4 flex flex-col p-5'>
                    <p className='text-[rgba(255,255,255,0.7)]'>
                        Questions?Call<Link className='underline text-neutral-400 '>000-800-919-1694</Link>
                    </p>
                    <Link className='underline p-2.5 text-neutral-400 '>FAQ</Link>
                    <Link className='underline p-2.5 text-neutral-400 '>Investor Relations</Link>
                    <Link className='underline p-2.5 text-neutral-400 '>Privacy</Link>
                    <Link className='underline p-2.5 text-neutral-400 '>Speed Test</Link>
                    <div className="p-2.5 text-white" >
                        <LanguageBtn />
                    </div>
                    <p className='p-2.5 text-neutral-400 '>Netflix India</p>
                </div>
                <DefaultLinkDiv
                    linkname1={'Help Center'}
                    linkname2={'Jobs'}
                    linkname3={'Cookie Preferernces'}
                    linkname4={'Legal Notices'}
                />
                <DefaultLinkDiv
                    linkname1={'Account'}
                    linkname2={'Ways to Watch'}
                    linkname3={'Corporate Information'}
                    linkname4={'Only on Netflix'}
                />
                <DefaultLinkDiv
                    linkname1={'Terms of Use'}
                    linkname2={'Media Centre'}
                    linkname3={'Contact Us'}
                />
            </div>
        </div>
    )
}

export default Footer