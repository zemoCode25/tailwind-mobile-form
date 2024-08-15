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
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        MarineBlue: "hsl(213, 96%, 18%)",
        PastelBlue: "hsl(228, 100%, 84%)",
        LightBlue: "hsl(206, 94%, 87%)",
        PurplishBlue: "hsl(243, 100%, 62%)",
      },
    },
  },
  plugins: [],
};
