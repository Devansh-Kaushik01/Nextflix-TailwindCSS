import React from 'react'
import DefaultInput from '../../../components/DefaultInput/DefaultInput'
import DefaultBtn from '../../../components/DefaultBtn/DefaultBtn'
import { Link } from 'react-router-dom'
import LanguageBtn from '../../../components/languageBtn/LanguageBtn'

function SignIn() {
    return (
        <div className='w-full h-screen bg-[url(src/screens/images/banner-img.jpg)] bg-center bg-cover'>
            <div className='w-full h-screen bg-[rgba(0,0,0,0.5)] '>
                <div className='max-w-[1170px] mx-auto flex justify-center'>
                    <div className='w-[40%] h-900 bg-black text-white mt-10 p-10 '>
                        <div className='font-semibold text-2xl'>
                            <h2 className='border-b-2 pb-2 '>Sign In</h2>
                        </div>
                        <div className='mt-10'>
                            <div className='mb-2 text-xl'>
                                <h2>Username/Email :</h2>
                            </div>
                            <div className=''>
                                <DefaultInput
                                    type={'email'}
                                    placeholder={'Enter your username/email'}
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='mb-2 text-xl'>
                                <h2>Password :</h2>
                            </div>
                            <div className=''>
                                <DefaultInput
                                    type={'password'}
                                    placeholder={'Enter your password'}
                                />
                            </div>
                        </div>
                        <div className='mt-8 font-semibold'>
                            <DefaultBtn
                                btnName={'Sign In'}
                            />
                        </div>
                        <div className='flex justify-between mt-2'>
                            <div className='flex gap-1'>
                                <input type='checkbox' />
                                <h5>Remember Me</h5>
                            </div>
                            <div>
                                <Link className='hover:underline' to='/auth/LoginHelp'>Need Help?</Link>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h4 className='text-stone-400'>New to Netflix?<Link className='hover:underline text-white ms-1' to='/' >Sign up now.</Link></h4>
                        </div>
                        <div className='mt-4'>
                            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.<Link className='hover:underline text-blue-600'>Learn more.</Link></p>
                        </div>
                    </div>
                </div>

            </div>
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

export default SignIn