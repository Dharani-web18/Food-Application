
import React from 'react';
import FoodieLogo from '../assets/FoodieLogo.png'; // Adjust the path based on your project structure

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full p-1 bg-white bg-opacity-30 text-black z-50 backdrop-blur-xl shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <img src={FoodieLogo} alt="Foodie Logo" className="h-8" />
                </div>
                <div className="hidden md:flex"> {/* Hidden on mobile and visible on medium screens and up */}
                    <button
                        type="submit"
                        className="bg-red-500 text-white py-1 px-2 rounded-full text-sm"
                    >
                        Join the Waitlist
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
