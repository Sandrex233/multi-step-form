import React from 'react'

const SummaryAddons = ({ selectedAddons, addonOptions, yearlyBilling }) => {
    return (
        <div>
            <hr className="my-3" />
            {selectedAddons.map((addonId) => {
                const addon = addonOptions.find((option) => option.id === addonId);
                return (
                    <div className="flex p-1 justify-between space-y-3" key={addon.id}>
                        <p className="text-gray-500">{addon.title}</p>
                        <p className="text-[#02295A]">+{yearlyBilling ? addon.yearlyPrice : addon.monthlyPrice}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default SummaryAddons