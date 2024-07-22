/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            danger: {
              DEFAULT: "#dc2626",
              50: "#fef2f2",
              100: "#fee2e2",
              200: "#fecaca",
              300: "#fca5a5",
              400: "#f87171",
              500: "#ef4444",
              600: "#dc2626",
              700: "#b91c1c",
              800: "#991b1b",
              900: "#7f1d1d",
              950: "#450a0a",
            },
            primary: {
              DEFAULT: "#1b3f71",
              50: "#eff9ff",
              100: "#dceffd",
              200: "#c0e5fd",
              300: "#95d5fb",
              400: "#63bdf7",
              500: "#3fa0f2",
              600: "#2983e7",
              700: "#216dd4",
              800: "#2158ac",
              900: "#1b3f71",
              950: "#182f53",
            },
          },
        },
      },
    }),
  ],
};
