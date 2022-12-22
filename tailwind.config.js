/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: [
    {
      mytheme: {
        primary: "#251D58",
        secondary: "#F6F6F6",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
    },
    "dark",
    "cupcake",
  ],
  plugins: [require("daisyui")],
}
