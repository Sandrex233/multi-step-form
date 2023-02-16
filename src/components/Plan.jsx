import React, { useState } from 'react'
import Arcade from '../assets/images/icon-arcade.svg'
import Advanced from '../assets/images/icon-advanced.svg'
import Pro from '../assets/images/icon-pro.svg'

const Plan = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [yearlyBilling, setYearlyBilling] = useState(false);

    const planOptions = [
        { title: 'Arcade', price: yearlyBilling ? '$90 / year' : '$9 / month', savings: yearlyBilling ? '2 months free' : null, id: 'arcade', image: Arcade },
        { title: 'Advanced', price: yearlyBilling ? '$120 / year' : '$12 / month', savings: yearlyBilling ? '2 months free' : null, id: 'advanced', image: Advanced },
        { title: 'Pro', price: yearlyBilling ? '$150 / year' : '$15 / month', savings: yearlyBilling ? '2 months free' : null, id: 'pro', image: Pro },
    ];

    const handlePlanSelect = (id) => {
        setSelectedPlan(id);
    };

    const handleBillingSelect = () => {
        setYearlyBilling(!yearlyBilling);
    };


    return (
        <div className="flex justify-center items-center flex-col mx-auto">
            <div className="max-w-lg grid grid-cols-3 gap-4">
                {planOptions.map((planOption) => (
                    <div
                        key={planOption.id}
                        className={`border rounded-lg p-4 cursor-pointer ${selectedPlan === planOption.id ? 'border-green-600' : 'border-gray-200'
                            }`}
                        onClick={() => handlePlanSelect(planOption.id)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium">{planOption.title}</h3>
                            <img src={planOption.image} alt={planOption.title} className="h-8 w-8" />
                        </div>
                        <p className="mt-2 text-gray-500">{planOption.price}</p>
                        {yearlyBilling && <span className="text-green-600 text-sm font-medium">2 months free</span>}
                    </div>
                ))}
            </div>
            <div className="col-span-3 flex justify-center items-center">
                <label htmlFor="billing-toggle" className="inline-flex items-center cursor-pointer">
                    <div
                        className={`text-sm font-medium ${!yearlyBilling ? "font-extrabold" : ""
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
                        className={`text-sm font-medium ${yearlyBilling ? "font-extrabold" : ""
                            } ml-4`}
                    >
                        Yearly
                    </div>
                </label>
            </div>
        </div >


    );

};

{/* <div className='flex justify-center items-center flex-col mx-auto'>
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
                            {plans[0].name}
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
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`bg-white rounded-lg shadow-md p-6 flex-grow ${selectedPlan.name === plan.name ? 'border-2 border-green-400' : 'border'
                                }`}
                            onClick={() => handlePlanChange(plan)}
                        >
                            <h2 className="font-medium text-lg mb-2">{plan.name}</h2>
                            <p className="text-gray-500 mb-4">${plan.monthlyPrice}/mo</p>
                            {isYearlyBilling && <p className="text-sm text-gray-500 mb-2">2 months free!</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div> */}

export default Plan