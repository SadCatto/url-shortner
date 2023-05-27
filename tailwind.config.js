/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'pr-cyan': '#2acfcf',
        'pr-violet': '#3b3054',
        'sc-red': '#f46262',
        'n-gray': '#bfbfbf',
        'n-gray-violet': '#9e9aa7',
        'n-very-blue': '#35323e',
        'n-very-violet': '#232127'
      }
    },
  },
  plugins: [],
}
