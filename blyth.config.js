const theme = {
  breakpoints: {
    md: '48em',
    lg: '68em',
  },
  colors: {
    primary: '#716040',
    secondary: '#8c7851',
    light: '#fffffe',
    dark: '#020826',
    accent: '#f25042',
  },
  fonts: {
    header: 'headings, arial black',
    body: 'body, arial',
  },
  sizeScale: {
    200: 'var(--space-3xs-2xs)',
    300: 'var(--space-2xs-xs)',
    400: 'var(--space-xs-s)',
    500: 'var(--space-s-m)',
    600: 'var(--space-m-l)',
    700: 'var(--space-l-xl)',
    800: 'var(--space-xl-2xl)',
    900: 'var(--space-2xl-3xl)',
  },
  textScale: {
    200: 'var(--step--2)',
    300: 'var(--step--1)',
    400: 'var(--step-0)',
    500: 'var(--step-1)',
    600: 'var(--step-2)',
    700: 'var(--step-3)',
    800: 'var(--step-4)',
    900: 'var(--step-5)',
    1000: 'var(--step-6)',
  },
}

module.exports = {
  theme,
  tokens: {
    bg: {
      items: theme.colors,
      property: 'background',
    },
    color: {
      items: theme.colors,
      property: 'color',
      variable: false,
    },
    font: {
      items: theme.fonts,
      property: 'font-family',
      variable: false,
    },
    'gap-top': {
      items: theme.sizeScale,
      property: 'margin-top',
    },
    'gap-bottom': {
      items: theme.sizeScale,
      property: 'margin-bottom',
    },
    leading: {
      items: {
        'extra-tight': '1.067',
        tight: '1.2',
        mid: '1.5',
        loose: '1.7',
      },
      property: 'line-height',
    },
    measure: {
      items: {
        long: '75ch',
        short: '60ch',
        compact: '40ch',
      },
      property: 'max-width',
    },
    'pad-top': {
      items: theme.sizeScale,
      property: 'padding-top',
    },
    'pad-bottom': {
      items: theme.sizeScale,
      property: 'padding-bottom',
    },
    size: {
      items: theme.sizeScale,
      variable: true,
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
    text: {
      items: theme.textScale,
      responsive: true,
      property: 'font-size',
      variable: true,
    },
    weight: {
      items: {
        light: '300',
        regular: '400',
        medium: '600',
        bold: '700',
      },
      property: 'font-weight',
      variable: false,
    },
  },
}
