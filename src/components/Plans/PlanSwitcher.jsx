import React from 'react'

const PlanSwitcher = ({ yearlyBilling, setYearlyBilling }) => {

    const handleBillingSelect = () => {
        setYearlyBilling(!yearlyBilling);
    };

    return (
        <>
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
        </>
    )
}

export default PlanSwitcher