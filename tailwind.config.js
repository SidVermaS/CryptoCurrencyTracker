/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');
import colors from 'tailwindcss/colors';
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.white,
          dark: '#181a1b',
        },
        secondary: {
          light: colors.purple['500'],
          dark: colors.purple['500'],
        },
        tertiary: {
          light: colors.gray['200'],
          dark: colors.gray['700'],
        },
        loiter: {
          light: colors.purple['100'],
          dark: colors.purple['900'],
        },
      },
      textColor: {
        primary: { light: colors.white, dark: colors.white },
        secondary: { light: colors.white, dark: colors.gray['400'] },
      },
    },
  },
  plugins: [],
};
