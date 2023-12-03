import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "violet-beauregarde": "#2e1065",
        "pink-rabbits": "#FF4646",
      },
      colors: {
        "violet-beauregarde": "#2e1065",
        "pink-rabbits": "#FF4646",
      },
    },
  },
  plugins: [],
} satisfies Config;
