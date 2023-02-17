import React from 'react'
import Arcade from '../assets/images/icon-arcade.svg'
import Advanced from '../assets/images/icon-advanced.svg'
import Pro from '../assets/images/icon-pro.svg'

const Plan = ({ setIndex, selectedPlan, setSelectedPlan, yearlyBilling, setYearlyBilling }) => {

    const planOptions = [
        { title: 'Arcade', price: yearlyBilling ? '$90/yr' : '$9/mo', savings: yearlyBilling ? '2 months free' : null, id: 'arcade', image: Arcade },
        { title: 'Advanced', price: yearlyBilling ? '$120/yr' : '$12/mo', savings: yearlyBilling ? '2 months free' : null, id: 'advanced', image: Advanced },
        { title: 'Pro', price: yearlyBilling ? '$150/yr' : '$15/mo', savings: yearlyBilling ? '2 months free' : null, id: 'pro', image: Pro },
    ];

    const handlePlanSelect = (id) => {
        setSelectedPlan(id);
        localStorage.setItem('selectedPlan', id); // Save the selected plan to local storage
    };

    const handleBillingSelect = () => {
        setYearlyBilling(!yearlyBilling);
    };

    const handleStepTwoBack = () => {
        setIndex(0);
    };

    const handleStepTwoNext = () => {
        setIndex(2);
    };


    return (
        <div className="flex justify-center items-center flex-col mx-auto p-10">
            <div className='space-y-3 flex flex-col self-start mb-14'>
                <h1 className='text-[#02295A] text-4xl font-bold'>Select your plan</h1>
                <p className='text-[#9699AB] text-lg font-normal'>You have the option of monthly or yearly billing.</p>
            </div>
            <div className='max-w-lg grid grid-cols-3 gap-5'>
                {planOptions.map((planOption) => (
                    <div
                        key={planOption.id}
                        className={`border rounded-lg p-4 w-36 cursor-pointer ${selectedPlan === planOption.id ? 'border-[#473DFF] bg-[#2921cc0e]' : 'border-gray-200'
                            }`}
                        onClick={() => handlePlanSelect(planOption.id)}
                    >
                        <div className="flex flex-col">
                            <img src={planOption.image} alt={planOption.title} className="h-12 w-10" />
                            <h3 className="text-lg font-medium mt-5 text-[#02295A] ">{planOption.title}</h3>
                        </div>
                        <p className="text-gray-500">{planOption.price}</p>
                        {yearlyBilling && <span className="text-[#02295A] text-sm font-medium">2 months free</span>}
                    </div>
                ))}
            </div>
            <div className="col-span-3 bg-[#F0F6FF] w-full flex justify-center p-2 rounded-md items-center mt-10">
                <label htmlFor="billing-toggle" className="inline-flex items-center cursor-pointer">
                    <div
                        className={`text-sm leading-tight ${yearlyBilling ? "text-gray-500 font-medium" : "font-bold text-[#02295A] "
                            } mr-4`}
                    >
                        Monthly
                    </div>
                    <div className="relative">
                        <input type="checkbox" id="billing-toggle" className="sr-only" checked={yearlyBilling} onChange={handleBillingSelect} />
                        <div
                            className={`block bg-gray-600 w-14 h-8 rounded-full transition duration-300 ease-in-out ${yearlyBilling ? 'bg-[#0a2649]' : 'bg-gray-200'
                                }`}
                        />
                        <div
                            className={`absolute w-6 h-6 rounded-full bg-white shadow top-1 left-1 transition duration-300 ease-in-out ${yearlyBilling ? 'transform translate-x-full' : ''
                                }`}
                        />
                    </div>
                    <div
                        className={`text-sm leading-tight ${yearlyBilling ? "font-bold text-[#02295A]" : "text-gray-600 font-medium"
                            } ml-4`}
                    >
                        Yearly
                    </div>
                </label>
            </div >
            <div className="mt-28">
                <div className="flex flex-row justify-between space-x-72">
                    <button type='submit' onClick={handleStepTwoBack} className="bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg focus:outline-none">Go Back</button>
                    <button type='submit' onClick={handleStepTwoNext} className='bg-[#02295A] hover:opacity-90 rounded-lg text-white p-3'>Next Step</button>
                </div>
            </div>
        </div >
    );
};

export default Plan