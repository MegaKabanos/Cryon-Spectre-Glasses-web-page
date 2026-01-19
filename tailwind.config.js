/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Roboto", "Outfit", "sans-serif"],
      },
      backgroundImage: {
        metallic: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
      },
    },
  },
  plugins: [],
};
