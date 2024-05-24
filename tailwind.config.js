/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,jsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,jsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,jsx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "red-dark": '#87191a',
      "red-dark-2": '#52091a',
      "red-light": '#b22724',
      "pink-light": '#f9b1b7',
      "pink-dark": '#f47793',
      "skin": '#fdcd97',
      "white": '#ffe8ea',
      "white-50": '#ffe8ea80',
      "bg": '#fbe1e7',
      "black": '#26070e',
      "golden": '#a98c54'
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
};
