import React from 'react'
import { addonOptions } from '../../data/AddonOptions'
import AddonOption from './AddonOption';


const Addons = ({ yearlyBilling, setIndex, selectedAddons, setSelectedAddons }) => {

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
                    <AddonOption
                        addonOption={addonOption}
                        key={addonOption.id}
                        selectedAddons={selectedAddons}
                        setSelectedAddons={setSelectedAddons}
                        yearlyBilling={yearlyBilling}
                    />
                ))}
            </div>
            <div className="flex justify-between w-full mt-8">
                <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 py-2 px-4 rounded-lg" onClick={handleStepThreeBack}>
                    Go Back
                </button>
                <button className="bg-[#02295A] hover:opacity-90 text-white py-2 px-4 rounded-lg" onClick={handleStepThreeNext}>
                    Go Next
                </button>
            </div>
        </div >
    )
}

export default Addons