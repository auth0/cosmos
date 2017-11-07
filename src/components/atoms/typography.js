import styled, { injectGlobal } from 'styled-components'

import { colors, fonts } from '../../tokens'

injectGlobal`
  @font-face {
    font-family: fakt-web;
    src: url(https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Blond.woff2)
        format('woff2'),
      url(https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Blond.woff) format('woff'),
      url(https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Blond.ttf) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
`

injectGlobal`



  @font-face {
    font-family: fakt-web;
    src: url(https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Normal.woff2)
        format('woff2'),
      url(https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Normal.woff) format('woff'),
      url(https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Normal.ttf)
        format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: fakt-web;
    src: url(https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Medium.woff2)
        format('woff2'),
      url(https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Medium.woff) format('woff'),
      url(https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Medium.ttf)
        format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY4gp9Q8gbYrhqGlRav_IXfk.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }

  body {
    font-family: ${fonts.text};
  }

`

const Headline = styled.h1`
  margin: 20px 0 14px;
  line-height: 1.8;
  color: ${colors.base};
  font-size: 48px;
  font-weight: 500;
`

const Subheader = styled.h6`
  margin: 20px 0 14px;
  line-height: 1.8;
  color: ${colors.grayDark};
  font-size: 13px;
  font-weight: 300;
`

const Text = styled.span`
  color: ${colors.grayDark};
  font-size: 14px;
  font-weight: 300;
`

export { Headline, Subheader, Text }
