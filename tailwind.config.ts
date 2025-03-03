import type { Config } from 'tailwindcss'
import { Roboto } from 'next/font/google';

const config: Config = {
  content: [ 
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: { colors: {
      lightHover: '#fcf4ff',
      darkHover: '#1b2c4f',
      darkTheme: '#0E1729',

    },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
        Roboto:["Roboto", "serif"],
      },
      boxShadow: {
        'black': '4px 4px 0  #000',
        'white': '4px 4px 0  #fff',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}

export default config;
