module.exports = {
  purge: [
    './pages/**/*.vue',
    './components/**/*.vue',
    './layouts/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        layout: '#1d1d1d',
        aside: '#242425',
        popup: 'rgba(0,0,0,.8)',
        slide: '#292929',
        code: '#cf9877',
        'aside--hover': '#2e2e32',
        'aside--active': '#3e3e45'
      },
      borderColor: {
        layout: '#1d1d1d'
      },
      cursor: {
        'zoom-in': 'zoom-in',
        'zoom-out': 'zoom-out'
      },
      inset: {
        full: '100%',
        '-100': '-25rem'
      },
      margin: {
        28: '7rem',
        22: '5.5rem'
      },
      maxWidth: {
        48: '12rem',
        64: '16rem'
      },
      screens: {
        '2xl': '1536px'
      },
      spacing: {
        100: '25rem'
      },
      width: {
        100: '25rem'
      },
      zIndex: {
        60: '60',
        70: '70'
      }
    },
    fontFamily: {
      sans: ['Anonymous Pro', 'monospace']
    }
  },
  variants: {
    width: ['responsive', 'hover']
  },
  plugins: []
}
