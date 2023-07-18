/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jose: ["JosefinSans", "sans-serif"],
      },
      colors: {
        twitter: "#1DA1F2",
        linkedin: "#0077B5",
        facebook: "#4267B2",
        reddit: "#FF5700",
        cont: {
          DEFAULT: '#EFEFEF',
          50: '#F9F9F9',
          100: '#EFEFEF',
          200: '#D3D3D3',
          300: '#B7B7B7',
          400: '#9B9B9B',
          500: '#7F7F7F',
          600: '#636363',
          700: '#474747',
          800: '#2B2B2B',
          900: '#0F0F0F',
          950: '#010101'
        },
        txt: {
          DEFAULT: '#23262E',
          '50': '#C2C6D1',
          '100': '#B6BCC8',
          '200': '#9FA6B6',
          '300': '#8891A5',
          '400': '#707B93',
          '500': '#5E687C',
          '600': '#4D5465',
          '700': '#3B414E',
          '800': '#23262E',
          '900': '#0B0C0E'
        },
        main: {
          DEFAULT: '#353AB8',
          50: '#BABBEB',
          100: '#AAACE6',
          200: '#8A8DDD',
          300: '#6A6ED4',
          400: '#4B50CB',
          500: '#353AB8',
          600: '#2B2F94',
          700: '#202471',
          800: '#16184D',
          900: '#0C0D29',
          950: '#070718'
        },
        acc: "#ff6584"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

