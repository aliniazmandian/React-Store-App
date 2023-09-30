/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(auto-fit, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}

