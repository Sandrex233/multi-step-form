import React from 'react'
import sidebarBgDsk from '../assets/images/bg-sidebar-desktop.svg'

const Sidebar = ({ index, setIndex }) => {

    const handleClick = (idx) => {
        setIndex(idx)
    }

    return (
        <div className='flex justify-center items-center'>
            <div style={{ backgroundImage: `url(${sidebarBgDsk})` }} className='w-[350px] h-[700px] rounded-xl flex-col bg-blend-normal bg-cover bg-center flex items-center justify-center space-y-36'>
                <div className='space-y-10'>
                    <div
                        onClick={() => handleClick(0)}
                        className="flex flex-row cursor-pointer">
                        <button
                            className={index === 0 ? "rounded-full text-black w-16 h-16 font-bold bg-[#BFE2FD] mr-4" : 'rounded-full text-white w-16 h-16 font-bold border-[2px] mr-4'}>1</button>
                        <div className='flex justify-center items-start flex-col'>
                            <p className='uppercase text-[#9699AB] font-normal'>Step 1</p>
                            <h1 className='uppercase text-white font-semibold'>Your info</h1>
                        </div>
                    </div>
                    <div
                        onClick={() => handleClick(1)}
                        className="flex flex-row cursor-pointer">
                        <button
                            className={index === 1 ? "rounded-full text-black w-16 h-16 font-bold bg-[#BFE2FD] mr-4" : 'rounded-full text-white w-16 h-16 font-bold border-[2px] mr-4'}>2</button>
                        <div className='flex justify-center items-start flex-col'>
                            <p className='uppercase text-[#9699AB] font-normal'>Step 2</p>
                            <h1 className='uppercase text-white font-semibold'>Select plan</h1>
                        </div>
                    </div>
                    <div
                        onClick={() => handleClick(2)}
                        className="flex flex-row cursor-pointer">
                        <button
                            className={index === 2 ? "rounded-full text-black w-16 h-16 font-bold bg-[#BFE2FD] mr-4" : 'rounded-full text-white w-16 h-16 font-bold border-[2px] mr-4'}>3</button>
                        <div className='flex justify-center items-start flex-col'>
                            <p className='uppercase text-[#9699AB] font-normal'>Step 3</p>
                            <h1 className='uppercase text-white font-semibold'>add-ons</h1>
                        </div>
                    </div>
                    <div
                        onClick={() => handleClick(3)}
                        className="flex flex-row cursor-pointer">
                        <button
                            className={index === 3 ? "rounded-full text-black w-16 h-16 font-bold bg-[#BFE2FD] mr-4" : 'rounded-full text-white w-16 h-16 font-bold border-[2px] mr-4'}>4</button>
                        <div className='flex justify-center items-start flex-col'>
                            <p className='uppercase text-[#9699AB] font-normal'>Step 4</p>
                            <h1 className='uppercase text-white font-semibold'>Summary</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sidebar