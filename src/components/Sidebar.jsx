import React, { useState } from 'react'
import sidebarBgDsk from '../assets/images/bg-sidebar-desktop.svg'

const Sidebar = () => {
    const [index, setIndex] = useState(0)

    const handleClick = (idx) => {
        setIndex(idx)
    }

    return (
        <div>
            <div style={{ backgroundImage: `url(${sidebarBgDsk})` }} className='h-screen max-w-[300px] flex-col bg-blend-normal bg-cover bg-center flex items-center justify-center space-y-36'>
                <div className='space-y-10'>
                    <div className="flex flex-row">
                        <button
                            onClick={() => handleClick(0)}
                            className={index === 0 ? "rounded-full text-black w-16 h-16 font-bold bg-[#BFE2FD] mr-4" : 'rounded-full text-white w-16 h-16 font-bold border-[2px] mr-4'}>1</button>
                        <div className='flex justify-center items-start flex-col'>
                            <p className='uppercase text-[#9699AB] font-normal'>Step 1</p>
                            <h1 className='uppercase text-white font-semibold'>Your info</h1>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <button
                            onClick={() => handleClick(1)}
                            className={index === 1 ? "rounded-full text-black w-16 h-16 font-bold bg-[#BFE2FD] mr-4" : 'rounded-full text-white w-16 h-16 font-bold border-[2px] mr-4'}>2</button>
                        <div className='flex justify-center items-start flex-col'>
                            <p className='uppercase text-[#9699AB] font-semibold'>Step 2</p>
                            <h1 className='uppercase text-white font-semibold'>Your info</h1>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <button
                            onClick={() => handleClick(2)}
                            className={index === 2 ? "rounded-full text-black w-16 h-16 font-bold bg-[#BFE2FD] mr-4" : 'rounded-full text-white w-16 h-16 font-bold border-[2px] mr-4'}>3</button>
                        <div className='flex justify-center items-start flex-col'>
                            <p className='uppercase text-[#9699AB] font-semibold'>Step 3</p>
                            <h1 className='uppercase text-white font-semibold'>Your info</h1>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <button
                            onClick={() => handleClick(3)}
                            className={index === 3 ? "rounded-full text-black w-16 h-16 font-bold bg-[#BFE2FD] mr-4" : 'rounded-full text-white w-16 h-16 font-bold border-[2px] mr-4'}>4</button>
                        <div className='flex justify-center items-start flex-col'>
                            <p className='uppercase text-[#9699AB] font-semibold'>Step 4</p>
                            <h1 className='uppercase text-white font-semibold'>Your info</h1>
                        </div>
                    </div>
                </div>
                <div className=''></div>
            </div>
        </div >
    )
}

export default Sidebar