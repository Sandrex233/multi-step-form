import React from 'react'
import Arcade from '../assets/images/icon-arcade.svg'
import Advanced from '../assets/images/icon-advanced.svg'
import Pro from '../assets/images/icon-pro.svg'

const Plan = () => {
    return (
        <div className='flex justify-center items-center flex-col mx-auto'>
            <div className="flex justify-center items-start p-10 space-y-10 flex-col mx-auto">
                <div className='space-y-3'>
                    <h1 className='text-[#02295A] text-4xl font-bold'>Select your plan</h1>
                    <p className='text-[#9699AB] text-lg font-normal'>You have the option of monthly or yearly billing.</p>
                </div>
                <div className='hidden md:grid md:grid-cols-3 gap-4'>
                    <div
                        className='container flex flex-col border w-40 h-44 items-start cursor-pointer hover:border-[#473DFF] rounded-md '>
                        <img src={Arcade} alt="Arcade" className='p-4' />
                        <span className='mt-5 ml-5 text-lg  text-start font-normal text-[#02295A]'>
                            Arcade
                        </span>
                    </div>

                    <div
                        className='container flex flex-col border items-start cursor-pointer hover:border-[#473DFF] rounded-md'>
                        <img src={Advanced} alt="Advanced" className='p-4' />

                        <span className='mt-5 ml-5 text-lg text-start font-normal text-[#02295A]'>
                            Advanced
                        </span>
                    </div>

                    <div
                        className='container flex flex-col border items-start cursor-pointer hover:bg-[#473dff21] hover:border-[#473DFF] rounded-md'>
                        <img src={Pro} alt="Pro" className='p-4' />

                        <span className='mt-5 ml-5 text-lg text-start font-normal text-[#02295A]'>
                            Pro
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plan