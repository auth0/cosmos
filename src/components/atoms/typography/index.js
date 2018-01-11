import styled, { injectGlobal } from 'styled-components'

import { colors, fonts, misc } from '../../../tokens'

injectGlobal`

  body, input, textarea, button, select {
    font-family: ${fonts.family.text};
    line-height: ${misc.lineHeight};
    font-weight: ${fonts.weight.normal};
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
`

const Heading1 = styled.h1`
  margin: 0; /* reset browser default */
  color: ${colors.base};
  font-size: 36px; /* TO-DO: tokenize */
  font-weight: ${fonts.weight.normal};
`

const Heading2 = styled.h2`
  margin: 0; /* reset browser default */
  color: ${colors.base};
  font-size: 24px; /* TO-DO: tokenize */
  font-weight: ${fonts.weight.medium};
`

const Heading3 = styled.h3`
  margin: 0; /* reset browser default */
  color: ${colors.base};
  font-size: 18px; /* TO-DO: tokenize */
  font-weight: ${fonts.weight.bold};
`

const Heading4 = styled.h4`
  margin: 0; /* reset browser default */
  color: ${colors.base};
  font-size: 24px;
  font-weight: ${fonts.weight.normal};
`

const Heading5 = styled.h5`
  margin: 0; /* reset browser default */
  color: ${colors.base};
  font-size: 16px;
  font-weight: ${fonts.weight.normal};
`

const Subheader = styled.h6`
  margin: 0; /* reset browser default */
  color: ${colors.grayDark};
  font-size: 13px;
  font-weight: ${fonts.weight.normal};
`

const Text = styled.span`
  color: ${colors.base};
  font-size: 14px;
  font-weight: ${fonts.weight.normal};
`

export { Heading1, Heading2, Heading3, Heading4, Heading5, Subheader, Text }
