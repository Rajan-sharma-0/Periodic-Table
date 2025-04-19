import React,{useState} from 'react';
import elements from './PeriodicTable';
import Lanthanoids from './Lanthanoids';
import Actinoids from './Actionoids';

const Periodic = () => {

    const [selectedPeriodic, setselectedPeriodic] = useState(null);

    const handleClick = (elements) => {
      setselectedPeriodic(elements);
    };
  
    const handleCloseDialog = () => {
      setselectedPeriodic(null);
    };
    // Define the size of the grid
    const rows = 7;
    const cols = 18;

    // Function to determine if a cell should be empty
    const isEmptyCell = (row, col) => {
        // Logic for empty cells
        return (row === 1 && col >= 2 && col <= 17) || (row === 2 && col >= 3 && col <= 12) ||
               (row === 3 && col >= 3 && col <= 12);
    };

    let elementIndex = 0; // Index to keep track of elements
    return (
        <div className='text-white mt-6 px-4 sm:px-6 md:px-8'>
            <h2 className="text-2xl font-extrabold mb-4 text-center mt-11 ml-6 text-white">
                Periodic Table
            </h2>
            {/* Scrollable container */}
            <div className="overflow-x-auto">
                <div className="grid grid-cols-[repeat(18,_minmax(0,_1fr))] grid-rows-7 min-w-[1200px] gap-2 p-5">
                    {Array.from({ length: rows }).map((_, row) => (
                        Array.from({ length: cols }).map((_, col) => {
                            if (isEmptyCell(row + 1, col + 1)) {
                                return (
                                    <div key={`${row}-${col}`}></div>
                                );
                            } else {
                                if (elementIndex < elements.length) {
                                    const element = elements[elementIndex];
                                    elementIndex++;
                                    return (
                                        <div
                                            key={`${row}-${col}`}
                                            className={`p-4 h-25 border border-gray-300 rounded-lg shadow-xl
                                                transition-shadow duration-200 transform hover:scale-110 hover:shadow-yellow-600
                                                ${element.type.toLowerCase().replace(/ /g, '-') ?
                                                `bg-${element.type.toLowerCase().replace(/ /g, '-')}` : 'bg-gray-200'}`}
                                                onClick={() => handleClick(element)}
                                        >
                                            <p className='text-sm top-0 left-0 text-white'>{element.atomicNumber}</p>
                                            <h2 className='text-sm font-semibold text-black mb-2'>{element.symbol}</h2>
                                        </div>
                                    );
                                }
                                return (
                                    <div key={`${row}-${col}`} className='p-2 border border-gray-300 rounded bg-gray-200'></div>
                                );
                            }
                        })
                    ))}
                </div>
            </div>
            {selectedPeriodic && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-sm overflow-y-auto text-black">
            <h3 className="text-2xl font-bold mb-4 text-center">{selectedPeriodic.name}</h3>
            <div className="grid grid-cols-1 gap-2">
              <p><strong>Atomic Number:</strong> {selectedPeriodic.atomicNumber}</p>
              <p><strong>Symbol:</strong> {selectedPeriodic.symbol}</p>
              <p><strong>Type:</strong> {selectedPeriodic.type}</p>
              <p><strong>Electronegativity:</strong> {selectedPeriodic.electronegativity}</p>
              <p><strong>Oxidation State:</strong> {selectedPeriodic.oxidationStates}</p>
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
      <Lanthanoids />
      <Actinoids />
        </div>
    );
};

export default Periodic;
