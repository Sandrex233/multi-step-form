import React, { useState } from 'react'
import { planOptions } from '../../data/PlanOptions';
import { addonOptions } from '../../data/AddonOptions';
import ThankYouPage from './ThankYouPage';
import SummaryAddons from './SummaryAddons';

const Summary = ({ selectedAddons, setIndex, selectedPlan, yearlyBilling }) => {
    const [confirmed, setConfirmed] = useState(false)

    const newSelectedPlan = planOptions.find(option => option.id === selectedPlan)
    const planOptionsYearlyPrice = newSelectedPlan.yearlyPrice
    const planOptionsMonthlyPrice = newSelectedPlan.monthlyPrice

    // Calculate total addon price based on selected plan
    const selectedAddonsPrice = selectedAddons.reduce((total, addonId) => {
        const addon = addonOptions.find((option) => option.id === addonId);
        if (yearlyBilling) {
            total += parseInt(addon.yearlyPrice.slice(1));
        } else {
            total += parseInt(addon.monthlyPrice.slice(1));
        }
        return total;
    }, 0);

    // Calculate total yearly price
    const totalYearlyPrice = yearlyBilling
        ? parseInt(planOptionsYearlyPrice.slice(1)) + selectedAddonsPrice
        : parseInt(planOptionsYearlyPrice.slice(1)) * 12 + selectedAddonsPrice;

    // Calculate total monthly price
    const totalMonthlyPrice = !yearlyBilling
        ? parseInt(planOptionsMonthlyPrice.slice(1)) + selectedAddonsPrice
        : parseInt(planOptionsMonthlyPrice.slice(1)) / 12 + selectedAddonsPrice;


    const handleConfirm = () => {
        setConfirmed(true);
    }

    const handleGoBack = () => {
        setIndex(2);
    }

    const handleChangePlan = () => {
        setIndex(1);
    }

    const selectedPlanUpperCase = selectedPlan.substring(0, 1).toUpperCase() + selectedPlan.substring(1)

    return (
        <>
            {!confirmed ? (
                <div className="flex justify-center items-center flex-col mx-auto p-10">
                    <div className='space-y-3 flex flex-col self-start mb-14'>
                        <h1 className='text-[#02295A] text-4xl font-bold'>Finishing up</h1>
                        <p className='text-[#9699AB] text-lg font-normal'>Double-check everything looks OK before confirming.</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg w-full py-4 px-6 mb-6">
                        <div className="flex justify-between p-1">
                            <div className="flex flex-col">
                                <p className="text-[#02295A] font-medium">
                                    {selectedPlanUpperCase} ({yearlyBilling ? "Yearly" : "Monthly"})
                                </p>
                                <div className="text-[#473DFF] hover:opacity-70 cursor-pointer">
                                    <u onClick={handleChangePlan}>Change</u>
                                </div>
                            </div>
                            <p className="text-[#02295A] font-medium">
                                {yearlyBilling ? planOptionsYearlyPrice : planOptionsMonthlyPrice}
                            </p>
                        </div>
                        {selectedAddons.length > 0 && (
                            <SummaryAddons
                                selectedAddons={selectedAddons}
                                addonOptions={addonOptions}
                                yearlyBilling={yearlyBilling}
                            />
                        )}
                    </div>
                    <div className="bg-white rounded-lg w-full py-1 px-6 mb-6">
                        <div className="flex justify-between items-center flex-grow">
                            <p className="text-gray-500">Total (per {yearlyBilling ? "year" : "month"})</p>
                            <p className="text-[#473DFF] font-bold">
                                {yearlyBilling ? `$${totalYearlyPrice}/yr` : `$${totalMonthlyPrice}/mo`}
                            </p>
                        </div>
                    </div>
                    <div className="w-full mt-24 px-6">
                        <div className="flex justify-between space-x-4 mb-4">
                            <button
                                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                                onClick={handleGoBack}
                            >
                                Go back
                            </button>
                            <button
                                className="bg-[#473DFF] hover:opacity-70 text-white py-2 px-4 rounded-lg"
                                onClick={handleConfirm}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div >
            ) : (
                <ThankYouPage />
            )}
        </>
    );
}

export default Summary