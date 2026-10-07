import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          ...colors.gray,
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)",
        },
        teal: {
          ...colors.teal,
          200: "var(--color-teal-200)",
          300: "var(--color-teal-300)",
          400: "var(--color-teal-400)",
          500: "var(--color-teal-500)",
          600: "var(--color-teal-600)",
          700: "var(--color-teal-700)",
        },
      },
      fontFamily:{
        Poppins: ['var(--font-Poppins)'],
        Josefin: ['var(--font-Josefin)'],
      },
    },
  },

  darkMode: 'class', // Enable dark mode based on a class

  // plugins: [require('tailwind-scrollbar-hide')],
} satisfies Config;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Roboto', 'Arial', 'sans-serif'],
//       },
//     },
//   },
// };
