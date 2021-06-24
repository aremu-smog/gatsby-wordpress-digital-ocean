module.exports = {
  purge: ["./src/**/*.js"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        //You can change this up but we generally use serif for top level heading/primary typeface of most brands. Treat this in terms of nomenclature not function
        serif: ["FoundersGrotesk", "sans-serif"],
        sans: ["NeuePlak", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
