/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        'dark-purple': '#581C87',
        blue: '#0369A1',
        'dark-blue': '#0F172A',
        'east-bay': '#475569',
        orange: '#D97706',
        purple: '#7E22CE',
        'light-purple': '#A252EE',
        gold: '#FBBF24',
        'blue-light-1': '#E0F2FE',
        'blue-light-2': '#BFDBFE',
        'blue-light-3': '#93C5FD',
        red: '#E11D48',
        yellow: '#FCD34D',
        green: '#22C55E',
        'custom-brown': '#78350F', 
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        xs: '0.87rem',  // 13.92px
        s: '1rem',       // 16px
        m: '1.25rem',    // 20px
        l: '1.5rem',     // 24px
        xl: '3.5rem',    // 56px
        xxl: '4.5rem',   // 72px
        custom: '2rem',  // 32px em rem
        'mobile-h1': '2.5rem',  // 40px
        'p': '1.125rem',  // 18px
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
        bolder: 800,
      },
      spacing: {
        'padding-xs': '1rem',   // 16px
        'padding-sm': '5rem',   // 80px
        'padding-md': '1.5rem', // 24px
        'padding-lg': '7.5rem', // 120px
        'gap-xs': '0.25rem',     // 4px
        'gap-sm': '0.5rem',      // 8px
        'gap-md': '1rem',        // 16px
        'gap-lg': '2rem',        // 32px
      },
      screens: {
        custom: '430px',    // Mobile screens
        tablet: '768px',     // Tablet screens
        laptop: '1024px',    // Laptop screens
        desktop: '1280px',   // Desktop screens
      },
    },
  },
  plugins: [],
};


