module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"], // این بخش را بررسی کن
  theme: {
    extend: {
      backgroundImage: {
        'support-dark': "url('/img/bg-support-dark.svg')",
      },
    },
  },
  plugins: [],
};
