/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Nunito"],
        ubuntu: ["Ubuntu"],
      },
      screens: {
        tablet: "480px",
        desktop: "1080px",
      },
      colors: {
        MarineBlue: "hsl(213, 96%, 18%)",
        PastelBlue: "hsl(228, 100%, 84%)",
        LightBlue: "hsl(206, 94%, 87%)",
        PurplishBlue: "hsl(243, 100%, 62%)",
        CoolGray: "hsl(231, 11%, 63%)",
        LightGray: "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
