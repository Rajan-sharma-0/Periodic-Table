/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all your React files
  ],
  safelist: [
    'bg-alkali-metal',
    'bg-alkaline-earth-metal',
    'bg-transition-metal',
    'bg-post-transition-metal',
    'bg-metalloid',
    'bg-non-metal',
    'bg-noble-gas',
    'bg-lanthanide',
    'bg-actinide',
    'bg-halogen',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '18': 'repeat(18, minmax(0, 1fr))', // Custom 18-column grid
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))', // Custom 7-row grid
      },
      spacing: {
        '250': '62.5rem', // Customize h-25 if not in the default scale
        '400': '100rem',   // Customize w-40 if not in the default scale
      },
      colors: {
        'alkali-metal': '#FF5733', // Orange
        'alkaline-earth-metal': '#33FF57', // Green
        'transition-metal': '#33A1FF', // Blue
        'post-transition-metal': '#FF33A1', // Pink
        'metalloid': '#FFC300', // Yellow
        'non-metal': '#A1FF33', // Light green
        'noble-gas': '#B3B3B3', // Gray
        'lanthanide': '#FF8C00', // Dark orange
        'actinide': '#8A2BE2', // Blue-violet
        'halogen': '#FF00FF', // Magenta
      },
    },
  },
  plugins: [],
};
