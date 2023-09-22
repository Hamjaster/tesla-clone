import React from 'react'
import Image from 'next/image'

export default function TopNavBar({ data, handleMouseLeave, handleMouseEnter }) {

    const generateContent = (data) => {
        switch (data) {
            case 'Vehicles':
                return (
                    <>
                        <div className="images font-normal text-xl border-r-2 w-4/5 flex flex-row flex-wrap [&>*]:w-56">

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
                        <div className="images font-normal text-xl border-r-2 w-4/5 flex flex-row flex-wrap [&>*]:w-56">

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
                        <div className="images font-normal text-xl border-r-2 w-4/5 flex flex-row flex-wrap [&>*]:w-56">

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
            case 'Shop':
                return (
                    <>
                        <div className="images font-normal text-xl border-r-2 w-4/5 flex flex-row flex-wrap [&>*]:w-56">

                            <div className="car">
                                <img src="/black-car.avif" alt="" srcset="" />
                                <div className='text-center'>Car X</div>
                            </div>

                            <div className="car">
                                <img src="/red-car.avif" alt="" srcset="" />
                                <div className='text-center'>Car X</div>
                            </div>

                            <div className="car">
                                <img src="/white-car.avif" alt="" srcset="" />
                                <div className='text-center'>Car X</div>
                            </div>

                            <div className="car">
                                <img src="/blue-car.avif" alt="" srcset="" />
                                <div className='text-center'>Car X</div>
                            </div>

                        </div>


                    </>
                )
                break;

            default:
                break;
        }
    }

    return (
        < >
            {/* blur and black bg */}
            <div className="bg-[rgba(0,0,0,0.5)] backdrop-blur-sm absolute right-0 top-[60px] -z-20 bottom-0 h-screen w-full "></div>

            {/* white details nav */}
            <div onMouseLeave={handleMouseLeave} className='bg-white text-center flex justify-center items-center text-black h-[29rem] absolute w-full top-16 left-0'>

                <div className="flex flex-row w-full px-24">
                    {data && generateContent(data)}
                    <div className="list text-left space-y-3 py-2 pl-14 w-2/5 ">
                        <div>Schedule a Consultation</div>
                        <div>Incentives</div>
                        <div>Support</div>
                        <div>Commercial</div>
                        <div>Utilities</div>
                        <div>Inventory</div>
                    </div>
                </div>

            </div>
        </>
    )
}
