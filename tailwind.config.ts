import type { Config } from "tailwindcss";

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
      },
      fontFamily:{
        Poppins: ['var(--font-Poppins)'],
        Josefin: ['var(--font-Josefin)'],
      },
    },
  },
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
