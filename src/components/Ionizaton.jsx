import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const IonizationEnergyBarGraph = ({ ionizationData }) => {
    // Process data for the chart
    const chartData = ionizationData?.map((element) => ({
        name: element.name,
        first: element.ionizationEnergies[0] ?? null,
        second: element.ionizationEnergies[1] ?? null,
        third: element.ionizationEnergies[2] ?? null,
        fourth: element.ionizationEnergies[3] ?? null,
    }));

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                {/* Primary Y-axis for small values */}
                <YAxis
                    yAxisId="small"
                    tickCount={10}
                    domain={[0, 100]} // Suitable range for small values
                    tickFormatter={(value) => value.toFixed(0)}
                    label={{ value: "Small Values", angle: -90, position: "insideLeft" }}
                />
                {/* Secondary Y-axis for large values */}
                <YAxis
                    yAxisId="large"
                    orientation="right"
                    domain={[100, "dataMax + 50"]} // Handles larger values
                    tickFormatter={(value) => value.toFixed(0)}
                    label={{ value: "Large Values", angle: -90, position: "insideRight" }}
                />
                <Tooltip />
                <Legend />
                <Bar yAxisId="small" dataKey="first" fill="#8884d8" name="1st Ionization Energy" />
                <Bar yAxisId="small" dataKey="second" fill="#82ca9d" name="2nd Ionization Energy" />
                <Bar yAxisId="large" dataKey="third" fill="#ffc658" name="3rd Ionization Energy" />
                <Bar yAxisId="large" dataKey="fourth" fill="#ff8042" name="4th Ionization Energy" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default IonizationEnergyBarGraph;
