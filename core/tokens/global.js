import { swatches as swatch } from './swatches'

/*
// Tokens ==========================

Color
- Background
- Border
- Text
- Theme
-- Brand
-- Primary
-- Info
-- Success
-- Warning
-- Danger

Size


Border
- width
- radius

Font
- Family
- Weight
- Size
- Size relative
- Line height
- Letter spacing

Breakpoint

Z-index

*/

const global = {
  // Colors ==========================
  color: {
    background: {
      base: {
        100: swatch.black - 100,
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
    border: {
      base: '#', // TODO: this should be just `global.border.color` widthout the word default
      light: '#',
      dark: '#'
    },
    text: {
      base: {
        300: 'text.dark.300', // Primary
        200: 'text.dark.200', // Secondary
        100: 'text.dark.100' // Disabled
        // Error
        // Interactive/Link
        // Interactive/Link Dark
      },
      light: {
        300: '#',
        200: '#',
        100: '#'
      },
      dark: {
        300: '#333333',
        200: '#757575',
        100: '#B2B2B2'
      }
    },
    link: {
      100: '#', //normal
      200: '#' //hover
    },
    theme: {
      // Brand color
      brand: {
        100: '#F5AA92', // light / background / disabled
        200: '#EB5424', // default / background
        300: '#D94514', // dark / hover
        400: '#BF3A11' // darker / active
      },
      // Azul
      primary: {
        100: '#', // light / disabled
        200: '#', // default / background
        300: '#', // dark / hover
        400: '' // darker / active
      },
      // Status?
      info: {
        100: '#',
        200: '#',
        300: '#'
      },
      success: {
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
        100: '#FFD8CC', // light / disabled
        200: '#E13A37', // default / background
        300: '#E40002', // dark
        400: '#BE0001' // darker / text color
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
    }
  },

  // Borders ==========================
  border: {
    width: {
      sm: '1px',
      md: '2px'
      // lg: '4px'
    },
    radius: {
      sm: '',
      md: '3px', // this is the default
      lg: '30rem' // generated rounded corners
    }
  },

  // Shadows ==========================
  shadow: {
    sm: '',
    md: '', // this is the default
    lg: '',
    inset: ''
  },

  /* Sizes & spaces
  // ========================== */

  // Spaces:
  // Used for for padding, margins, and position coordinates.

  space: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px', // this is the default
    lg: '24px',
    xl: '32px',
    '2xl': '40px',
    '3xl': '56px'
  },

  // Size: Used for inputs/buttons height
  size: {
    xs: '32px',
    sm: '36px',
    md: '44px', // this is the default
    lg: '48px'
  },

  gutter: {
    xs: '8px',
    sm: '16px',
    md: '24px', // this is the default
    lg: '40px'
  },

  // Fonts ==========================
  font: {
    family: {
      sans:
        'fakt-web, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', // Body and Headings
      monospace: 'Roboto Mono, "Courier New", Courier, monospace' // Code
      // serif: '' // Blog
    },
    weight: {
      light: '300',
      normal: '400',
      semiBold: '500',
      bold: '700'
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
    lineHeight: {
      sm: '1.3',
      md: '1.6' // this is the default
    },
    letterSpacing: {
      lg: '1px'
    }
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
    sm: '200', // Tooltip, dropmenus
    md: '300',
    lg: '400', // App header
    xl: '500',
    '2xl': '600' // Modal overlay
  }
  //Animations
  //TDB
}

module.exports = global
