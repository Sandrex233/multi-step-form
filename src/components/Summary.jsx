import React from 'react'
import { planOptions } from '../data/PlanOptions';
import { addonOptions } from '../data/AddonOptions';

const Summary = ({ selectedAddons, selectedPlan, yearlyBilling }) => {

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
    const totalYearlyPrice = yearlyBilling ? parseInt(planOptionsYearlyPrice.slice(1)) + selectedAddonsPrice : parseInt(planOptionsYearlyPrice.slice(1)) * 12 + selectedAddonsPrice;

    // Calculate total monthly price
    const totalMonthlyPrice = !yearlyBilling ? parseInt(planOptionsMonthlyPrice.slice(1)) + selectedAddonsPrice : parseInt(planOptionsMonthlyPrice.slice(1)) / 12 + selectedAddonsPrice;


    return (
        <div>
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
        </div>
    );
}

export default Summary