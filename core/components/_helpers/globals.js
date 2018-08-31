import { fonts, misc } from '@auth0/cosmos-tokens'

let includeGlobals = true

if (process && process.env && process.env.COSMOS_DISABLE_RESETS) {
  includeGlobals = false
}

const insertAtTheStart = styles => {
  let tag = document.getElementById('cosmos-globals')

  if (tag) {
    tag.innerHTML = styles
  } else {
    tag = document.createElement('style')
    tag.type = 'text/css'
    tag.id = 'cosmos-globals'
    tag.innerHTML = styles

    // Register the resets before anything else
    const head = document.getElementsByTagName('head')[0]
    head.insertBefore(tag, document.getElementsByTagName('link')[0])
  }
}

if (includeGlobals) {
  insertAtTheStart(`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }


  /* Our resets */
  * {
    box-sizing: border-box;
  }

  strong, em {
    font-weight: ${fonts.weight.bold};
  }

  body, input, textarea, button, select {
    font-family: ${fonts.family.text};
    font-weight: ${fonts.weight.normal};
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /*
    The only difference between the resets styleguide and cosmos is line-height
    We want cosmos components to have our line-height, but not break everything else,
    hence as a hack, we're setting it on styled-components elements.

    Note: This will break on applications that already use styled-components
  */
  [class^="sc-"] {
    line-height: ${misc.lineHeight};
  }

  @font-face {
    font-family: fakt-web;
    src: url(https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Normal.woff2)
        format('woff2'),
      url(https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Normal.woff) format('woff'),
      url(https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Normal.ttf)
        format('truetype');
    font-weight: ${fonts.weight.normal};
    font-style: normal;
  }

  @font-face {
    font-family: fakt-web;
    src: url(https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Medium.woff2)
        format('woff2'),
      url(https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Medium.woff) format('woff'),
      url(https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Medium.ttf)
        format('truetype');
    font-weight: ${fonts.weight.medium};
    font-style: normal;
  }

  @font-face {
    font-family: fakt-web;
    src: url(https://cdn.auth0.com/website/ds/fonts/fakt/FaktPro-SemiBold.woff2)
        format('woff2'),
      url(https://cdn.auth0.com/website/ds/fonts/fakt/FaktPro-SemiBold.woff) format('woff'),
      url(https://cdn.auth0.com/website/ds/fonts/fakt/FaktPro-SemiBold_web.ttf)
        format('truetype');
    font-weight: ${fonts.weight.bold};
    font-style: normal;
  }

  @font-face {
    font-family: 'budicon-font';
    src: url(https://cdn.auth0.com/fonts/budicons/fonts/budicon-font.woff) format('woff');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: ${fonts.weight.semibold};
    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY4gp9Q8gbYrhqGlRav_IXfk.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }

`)
} else {
  /* We still insert some styles to add missing fonts and keep other things sane 😅 */
  insertAtTheStart(`
    * {
      box-sizing: border-box;
    }
    strong,
    em {
      font-weight: 700;
    }

    input,
    textarea,
    button,
    select {
      font-family: 'fakt-web';
      font-weight: 400;
      font-size: 14px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Cosmos globals */
    [class^="sc-"] {
      line-height: 1.6;
    }

    @font-face {
      font-family: fakt-web;
      src: url(https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Medium.woff2)
          format('woff2'),
        url(https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Medium.woff) format('woff'),
        url(https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Medium.ttf)
          format('truetype');
      font-weight: ${fonts.weight.medium};
      font-style: normal;
    }

    @font-face {
      font-family: fakt-web;
      src: url(https://cdn.auth0.com/website/ds/fonts/fakt/FaktPro-SemiBold.woff2)
          format('woff2'),
        url(https://cdn.auth0.com/website/ds/fonts/fakt/FaktPro-SemiBold.woff) format('woff'),
        url(https://cdn.auth0.com/website/ds/fonts/fakt/FaktPro-SemiBold_web.ttf)
          format('truetype');
      font-weight: ${fonts.weight.bold};
      font-style: normal;
    }

    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: ${fonts.weight.semibold};
      src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY4gp9Q8gbYrhqGlRav_IXfk.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
    }
  `)
}
