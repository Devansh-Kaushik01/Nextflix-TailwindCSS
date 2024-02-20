import React from 'react'
import DefaultInputBtn from '../../../components/DefaultInputBtn/DefaultInputBtn'
import NetflixImg from '../../../images/netflix.avif'
import MoblieNetflix from '../../../images/mobile-0819.jpg'
import DeviceImg from '../../../images/device-pile-in.png'
import KidsNetflixImg from '../../../images/kidsnetflix.png'
import NetflixLogo from '../../../images/netflixlogo.png'
import Footer from '../../components/footer/Footer'
import LanguageBtn from '../../../components/languageBtn/LanguageBtn'
import UnorderList from '../../../components/DefaultLists/UnorderList'
import Btn from './components/Btn'

function Banner() {

    return (
        <div className='w-full h-screen bg-[url(src/screens/images/banner-img.jpg)] bg-center bg-cover'>
            <div className='w-full h-screen bg-[rgba(0,0,0,0.5)]'>
                <header className='max-w-1170 mx-auto'>
                    <div className='grid sm:grid-cols-2 grid-cols-[30%_auto] px-2.5'>
                        <div className='py-2.5'>
                            <img src={NetflixLogo} alt='logo' className='w-1/3' />
                        </div>
                        <div className='flex justify-end gap-6 text-white mt-5 '>
                            <LanguageBtn />
                            <Btn />
                        </div>
                    </div>
                </header>

                <div className='max-w-1170 mx-auto sm:py-40 py-12 px-8
                text-center text-white'>
                    <h1 className='sm:text-5xl text-3xl font-bold'>
                        Unlimited movies, TV shows and more
                    </h1>
                    <h4 className='sm:text-2xl text-xl py-2.5'>
                        Watch anywhere. Cancel anytime.
                    </h4>
                    <p className='sm:text-2xl text-xl pt-1'>
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>
                    <DefaultInputBtn
                        placeholder={'Email Address'}
                        btnName={'Get Started >'}
                    />
                </div>
            </div>

            <div className='w-full h-800 mx-auto bg-black border-y-8 border-[rgb(35,35,35)]'>
                <div className='max-w-[1170px] mx-auto md:grid sm:grid-cols-2 grid-cols-1 gap-5 text-white '>
                    <div className='flex flex-col justify-center px-5 mt-4' >
                        <h1 className='mb-3 font-bold sm:text-5xl text-3xl'>Enjoy on your TV</h1>
                        <p className='sm:text-xl text-lg'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div className='py-12 overflow-hidden '>
                        <img src={NetflixImg} className='hover:scale-125 duration-700 cursor-pointer ' />
                    </div>
                </div>
            </div>
            <div className='w-full h-800 bg-black border-b-8 border-[rgb(35,35,35)]'>
                <div className='max-w-[1170px] mx-auto md:grid sm:grid-cols-2 grid-cols-1 gap-8 text-white '>
                    <div className='sm:py-12 py-2.5 overflow-hidden'>
                        <img src={MoblieNetflix} className='hover:scale-125 duration-700 w-full cursor-pointer' />
                    </div>
                    <div className='flex flex-col justify-center px-5' >
                        <h1 className='mb-3 font-bold sm:text-5xl text-3xl'>Download your shows to watch offline</h1>
                        <p className='sm:text-xl text-lg'>Save your favourites easily and always have something to watch.</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-800 bg-black border-b-8 border-[rgb(35,35,35)]'>
                <div className='max-w-[1170px] mx-auto md:grid sm:grid-cols-2 grid-cols-1 gap-5 text-white  '>
                    <div className='flex flex-col justify-center px-5 md:mt-5' >
                        <h1 className='mb-3  font-bold sm:text-5xl text-3xl'>Watch everywhere</h1>
                        <p className='sm:text-xl text-lg'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className='sm:py-12 py-2.5 overflow-hidden '>
                        <img src={DeviceImg} className='hover:scale-125 duration-700 cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className='w-full h-800 bg-black border-b-8 border-[rgb(35,35,35)]'>
                <div className='max-w-[1170px] mx-auto md:grid sm:grid-cols-2 grid-cols-1 gap-8 text-white  '>
                    <div className='sm:py-12 py-2.5 overflow-hidden '>
                        <img src={KidsNetflixImg} className='hover:scale-125 duration-700 w-4\5 cursor-pointer' />
                    </div>
                    <div className='flex flex-col justify-center px-5' >
                        <h1 className='mb-3 font-bold sm:text-5xl text-3xl'>Create profiles for kids</h1>
                        <p className='sm:text-xl text-lg'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                    </div>
                </div>
            </div>

            <div className='w-full h-1200  bg-black border-b-8 border-[rgb(35,35,35)]'>
                <div className=' max-w-full mx-auto h-screen  sm:grid sm:grid-row-2  gap-5 py-5  text-white'>
                    <div className=' max-w-[1170px] md:h-900 h-800 mx-auto px-5 '>
                        <h1 className='text-center mb-3 font-bold sm:text-6xl text-3xl'>Frequently Asked Questions</h1>
                        <UnorderList />
                    </div>
                    <div className='text-center  md:mt-10 '>
                        <p className='text-2xl'>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className=''>
                            <DefaultInputBtn
                                placeholder={"Enter Your Email"}
                                btnName={"Get Started >"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className=' bg-black '>
                <Footer />
            </div>

        </div>
    )
}

export default Banner