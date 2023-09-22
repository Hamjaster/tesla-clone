import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiSolidArrowToRight } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io'
import Image from 'next/image'

export default function Sidebar({ closeSidebar }) {
    const [activeItem, setActiveItem] = useState('')

    const renderActiveItem = (active) => {
        switch (active) {
            case 'Vehicles':
                return (
                    <>
                        <div className="images space-y-2  py-12 font-normal text-xl border-b-2 w-full flex flex-row flex-wrap [&>*]:w-56">

                            <div className="car">
                                <img src="/black-car.avif" alt="" srcset="" />
                                <div className='text-center'>Modal <span className='font-Poppins'>5</span> </div>
                            </div>

                            <div className="car">
                                <img src="/red-car.avif" alt="" srcset="" />
                                <div className='text-center'>Modal <span className='font-Poppins'>3</span> </div>
                            </div>

                            <div className="car">
                                <img src="/white-car.avif" alt="" srcset="" />
                                <div className='text-center'>Modal X</div>
                            </div>

                            <div className="car">
                                <img src="/blue-car.avif" alt="" srcset="" />
                                <div className='text-center'>Modal Y</div>
                            </div>

                        </div>
                    </>
                )
                break;
            case 'Energy':
                return (
                    <>
                        <div className="imagesspace-y-2  py-12 font-normal text-xl border-b-2 w-full flex flex-row flex-wrap [&>*]:w-56">

                            <div className="car">
                                <img src="/energy1.avif" alt="" srcset="" />
                                <div className='text-center'>Solar Panel</div>
                            </div>

                            <div className="car">
                                <img src="/energy2.avif" alt="" srcset="" />
                                <div className='text-center'>Solar Roof</div>
                            </div>

                            <div className="car">
                                <img src="/energy3.avif" alt="" srcset="" />
                                <div className='text-center'>Powerall</div>
                            </div>

                            <div className="car">
                                <img src="/energy4.avif" alt="" srcset="" />
                                <div className='text-center'>Megapack</div>
                            </div>

                        </div>
                    </>
                )
                break;
            case 'Charging':
                return (
                    <>
                        <div className="images space-y-2 py-12 font-normal text-xl border-b-2 w-full flex flex-row flex-wrap [&>*]:w-56">

                            <div className="car">
                                <img src="/charging1.avif" alt="" srcset="" />
                                <div className='text-center'>Car X</div>
                            </div>

                            <div className="car">
                                <img src="/charging2.avif" alt="" srcset="" />
                                <div className='text-center'>Car X</div>
                            </div>

                            <div className="car">
                                <img src="/charging3.avif" alt="" srcset="" />
                                <div className='text-center'>Car X</div>
                            </div>


                        </div>
                    </>
                )
                break;

            default:
                return (
                    <>
                        <div className="images space-y-2 py-12 font-normal text-xl border-b-2 w-full flex flex-row flex-wrap [&>*]:w-56">

                            <div className="car">
                                <img src="/charging1.avif" alt="" srcset="" />
                                <div className='text-center'>Car X</div>
                            </div>

                            <div className="car">
                                <img src="/charging2.avif" alt="" srcset="" />
                                <div className='text-center'>Car X</div>
                            </div>

                            <div className="car">
                                <img src="/charging3.avif" alt="" srcset="" />
                                <div className='text-center'>Car X</div>
                            </div>


                        </div>
                    </>
                )
                break;
        }
    }


    return (
        <div className='right-0 h-screen z-50 left-0 absolute top-0 bottom-0 w-full text-2xl items-start justify-start space-y-8 flex flex-col bg-white text-black px-12 py-16'>

            {/* Making nested navigation */}
            {activeItem ?
                <div className="flex flex-col space-y-6 w-full">

                    <div onClick={() => {
                        setActiveItem('')
                    }} className="absolute top-7 left-5">
                        <IoIosArrowBack />
                    </div>

                    {renderActiveItem(activeItem)}

                    <div className="list text-left text-md space-y-3 py-7 w-full ">
                        <div>Schedule a Consultation</div>
                        <div>Incentives</div>
                        <div>Support</div>
                        <div>Commercial</div>
                        <div>Utilities</div>
                        <div>Inventory</div>
                    </div>

                </div>
                :
                // Main sidebar
                <>

                    <div onClick={closeSidebar} className="icon absolute top-4 right-5 text-3xl">
                        <AiOutlineClose />
                    </div>

                    <div onClick={() => {
                        setActiveItem('Vehicles')
                    }} className="item w-full flex flex-row justify-between items-center">
                        <span>Vehicles</span>
                        <BsArrowRight />
                    </div>

                    <div onClick={() => {
                        setActiveItem('Shop')
                    }} className="item w-full flex flex-row justify-between items-center">
                        <span>Shop</span>
                        <BsArrowRight />
                    </div>

                    <div onClick={() => {
                        setActiveItem('Energy')
                    }} className="item w-full flex flex-row justify-between items-center">
                        <span>Energy</span>
                        <BsArrowRight />
                    </div>

                    <div onClick={() => {
                        setActiveItem('Charging')
                    }} className="item w-full flex flex-row justify-between items-center">
                        <span>Charging</span>
                        <BsArrowRight />
                    </div>

                </>

            }

        </div>
    )
}
