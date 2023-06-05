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
          DEFAULT: '#3C63EC',
          50: '#E3E9FC',
          100: '#D1DAFA',
          200: '#ACBCF7',
          300: '#869EF3',
          400: '#6181F0',
          500: '#3C63EC',
          600: '#1541DB',
          700: '#1032A7',
          800: '#0B2374',
          900: '#061341',
          950: '#040C28'
        },
        acc1: {
          DEFAULT: '#A47DE2',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#EAE1F8',
          300: '#D3C0F1',
          400: '#BB9EE9',
          500: '#A47DE2',
          600: '#844FD8',
          700: '#662CC3',
          800: '#4E2195',
          900: '#361768',
          950: '#2A1251'
        },
        acc2: {
          DEFAULT: '#CA5BD8',
          50: '#FAEFFB',
          100: '#F5DFF7',
          200: '#EABEF0',
          300: '#DF9DE8',
          400: '#D57CE0',
          500: '#CA5BD8',
          600: '#B930CB',
          700: '#90259D',
          800: '#661B70',
          900: '#3D1043',
          950: '#280A2C'
        },
        acc3: {
          DEFAULT: '#EB4C4F',
          50: '#FDF1F1',
          100: '#FBDFDF',
          200: '#F7BABB',
          300: '#F39597',
          400: '#EF7173',
          500: '#EB4C4F',
          600: '#E51A1D',
          700: '#B31417',
          800: '#800E10',
          900: '#4E090A',
          950: '#350607'
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

