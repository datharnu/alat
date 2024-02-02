/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { min: "320px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "2560px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    extend: {
      backgroundImage: {
        'bgImg': 'url(/Loginbanner.png)',
      },
      colors: {
        primary: "#ab2656;",
        textS: "#757575",
      },
    },
  },
  plugins: [],
};
