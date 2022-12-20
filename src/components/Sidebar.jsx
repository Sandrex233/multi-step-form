import React from 'react'
import sidebarBgDsk from '../assets/images/bg-sidebar-desktop.svg'

const Sidebar = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${sidebarBgDsk})` }} className='h-screen max-w-[300px] flex-col bg-blend-normal bg-cover bg-center flex items-center justify-center space-y-36'>
                <div className='space-y-10'>
                    <div className="flex flex-row">
                        <button className='rounded-full text-white w-16 h-16 border'>1</button>
                        <div>
                            <p className='uppercase text-gray-500 font-semibold'>Step 1</p>
                            <h1 className='uppercase text-white font-semibold'>Your info</h1>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <button className='rounded-full text-white w-16 h-16 border'>1</button>
                        <div>
                            <p className='uppercase text-white font-semibold'>Step 1</p>
                            <h1 className='uppercase text-white font-semibold'>Your info</h1>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <button className='rounded-full text-white w-16 h-16 border'>1</button>
                        <div>
                            <p className='uppercase text-white font-semibold'>Step 1</p>
                            <h1 className='uppercase text-white font-semibold'>Your info</h1>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <button className='rounded-full text-white w-16 h-16 border'>1</button>
                        <div>
                            <p className='uppercase text-white font-semibold'>Step 1</p>
                            <h1 className='uppercase text-white font-semibold'>Your info</h1>
                        </div>
                    </div>
                </div>
                <div className=''></div>
            </div>
        </div>
    )
}

export default Sidebar