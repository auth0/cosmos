const global = {
  // Colors ==========================
  color: {
    background: {
      base: {
        100: 'swatch.black.100',
        200: '',
        300: ''
      },
      light: {
        100: '',
        200: '',
        300: ''
      },
      dark: {
        100: '',
        200: '',
        300: ''
      }
    },
    text: {
      base: {
        100: 'text.dark.100',
        200: 'text.dark.200',
        300: 'text.dark.300'
      },
      light: {
        100: '#',
        200: '#',
        300: '#'
      },
      dark: {
        100: '#000',
        200: '#222',
        300: '#333'
      }
    },

    theme: {
      primary: {
        // naranja brand
        100: '#',
        200: '#',
        300: '#'
      },
      secondary: {
        // azul
        100: '#',
        200: '#',
        300: '#'
      },
      success: {
        100: '#',
        200: '#',
        300: '#'
      },
      info: {
        100: '#',
        200: '#',
        300: '#'
      },
      warning: {
        100: '#',
        200: '#',
        300: '#'
      },
      danger: {
        100: '#',
        200: '#',
        300: '#'
      }
    },
    state: {
      active: {
        100: '#',
        200: '#',
        300: '#'
      },
      disabled: {
        100: '#',
        200: '#',
        300: '#'
      }
    },
    link: {
      100: '#', //normal
      200: '#' //hover
    }
  },

  // Shadows ==========================
  shadow: {
    sm: '',
    md: '', // this is the default
    lg: '',
    inset: ''
  },

  // Sizes & spaces ==========================
  spacer: {
    xs: '',
    sm: '',
    md: '', // this is the default
    lg: '',
    xl: '',
    '2xl': '',
    '3xl': ''
  },

  height: {
    xs: '',
    sm: '',
    md: '', // this is the default
    lg: '',
    xl: ''
  },

  gutter: {
    sm: '',
    md: '', // this is the default
    lg: ''
  },

  // Breakpoint ==========================
  breakpoint: {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },

  // Z-Index ==========================
  zindex: {
    xs: '100',
    sm: '200', //Tooltip, dropmenus
    md: '300',
    lg: '400', // App header
    xl: '500',
    '2xl': '600' // Modal overlay
  },

  // Borders ==========================
  border: {
    width: {
      sm: '',
      md: '',
      lg: ''
    },
    color: {
      base: '#', // TODO: this hsould be just `global.border.color` widthout the word default
      light: '#',
      dark: '#'
    },
    radius: {
      sm: '',
      md: '',
      lg: '30rem' // generated rounded corernes
    }
  },

  // Fonts ==========================
  font: {
    family: {
      sansSerif: '',
      monospace: ''
    },
    size: {
      xs: '',
      sm: '',
      md: '', // this is the default
      lg: '',
      xl: '',
      '2xl': '',
      '3xl': '',
      '4xl': ''
    },
    sizeRelative: {
      sm: '90%'
    },
    weight: {
      light: '300',
      normal: '400',
      semiBold: '500',
      bold: '600'
    },
    LineHeight: {
      sm: '1.3',
      md: '1.6' // this is the default
    },
    letterSpacing: {
      lg: '1px'
    }
  }
}
//Animations
//TDB

module.exports = global
