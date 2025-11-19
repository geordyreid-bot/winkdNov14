/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: { 50: '#f5fbff', 100: '#e6f4ff', 200: '#d1eaff', 300: '#b8deff', 400: '#98d1ff', 500: '#79c4ff', 600: '#5aabf0', 700: '#4290d1', 800: '#2f75b3', 900: '#1c5a94' },
          secondary: { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a' },
          accent: { 300: '#f5e6ff', 400: '#e9d1ff' },
          bg: '#f8fafc',
          surface: '#ffffff',
          'text-primary': '#1e293b',
          'text-secondary': '#64748b'
        }
      }
    }
  },
  plugins: [],
}
