/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
