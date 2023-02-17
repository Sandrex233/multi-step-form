import React from 'react'

const Addons = ({ yearlyBilling, setIndex, selectedAddons, setSelectedAddons }) => {
    const addonOptions = [
        { id: 'online-service', title: 'Online Service', price: yearlyBilling ? '$10/yr' : '$1/mo', },
        { id: 'larger-storage', title: 'Larger Storage', price: yearlyBilling ? '$20/yr' : '$2/mo', },
        { id: 'custom-profile', title: 'Customizable Profile', price: yearlyBilling ? '$20/yr' : '$2/mo', },
    ];

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

    const handleStepThreeBack = () => {
        setIndex(1);
    };

    const handleStepThreeNext = () => {
        setIndex(3);
    };

    return (
        <div className="flex justify-center items-center flex-col mx-auto p-10">
            <div className='space-y-3 flex flex-col self-start mb-14'>
                <h1 className='text-[#02295A] text-4xl font-bold'>Pick add-ons</h1>
                <p className='text-[#9699AB] text-lg font-normal'>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className="w-full flex flex-col items-center">
                {addonOptions.map((addonOption) => (
                    <div key={addonOption.id} onClick={() => handleAddonToggle(addonOption.id)}
                        className="w-full p-6 not-selectable bg-white rounded-lg cursor-pointer shadow-md mb-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id={addonOption.id}
                                className="h-4 w-4 text-green-600 transition duration-150 ease-in-out"
                                checked={selectedAddons.includes(addonOption.id)}
                                onChange={() => handleAddonToggle(addonOption.id)}
                            />
                            <div className='flex flex-col items-start'>
                                <label htmlFor={addonOption.id} className="block text-sm  cursor-pointer leading-5 font-medium text-gray-700">
                                    {addonOption.title}
                                </label>
                                {addonOption.price && (
                                    <div className="mt-2 text-gray-500 text-sm">+{addonOption.price}</div>
                                )}
                            </div>

                        </div>

                    </div>
                ))}
            </div>
            <div className="flex justify-between w-full mt-8">
                <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg" onClick={handleStepThreeBack}>
                    Go Back
                </button>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg" onClick={handleStepThreeNext}>
                    Go Next
                </button>
            </div>
        </div >
    )
}

export default Addons