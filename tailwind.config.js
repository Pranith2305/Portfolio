/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-blue': '0 4px 6px rgba(66, 153, 225, 0.5), 0 1px 3px rgba(66, 153, 225, 0.5)',
        'custom-green': '0 4px 6px rgba(107, 185, 130, 0.5), 0 1px 3px rgba(107, 185, 130, 0.5)',
        // Define more custom shadow colors as needed
      },
    },
  },
  plugins: [],
}

