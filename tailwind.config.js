module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',

    //flowbite
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },

  theme: {
    colors: {
      // light mode colors
      primary: '#4da3ff',
      secondary: '#FFF',
      third: '#aaa',

      // dark mode colors
      'dark-primary': '#111',
    },
  },

  plugins: [require('flowbite/plugin')],
};
