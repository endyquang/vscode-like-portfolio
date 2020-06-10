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
        '-100': '-25rem',
        '50vw': '50vw',
        '50vh': '50vh',
        5: '1.25rem',
        16: '4rem'
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
        100: '25rem',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1280px'
      },
      height: {
        26: '6.5rem'
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
    width: ['responsive', 'hover'],
    margin: ['responsive', 'hover']
  },
  plugins: []
}
