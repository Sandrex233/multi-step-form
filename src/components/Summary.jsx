// import React from 'react'

const Summary = ({ selectedPlan, selectedAddons }) => {

    // Calculate the total price
    try {
        console.log(selectedAddons)
    } catch (err) {
        console.log(err)
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Selected Plan: {selectedPlan.title} ({selectedPlan.price})</p>
            <p>Selected Add-Ons:</p>
            <ul>
                {selectedAddons.map((addon) => (
                    <li key={addon.id}>{addon.title} ({addon.price})</li>
                ))}
            </ul>
        </div>
    );
}

export default Summary