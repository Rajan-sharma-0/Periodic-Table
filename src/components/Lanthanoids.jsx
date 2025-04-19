import React, { useState } from "react";
import { lanthanides } from "./PeriodicTable";
import Typewriter from "typewriter-effect";

const Lanthanoids = () => {
  const [selectedLanthanide, setselectedLanthanide] = useState(null);

  const handleClick = (lanthanide) => {
    setselectedLanthanide(lanthanide);
  };

  const handleCloseDialog = () => {
    setselectedLanthanide(null);
  };

  return (
    <div className="text-white mt-6 px-4 sm:px-6 md:px-8">
      <h2 className="text-xl sm:text-3xl md:text-2xl font-bold mb-4 text-center sm:text-left">
        <Typewriter
          options={{
            strings: ["Lanthanoids"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </h2>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-[repeat(15,_minmax(0,_1fr))] gap-2 p-5 min-w-[1200px]">
          {lanthanides.map((lanthanide) => (
            <div
              key={lanthanide.atomicNumber}
              className="p-4 h-25 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:shadow-white hover:scale-110 bg-lanthanide"
              onClick={() => handleClick(lanthanide)}
            >
              <p className="text-sm top-0 left-0">{lanthanide.atomicNumber}</p>
              <h2 className="text-sm font-semibold text-black mb-2">
                {lanthanide.symbol}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {selectedLanthanide && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
          onClick={handleCloseDialog}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-sm overflow-y-auto text-black"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <h3 className="text-2xl font-bold mb-4 text-center">
              {selectedLanthanide.name}
            </h3>
            <div className="grid grid-cols-1 gap-2">
              <p>
                <strong>Atomic Number:</strong> {selectedLanthanide.atomicNumber}
              </p>
              <p>
                <strong>Symbol:</strong> {selectedLanthanide.symbol}
              </p>
              <p>
                <strong>Type:</strong> {selectedLanthanide.type}
              </p>
              <p>
                <strong>Electronegativity:</strong>{" "}
                {selectedLanthanide.electronegativity}
              </p>
              <p>
                <strong>Oxidation State:</strong>{" "}
                {selectedLanthanide.oxidationState}
              </p>
            </div>
            <button
              className="mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={handleCloseDialog}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lanthanoids;
