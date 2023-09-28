
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import { useContext, useEffect, useState } from 'react'
import { Context } from './components/contextApi'

const Video = dynamic(() => import('./components/Video'))


export default function Home() {
  const { isHovered, setIsHovered } = useContext(Context)

  useEffect(() => {
    console.log(isHovered)
  }, [isHovered])

  return (
    <>
      <Video />
      <main
        className={`h-screen font-Gemito`}
      >
        <Navbar />

        <div className="bg-overlay h-1/2 bg-gradient-to-b from-[hsla(0,0%,0%,1)] to-transparent relative -z-20"></div>



        {/* Heading text */}
        <div className={`main-text relative -mt-[35vh]  ${isHovered ? '-z-40' : ''} text-white text-center`}>

          <div className='text-[2.5rem] sm:mb-1 font-[600]'>Model <span className='font-Poppins font-[500]'> 3</span></div>
          <div className='sm:text-2xl text-md'>From <span className='font-Roboto text-md'> $29,740*</span></div>
          <div className='text-xs sm:text-sm font-thin'>After Federal Tax Credit & Est. Gas Savings
          </div>
        </div>

        <div className={`buttons ${isHovered ? '-z-40' : ''} absolute bottom-5 sm:bottom-10 w-full text-center px-4 items-center text-lg justify-center [&>*]:cursor-pointer space-y-3 sm:space-x-6 text-black flex flex-col sm:flex-row`}>
          <div className="py-2 rounded-sm px-24 bg-[#fffc] backdrop-blur-sm">Order Now</div>
          <div className="py-2 text-white rounded-sm px-24 bg-[#222222a6] backdrop-blur-sm">Demo Drive</div>
        </div>

      </main>
    </>

  )
}
