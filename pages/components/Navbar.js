import React, { useContext, useState } from 'react'
import { AiOutlineGlobal, AiOutlineQuestionCircle } from 'react-icons/ai'
import { GrCircleInformation } from 'react-icons/gr'
import { BiUserCircle } from 'react-icons/bi'
import TopNavBar from './TopNavBar'
import { Context } from './contextApi'
import Sidebar from './Sidebar'

export default function Navbar() {

    const { isHovered, setIsHovered } = useContext(Context)
    const [HoverData, setHoverData] = useState('')
    const [showSideBar, setShowSideBar] = useState(false)

    const closeSidebar = () => {
        setShowSideBar(false)
    }

    const handleMouseEnter = (e) => {
        setIsHovered(true);
        setHoverData(e.target.innerText)
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>

            <div className={`${isHovered ? 'text-black bg-white' : 'text-white'}  flex absolute flex-row  justify-between px-8 py-1 items-center w-full`}>

                <div className="logo text-4xl mt-2">
                    <img className='w-36' src={isHovered ? '/tesla.png' : "/tesla-white.png"} alt="" srcset="" />
                </div>

                <div className="items hidden md:flex flex-row font-normal [&>*]:cursor-pointer [&>*]:px-5 [&>*]:py-2 [&>*]:rounded-lg ">
                    <div onMouseEnter={handleMouseEnter}
                        className="nav-item hover:bg-gray-100">Vehicles</div>
                    <div onMouseEnter={handleMouseEnter}
                        className="nav-item hover:bg-gray-100">Energy</div>
                    <div onMouseEnter={handleMouseEnter}
                        className="nav-item hover:bg-gray-100">Charging</div>
                    <div onMouseEnter={handleMouseEnter}
                        className="nav-item hover:bg-gray-100">Discover</div>
                    <div onMouseEnter={handleMouseEnter}
                        className="nav-item hover:bg-gray-100">Shop</div>
                </div>

                <div className="info hidden md:flex space-x-3 text-2xl [&>*]:cursor-pointer ">
                    <div className="info-item">
                        <AiOutlineGlobal />
                    </div>
                    <div className="info-item">
                        <BiUserCircle />
                    </div>
                    <div className='info-item'>
                        <AiOutlineQuestionCircle />
                    </div>
                </div>

                <div onClick={() => {
                    setShowSideBar(true)
                }} className="block text-md md:hidden text-white px-3 py-1">
                    Menu
                </div>

                {showSideBar ?
                    <Sidebar closeSidebar={closeSidebar} /> : <></>}


            </div>

            {/* showing detailed nav */}
            {isHovered ?
                <TopNavBar handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} data={HoverData} />
                : <></>
            }
        </>
    )
}
