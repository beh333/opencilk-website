module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'cilk-pink': '#fc3dc2',
        'cilk-blue': 'blue-600',
        'header-blue': '#001c7b'
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
