import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register the necessary components for the chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AtomicRadii = ({ atomicRadii }) => {
    const [selectedInfo, setSelectedInfo] = useState("");

    const handleClick = (element, radius) => {
        // Display the element's details in the selectedInfo state
        setSelectedInfo(`Element: ${element}, Atomic Radius: ${radius}`);
    };

    // Prepare data for the line chart
    const chartData = {
        labels: atomicRadii.map(({ atomicNumber }) => atomicNumber), // Atomic numbers
        datasets: [
            {
                label: "Atomic Radius",
                data: atomicRadii.map(({ radius }) => radius), // Atomic radii
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
                pointBackgroundColor: "rgb(75, 192, 192)",
            },
        ],
    };

    return (
        <div>
            {/* Line Chart */}
            <div className="mb-8 p-8 flex justify-center text-white rounded-xl shadow-lg">
                <div className="w-full max-w-4xl p-4 rounded-lg shadow-md">
                    <Line data={chartData} />
                </div>
            </div>

            {/* Display the selected element info */}
            {selectedInfo && (
                <div className="mb-4 flex items-center p-4 text-yellow-400 hover:scale-110 border shadow-sm shadow-yellow-300 rounded w-3/5 justify-center mx-auto">
                    <strong>{selectedInfo}</strong>
                </div>
            )}
            <div className="flex justify-center items-center p-4">
                <div className="grid grid-cols-12 gap-2 p-4 text-yellow-400">
                    {/* Render clickable atomic elements */}
                    {atomicRadii.map(({ element, atomicNumber, radius }) => (
                        <div
                            key={atomicNumber}
                            className="flex items-center justify-center w-12 h-12 text-sm font-bold border  shadow-yellow-300 hover:scale-105 border-gray-300 rounded shadow-md cursor-pointer"
                            onClick={() => handleClick(element, radius)}
                        >
                            {element}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AtomicRadii;
