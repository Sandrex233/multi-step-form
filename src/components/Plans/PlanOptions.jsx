import React from 'react'

const PlanOptions = ({ planOption, selectedPlan, setSelectedPlan, yearlyBilling }) => {

    const handlePlanSelect = (id) => {
        setSelectedPlan(id);
    };


    return (
        <div
            key={planOption.id}
            className={`border not-selectable rounded-lg p-4 w-36 cursor-pointer  ${selectedPlan === planOption.id ? 'border-[#473DFF] bg-[#2921cc0e]' : 'border-gray-200 hover:border-[#473DFF]'
                }`}
            onClick={() => handlePlanSelect(planOption.id)}
        >
            <div className="flex flex-col">
                <img src={planOption.image} alt={planOption.title} className="h-12 w-10" />
                <h3 className="text-lg font-medium mt-5 text-[#02295A] ">{planOption.title}</h3>
            </div>
            <p className="text-gray-500">{yearlyBilling ? planOption.yearlyPrice : planOption.monthlyPrice}</p>
            {yearlyBilling && <span className="text-[#02295A] text-sm font-medium">2 months free</span>}
        </div>
    )
}

export default PlanOptions