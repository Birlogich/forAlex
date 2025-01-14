import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontSize: {
          "customlg" : '39px',
        },
        colors: {
          'main': '#bcb6e9',
          'title' : '#E8E6F7',
          "violet" : '#58107A',
          'bg' : 'var(--bg)',
          'light-violet': '#F4E5FB',
          "purple" : "#7A6DD3",
        },
        backgroundColor: {
          "linearSubtitle" : "linear-gradient(180.00deg, rgb(232, 230, 247),rgb(188, 182, 233))",
          "bg-title" : '#0E092F',
          "deepPurple" : '#120C3F',
          "darkPurple" : "#1F1469",
          "lightPurple" : "#2B1C93",
        },
        fontFamily: {
          nunito: ['var(--nunito)'],
          inconsolata: ['var(--inconsolata)'],
        },
        borderRadius: {
          customLg :'1.25rem',
        },   
        boxShadow: {
          suctomActive : 'inset 0px 0px 24px 0px rgba(122, 109, 211, 0.8)',
        }, 
         screens: {
          'xs': '320px',  
          'sm': '640px',  
          'md': '960px',
        },
        
    },
  },
  plugins: [],
};
export default config;
