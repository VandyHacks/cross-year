import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const CollapsingNav = () => {
const [isOpen, setIsOpen] = useState(false);

  return (
        <div className="visible sm:invisible pt-5 pr-1">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="" aria-controls="mobile-menu" aria-expanded="false">
                {!isOpen ? (
                <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"/>

                </svg>
                ) : (
                <div>
                    <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">

                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"/>

                    </svg>
                    
                    <div className="md:hidden" id="mobile-menu">
                        <a className="text-white hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium"> About </a>
                        <a className="text-white hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium"> Events </a>
                    </div>
                  </div>
            )}
            </button>
        </div>
        
  );
};

export default CollapsingNav;
