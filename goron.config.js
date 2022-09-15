const tokens = require('./colors.js')

const colors = JSON.parse(tokens)

const fonts = {
  header: 'headings, sans-serif',
  body: 'body, serif',
}

module.exports = {
  colors,
  fonts,
  generateCustomProperties: false,
  utilities: {
    bg: {
      items: colors,
      output: 'standard',
      property: 'background',
    },
    color: {
      items: colors,
      output: 'standard',
      property: 'color',
    },
    font: {
      items: fonts,
      output: 'standard',
      property: 'font-family',
    },
    alignment: {
      items: {
        right: 'right',
        center: 'center',
        left: 'left',
      },
      output: 'standard',
      property: 'text-align',
    },
    leading: {
      items: {
        tight: '1.2',
        mid: '1.5',
        loose: '1.7',
      },
      output: 'standard',
      property: 'line-height',
    },
    measure: {
      items: {
        long: '75ch',
        short: '60ch',
        compact: '40ch',
      },
      output: 'standard',
      property: 'max-width',
    },
    weight: {
      items: {
        light: '300',
        regular: '400',
        mid: '600',
        bold: '700',
      },
      output: 'standard',
      property: 'font-weight',
    },
  },
  breakpoints: {
    md: '48em',
    lg: '68em',
  },
}
