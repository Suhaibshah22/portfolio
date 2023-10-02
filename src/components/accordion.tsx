"use client";
import React, { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="border rounded-md shadow-md">
        <div className="border-b p-4 cursor-pointer" onClick={toggleAccordion}>
          <h2 className="text-lg font-semibold">Accordion Title</h2>
          <svg
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width="20"
            height="20"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {isOpen && (
          <div className="p-4">
            <p className="text-gray-700">Content of the accordion goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
