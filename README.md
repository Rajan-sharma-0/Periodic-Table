# Periodic Table Trends Visualization

This project is a comprehensive React-based application designed to visualize the properties and trends of elements from the periodic table. It specifically includes visualizations and features for actinoids, atomic radii, electronegativity, ionization energy, melting and boiling points, and a quiz feature for learning.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Technologies Used](#technologies-used)
5. [File Structure](#file-structure)
6. [Future Enhancements](#future-enhancements)
7. [Contributing](#contributing)
8. [License](#license)

---

## Features

### Periodic Table
- **Interactive Grid**: A fully interactive periodic table grid.
- **Element Details**: Click on any element to view detailed information such as:
  - Atomic Number
  - Symbol
  - Electronegativity
  - Oxidation States
  - Type of Element

### Actinoids and Lanthanoids
- **Highlight Actinoids and Lanthanoids**: Dedicated sections for exploring these element groups.
- **Detailed View**: Click on any element in the grid to see properties like atomic number, symbol, electronegativity, and oxidation states.

### Periodic Table Trends
- **Atomic Radii Visualization:**
  - Interactive line chart using `react-chartjs-2`.
  - Clickable elements with atomic radius details.

- **Electronegativity Trends:**
  - Line graph showcasing electronegativity values for elements.
  - Customizable axis labels and tooltip details.

- **Ionization Energy:**
  - Bar chart displaying multiple ionization energies (1st, 2nd, 3rd, etc.).
  - Dual Y-axes to handle values with varying magnitudes.

- **Melting and Boiling Points:**
  - Bar chart visualization of melting and boiling points of elements.
  - Interactive charts with hover details.

### 3D Atomic Model
- **Three.js Integration:**
  - 3D visualization of atomic structure using Three.js.
  - Features:
    - Protons, neutrons, and electrons represented as spheres.
    - Electron orbits with dynamic animations.
    - Interactive spark effects triggered by mouse movement.

### Quiz
- **Periodic Table Quiz:** Test your knowledge about elements and periodic trends.
- **Difficulty Levels:** Questions are categorized into easy, medium, and hard levels.

---

## Installation

### Prerequisites
- Node.js and npm/yarn installed on your machine.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd periodic-table-visualization
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the application in your browser at `http://localhost:3000`.

---

## Usage

- **Explore Elements:** Click on any element in the periodic table or actinoids/lanthanoids grid to view detailed information.
- **Visualize Trends:** Use the interactive charts to study trends in atomic radii, electronegativity, ionization energies, and melting/boiling points.
- **Experience 3D Atomic Model:** Interact with the 3D atomic structure and observe electron animations and spark effects.
- **Test Knowledge:** Take quizzes to reinforce understanding of periodic trends and element properties.

---

## Technologies Used

- **Frontend:** React, Tailwind CSS
- **Data Visualization:** Chart.js, React Chart.js 2, Recharts
- **3D Graphics:** Three.js
- **Routing:** React Router DOM
- **Animations:** Typewriter.js

---

## File Structure
```
src/
├── components/
│   ├── Actinoids.js          # Actinoids visualization
│   ├── Lanthanoids.js        # Lanthanoids visualization
│   ├── AtomicRadii.js        # Atomic radii visualization
│   ├── ElectronegativityGraph.js  # Electronegativity trends
│   ├── IonizationEnergyBarGraph.js  # Ionization energy trends
│   ├── MeltandBoil.js        # Melting and boiling points
│   ├── ThreeJSBackground.js  # 3D atomic model
├── data/
│   └── PeriodicTable.js      # Data for periodic table elements
├── styles/
│   └── App.css               # Custom styles
└── App.js                    # Main app entry point
```

---

## Future Enhancements

- **Additional Element Groups:**
  - Include detailed grids for transition metals.
- **Enhanced 3D Model:**
  - Add interactive camera controls and better particle effects.
- **Trend Comparisons:**
  - Allow users to compare multiple trends on the same graph.
- **Periodic Table Quiz:**
  - Add timed challenges and scoreboards.
- **Accessibility Improvements:**
  - Improve ARIA roles and keyboard navigation support.

---

## Contributing

Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments

- Inspired by the need for interactive educational tools.
- Special thanks to contributors and the open-source community for their support.

