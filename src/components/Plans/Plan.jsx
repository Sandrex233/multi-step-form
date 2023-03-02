import React from 'react'
import { planOptions } from '../../data/PlanOptions'
import PlanOptions from './PlanOptions';
import PlanSwitcher from './PlanSwitcher';

const Plan = ({ setIndex, selectedPlan, setSelectedPlan, yearlyBilling, setYearlyBilling }) => {

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
                    <PlanOptions
                        key={planOption.id}
                        planOption={planOption}
                        selectedPlan={selectedPlan}
                        setSelectedPlan={setSelectedPlan}
                        yearlyBilling={yearlyBilling}
                    />
                ))}
            </div>
            <div className="col-span-3 bg-[#F0F6FF] w-full flex justify-center p-2 rounded-md items-center mt-10">
                <PlanSwitcher
                    yearlyBilling={yearlyBilling}
                    setYearlyBilling={setYearlyBilling}
                />
            </div >
            <div className="mt-28">
                <div className="flex flex-row justify-between space-x-72">
                    <button onClick={handleStepTwoBack} className="bg-gray-100 text-gray-700  hover:bg-gray-200 py-2 px-4 rounded-lg">Go Back</button>
                    <button onClick={handleStepTwoNext} className='bg-[#02295A] hover:opacity-90 rounded-lg text-white p-3'>Next Step</button>
                </div>
            </div>
        </div >
    );
};

export default Plan