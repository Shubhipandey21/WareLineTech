'use client'
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ThankYou = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            {/* Green Tick GIF */}
            <div className="animate-bounce mb-6">

                <DotLottieReact
                    className="w-fit h-96"
                    src="/Case-study/greenTick.lottie"
                    loop
                    autoplay
                />

            </div>

            {/* Thank You Message */}
            <h1 className="text-4xl font-semibold text-gray-800 mb-4">Thank You!</h1>
            <p className="text-lg text-gray-600 mb-2">We appreciate your Efforts.</p>
            <p className="text-lg text-gray-600">We'll get back to you in a few days.</p>
        </div>
    );
};

export default ThankYou;
