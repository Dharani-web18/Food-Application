
import React, { useState } from 'react';

function FormSection() {
    // State to manage form submission
    const [isSubmitted, setIsSubmitted] = useState(false);

    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        setIsSubmitted(true); 
    };

    return (
        <div className="bg-red-200 p-5">
            {isSubmitted ? (
                // Thank You message after form submission
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-orange-600 mb-10 mt-5">Join The Waitlist</h2>
                    <h2 className="text-2xl font-bold text-orange-600 mb-6">Thank You!</h2>
                </div>
            ) : (
                // Form content before submission
                <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-screen-sm mx-auto">
                    <h2 className="text-2xl text-center mb-4 font-bold text-orange-600">Join The Waitlist</h2>
                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                        <input
                            type="text"
                            className="border-gray-900 bg-white px-3 py-2 text-black rounded-lg"
                            placeholder="Name"
                            required
                        />
                        <input
                            type="text"
                            className="border-gray-900 bg-white px-3 py-2 text-black rounded-lg"
                            placeholder="Phone Number"
                            required
                        />
                        <input
                            type="text"
                            className="border-gray-900 bg-white px-3 py-2 text-black rounded-lg"
                            placeholder="City"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-orange-500 text-black font-bold py-1 px-2 rounded-full text-sm mb-4"
                    >
                        Join The Wallet
                    </button>
                </form>
            )}
        </div>
    );
}

export default FormSection;
