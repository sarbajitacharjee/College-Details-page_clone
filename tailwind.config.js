module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Extend the theme here if needed
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.after-content': {
          content: '""',
        },
        '.after-block': {
          display: 'block',
        },
        '.after-w-full': {
          width: '1',
        },
        '.after-h-1': {
          height: '2px',
        },
        '.after-bg-orange': {
          backgroundColor: 'orange',
        },
        
      }, ['before', 'after']);
    }
  ],
}
