import React from 'react'

const Info = ({ setIndex }) => {
    const nextStep = () => {
        setIndex(curIdx => curIdx + 1)
    }

    return (
        <div className='flex justify-center items-center flex-col mx-auto'>
            <div className="flex justify-center items-center p-10 flex-col mx-auto">
                <div className='space-y-3'>
                    <h1 className='text-[#02295A] text-3xl font-bold'>Personal info</h1>
                    <p className='text-[#9699AB] font-normal'>Please provide your name, email address, and phone number</p>
                </div>
                <form className="flex justify-center items-center p-10 flex-col mx-auto space-y-12">
                    <div className='space-y-12'>
                        <div className='space-y-4'>
                            <h3>Name</h3>
                            <input type="text" className='w-[28rem] peer px-3 h-[2.3rem] focus:outline-none focus:border-0 focus:ring-1 focus:ring-[#473DFF] border border-[#9699AB] rounded-md' required />
                        </div>
                        <div className='space-y-4'>
                            <h3>Email Address</h3>
                            <input type="text" className='w-[28rem] peer px-3 h-[2.3rem] focus:outline-none focus:border-0 focus:ring-1 focus:ring-[#473DFF] border border-[#9699AB] rounded-md' required />
                        </div>
                        <div className='space-y-4'>
                            <h3>Phone Number</h3>
                            <input type="text" className='w-[28rem] peer px-3 h-[2.3rem] focus:outline-none focus:border-0 focus:ring-1 focus:ring-[#473DFF] border border-[#9699AB] rounded-md' required />
                        </div>
                    </div>
                    <div className='translate-x-[10.8rem] mt-10'>
                        <button type='submit' onClick={nextStep} className='bg-[#02295A] hover:opacity-90 rounded-lg text-white p-3'>Next Step</button>
                    </div>
                </form >

            </div >
        </div >
    )
}

export default Info