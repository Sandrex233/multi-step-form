import React from 'react'
import checkmark from '../../assets/images/icon-checkmark.svg';

const AddonOption = ({ addonOption, setSelectedAddons, selectedAddons, yearlyBilling }) => {

    const handleAddonToggle = (addonId) => {
        setSelectedAddons((prevSelectedAddons) => {
            if (prevSelectedAddons.includes(addonId)) {
                // Remove addon from selected addons if it's already selected
                return prevSelectedAddons.filter((id) => id !== addonId);
            } else {
                // Add addon to selected addons if it's not already selected
                return [...prevSelectedAddons, addonId];
            }
        });
    };

    return (
        <div
            onClick={() => handleAddonToggle(addonOption.id)}
            className={`w-full p-6 not-selectable bg-white rounded-lg cursor-pointer mb-4 border hover:border-[#473DFF]
                                ${selectedAddons.includes(addonOption.id) ? 'border-[#473DFF] bg-[#2921cc0e]' : 'border-gray-200 '}`}>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id={addonOption.id}
                    className={`h-4 w-4 opacity-0 absolute ${selectedAddons.includes(addonOption.id) ? "bg-purple-500" : ""}`}
                    checked={selectedAddons.includes(addonOption.id)}
                    onChange={() => handleAddonToggle(addonOption.id)}
                />
                <div
                    className={`h-4 w-4 flex items-center justify-center border-gray-500 rounded-sm border border-transparent ${selectedAddons.includes(addonOption.id)
                        ? 'bg-[#473DFF] border-[#473DFF]'
                        : 'hover:bg-gray-100'
                        } cursor-pointer`}
                    onClick={() => handleAddonToggle(addonOption.id)}
                >
                    <img src={checkmark} alt="checkmark" />
                </div>
                <div className='flex items-center ml-4'>
                    <div className='flex flex-col items-start'>
                        <label htmlFor={addonOption.id} className="block mb-1 text-[#02295A] text-sm cursor-pointer font-medium">
                            {addonOption.title}
                        </label>
                        <div className=" text-gray-500 text-sm">{addonOption.description}</div>
                    </div>
                </div>
                <div className="ml-auto mt-2 text-gray-500 text-sm">+{yearlyBilling ? addonOption.yearlyPrice : addonOption.monthlyPrice}</div>
            </div>
        </div>
    )
}

export default AddonOption