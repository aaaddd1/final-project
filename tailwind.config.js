
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors:  {
        "mustard": "#e1ad01",
        "at-blue": "#28326d",
        "light-grey": "#f1f1f1",
        "dimgrey": "#696969",
        "lavander": "#E6E6FA",
      },
    },
    fontFamily: {
      Nunito: ["Nunito"],
    },
    
    flex: {
      "1": "1 1 0%",
      "2": "2 2 0%",
    },
    container: {
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
        sm: "300px",
      },
    },
  },
  plugins: [],
}