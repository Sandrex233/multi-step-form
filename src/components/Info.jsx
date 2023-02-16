import React from 'react'

const Info = ({ setIndex, name, email, phone, stepOneErrors, setStepOneErrors, onNameChange, onEmailChange, onPhoneChange }) => {
    const validateEmail = (email) => {
        // simple email validation regex
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    };

    const handleStepOneNext = () => {
        const newStepOneErrors = {};
        if (!name) {
            newStepOneErrors.name = 'This field is required';
        }
        if (!email || !validateEmail(email)) {
            newStepOneErrors.email = 'Please enter your email address.';
        }
        if (!phone) {
            newStepOneErrors.phone = 'This field is required';
        }
        if (Object.keys(newStepOneErrors).length > 0) {
            setStepOneErrors(newStepOneErrors);
            return;
        }

        setIndex(1);
    };

    return (
        <div className='flex justify-center items-center flex-col mx-auto'>
            <div className="flex justify-center items-center p-10 flex-col mx-auto">
                <div className='space-y-3'>
                    <h1 className='text-[#02295A] text-3xl font-bold'>Personal info</h1>
                    <p className='text-[#9699AB] font-normal'>Please provide your name, email address, and phone number</p>
                </div>
                <form className="flex justify-center items-center p-10 flex-col mx-auto space-y-12">
                    <div className='space-y-10'>
                        <div className='space-y-4'>
                            <div className='flex flex-row justify-between'><h3>Name</h3><div>{stepOneErrors.name && <span className='text-red-500 text-[.95rem]'>{stepOneErrors.name}</span>}</div></div>
                            <input type="text" value={name}
                                className={`w-[28rem] peer px-3 h-[2.6rem] focus:outline-none focus:border-0 focus:ring-1 focus:ring-[#473DFF] border border-[#9699AB] rounded-md form-input ${stepOneErrors.name ? 'focus:ring-red-500 border-red-500' : ''}`}
                                onChange={onNameChange} required />

                        </div>
                        <div className='space-y-4'>
                            <div className='flex flex-row justify-between'><h3>Email Address</h3><div>{stepOneErrors.email && <span className='text-red-500 text-[.95rem]'>{stepOneErrors.email}</span>}</div></div>
                            <input type="email" value={email} placeholder='e.g. stephenking@lorem.com'
                                className={`w-[28rem] peer px-3 h-[2.6rem] focus:outline-none focus:border-0 focus:ring-1 focus:ring-[#473DFF] border border-[#9699AB] rounded-md form-input ${stepOneErrors.email ? 'focus:ring-red-500 border-red-500' : ''}`}
                                onChange={onEmailChange} required />
                        </div>
                        <div className='space-y-4'>
                            <div className='flex flex-row justify-between'><h3>Phone Number</h3><div>{stepOneErrors.phone && <span className='text-red-500 text-[.95rem]'>{stepOneErrors.phone}</span>}</div></div>
                            <input type="tel" value={phone} placeholder='e.g. +1 234 567 890'
                                className={`w-[28rem] peer px-3 h-[2.6rem] focus:outline-none focus:border-0 focus:ring-1 focus:ring-[#473DFF] border border-[#9699AB] rounded-md form-input ${stepOneErrors.phone ? 'focus:ring-red-500 border-red-500' : ''}`}
                                onChange={onPhoneChange} required />
                        </div>
                    </div>
                    <div className='translate-x-[10.8rem] mt-10'>
                        <button type='submit' onClick={handleStepOneNext} className='bg-[#02295A] hover:opacity-90 rounded-lg text-white p-3'>Next Step</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Info