import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { actinides } from "./PeriodicTable";

const Actinoids = () => {
  const [selectedActinide, setSelectedActinide] = useState(null);

  const handleClick = (actinide) => {
    setSelectedActinide(actinide);
  };

  const handleCloseDialog = () => {
    setSelectedActinide(null);
  };

  return (
    <div className="text-white mt-6 px-4 sm:px-6 md:px-8">
      {/* Typewriter Effect */}
      <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold mb-4 text-center sm:text-left text-white">
        <Typewriter
          options={{
            strings: ["Actinoids"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </h2>

      {/* Actinide Grid Wrapper with Horizontal Scroll */}
      <div className="overflow-x-auto">
        <div className="grid grid-cols-[repeat(15,_minmax(0,_1fr))] gap-2 p-5 min-w-[1200px]">
          {actinides.map((actinide) => (
            <div
              key={actinide.atomicNumber}
              className="p-4 h-25 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:scale-110 hover:shadow-white bg-actinide"
              onClick={() => handleClick(actinide)}
            >
              <p className="text-sm top-0 left-0 text-white">{actinide.atomicNumber}</p>
              <h2 className="text-sm font-semibold text-black mb-2">{actinide.symbol}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Dialog Box */}
      {selectedActinide && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-sm overflow-y-auto text-black">
            <h3 className="text-2xl font-bold mb-4 text-center">{selectedActinide.name}</h3>
            <div className="grid grid-cols-1 gap-2">
              <p><strong>Atomic Number:</strong> {selectedActinide.atomicNumber}</p>
              <p><strong>Symbol:</strong> {selectedActinide.symbol}</p>
              <p><strong>Type:</strong> {selectedActinide.type}</p>
              <p><strong>Electronegativity:</strong> {selectedActinide.electronegativity}</p>
              <p><strong>Oxidation State:</strong> {selectedActinide.oxidationState}</p>
              {/* Add more details as needed */}
            </div>
            <button
              className="mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
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

export default Actinoids;
