import React from 'react'

import thankYou from '../../assets/images/icon-thank-you.svg';
import Confetti from 'react-confetti';

const ThankYouPage = () => {
    return (
        <>
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={200}
                recycle={false}
            />
            <body className="pl-36">
                <div className="flex flex-col items-center justify-center lg:max-w-xl">
                    <div className="flex flex-col items-center">
                        <img src={thankYou} alt="Thank You" className="w-20 h-20 mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
                        <p className="text-gray-500 text-center leading-6 text-base">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
                    </div>
                </div>
            </body>
        </>
    )
}

export default ThankYouPage