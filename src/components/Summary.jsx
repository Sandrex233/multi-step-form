import React, { useState } from 'react'
import { planOptions } from '../data/PlanOptions';
import { addonOptions } from '../data/AddonOptions';
import thankYou from '../assets/images/icon-thank-you.svg';

const Summary = ({ selectedAddons, selectedPlan, yearlyBilling }) => {
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
        // handle go back
    }


    return (
        <>
            {!confirmed ? (<div>
                <h2>Summary</h2>
                <p>
                    Plan: {selectedPlan} {yearlyBilling ? planOptionsYearlyPrice : planOptionsMonthlyPrice} per {yearlyBilling ? 'year' : 'month'}
                </p>
                {selectedAddons.length > 0 && (
                    <>
                        <p>Add-ons:</p>
                        <ul>
                            {selectedAddons.map((addonId) => {
                                const addon = addonOptions.find((option) => option.id === addonId);
                                return (
                                    <li key={addon.id}>
                                        {addon.title} -{' '}
                                        {yearlyBilling ? addon.yearlyPrice : addon.monthlyPrice}
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                )}
                <p>Total: +{yearlyBilling ? `$${totalYearlyPrice}/yr` : `$${totalMonthlyPrice}/mo`} </p>
                <div>
                    <button
                        className="px-4 py-2 text-gray-500 bg-gray-100 rounded hover:bg-gray-200"
                        onClick={handleGoBack}
                    >
                        Go back
                    </button>
                    <button
                        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                        onClick={handleConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </div>) : (
                <div className="flex flex-col items-center">
                    <img src={thankYou} alt="Thank You" className="w-16 h-16 mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
                    <p className="text-gray-500 text-center flex px-48 leading-6 text-base">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
                </div>
            )}
        </>


    );
}

export default Summary