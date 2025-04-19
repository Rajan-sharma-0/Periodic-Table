import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ElectronegativityGraph = ({ data }) => {
    // Generate labels for all elements (1 to 118)
    const elementLabels = Array.from({ length: data.length }, (_, i) => `Element ${i + 1}`);

    // Prepare data for the graph
    const chartData = {
        labels: elementLabels,
        datasets: [
            {
                label: "Electronegativity (Pauling Scale)",
                data: data,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                pointRadius: 2,
                borderWidth: 2,
                tension: 0.3, // Smooth curve
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    color: "white", // Set legend text color to white
                },
            },
            title: {
                display: true,
                text: "Electronegativity of Elements in the Periodic Table",
                color: "white", // Set title text color to white
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Elements (by Atomic Number)",
                    color: "white", // Set x-axis title color to white
                },
                ticks: {
                    color: "white", // Set x-axis tick color to white
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Electronegativity (Pauling Scale)",
                    color: "white", // Set y-axis title color to white
                },
                ticks: {
                    color: "white", // Set y-axis tick color to white
                },
            },
        },
    };

    return (
        <div className="flex flex-col items-center p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto sm:p-4">
            <h1 className="text-2xl font-bold text-white mb-4 text-center sm:text-xl">Periodic Table Trends</h1>
            <div className="w-full" style={{ height: '500px', maxWidth: '100%' }}>
                <Line data={chartData} options={options} />
            </div>
        </div>
    );
};

export default ElectronegativityGraph;