/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#142B50',
            dark: '#0C1B33',
            light: '#1B3B6F',
            deep: '#07101E',
          },
          yellow: {
            DEFAULT: '#FACC15',
            hover: '#EAB308',
            light: '#FEF08A',
            dark: '#CA8A04',
          },
          light: '#F8FAFC',
          dark: '#172033',
          muted: '#64748B',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
