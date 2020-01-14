import { swatches as swatch } from "./swatches";

/*
// Tokens ==========================

Color
- Background
- Text
- Link
- Theme
-- Brand
-- Primary
-- Info
-- Success
-- Warning
-- Danger

Spacing
Gutter
Height

Border
- width
- color
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
      // Default calls light colors
      default: {
        100: "swatch.black.100",
        200: "",
        300: "",
      },
      light: {
        100: "", // Form bg
        200: "",
        300: "",
      },
      dark: {
        100: "",
        200: "",
        300: "", // Tooltip bg
      },
    },
    text: {
      // Default calls dark colors
      default: {
        100: "text.dark.100", // Disabled
        200: "text.dark.200", // Secondary
        300: "text.dark.300", // Primary
      },
      dark: {
        100: "#B2B2B2", // Disabled
        200: "#757575", // Secondary
        300: "#333333", // Primary
      },
      light: {
        100: "#",
        200: "#",
        300: "#",
      },
    },
    link: {
      100: "#", // normal
      200: "#", // hover
      300: "#", // active
    },
    // Active color
    active: {
      100: "#",
      200: "#",
      300: "#",
    },
    variant: {
      primary: {
        100: "#", // light / disabled
        200: "#", // default / background
        300: "#", // dark / hover
        400: "#", // darker / active
      },
      brand: {
        100: "#F5AA92", // light / background disabled
        200: "#EB5424", // default / background
        300: "#D94514", // dark / hover
        400: "#BF3A11", // darker / active
      },
      default: {
        100: "#",
        200: "#",
        300: "#",
        400: "#",
      },
      success: {
        100: "#",
        200: "#",
        300: "#",
      },
      // Info / Primary are now the same
      info: {
        100: "#",
        200: "#",
        300: "#",
      },
      warning: {
        100: "#",
        200: "#",
        300: "#",
      },
      //
      danger: {
        100: "#FFD8CC", // light / disabled
        200: "#E13A37", // default / background
        300: "#E40002", // dark
        400: "#BE0001", // darker / text color
      },
    },
  },
  // Borders ==========================
  border: {
    width: {
      small: "1px",
      medium: "2px",
      // large: '4px'
    },
    radius: {
      small: "",
      medium: "3px", // this is the default
      large: "",
      round: "30rem", // generated rounded corners
    },
  },

  // Shadows ==========================
  // TDB
  shadow: {
    inset: "",
    small: "",
    medium: "", // this is the default
    large: "",
  },

  /* Transparency
  // ========================== */
  // TDB

  /* Sizes & spaces
  // ========================== */

  // Spacing:
  // Used for for padding, margins, and position coordinates.

  spacing: {
    xxsmall: "4px",
    xsmall: "8px",
    small: "12px", // new value added
    medium: "16px", // this is the default
    large: "24px",
    xlarge: "32px",
    xxlarge: "40px",
    xxxlarge: "56px",
  },

  gutter: {
    xsmall: "8px",
    small: "16px",
    medium: "24px", // this is the default
    large: "40px",
  },

  // Size: Used for inputs/buttons height
  height: {
    xsmall: "32px",
    small: "36px",
    medium: "44px", // this is the default
    large: "48px",
  },

  // Fonts ==========================
  font: {
    family: {
      sans:
        'fakt-web, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', // Body and Headings
      monospace: 'Roboto Mono, "Courier New", Courier, monospace', // Code
      // serif: '' // Blog
    },
    weight: {
      light: "300",
      normal: "400",
      medium: "500",
      bold: "700",
    },
    size: {
      xsmall: "",
      small: "",
      medium: "", // this is the default
      large: "",
      xlarge: "",
      xxlarge: "",
      xxxlarge: "",
    },
    sizeRelative: {
      smaller: "90%",
    },
    lineHeight: {
      small: "1.3",
      medium: "1.6", // this is the default
    },
    letterSpacing: {
      large: "1px",
    },
  },

  // Breakpoint ==========================
  breakpoint: {
    xsmall: "0",
    small: "576px",
    medium: "768px",
    large: "992px",
    xlarge: "1200px",
  },

  // Z-Index ==========================
  zindex: {
    xsmall: "100",
    small: "200", // Tooltip, dropmenus
    medium: "300",
    large: "400", // App header
    xlarge: "500", // Clippo
    xxlarge: "600", // Modal overlay
  },

  // Animations ==========================
  // TDB
};

module.exports = global;
