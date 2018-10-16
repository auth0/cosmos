import { fonts, misc } from '@auth0/cosmos-tokens'

const insertAtTheStart = styles => {
  let tag = document.getElementById('cosmos-fonts')

  if (tag) {
    tag.innerHTML = styles
  } else {
    tag = document.createElement('style')
    tag.type = 'text/css'
    tag.id = 'cosmos-globals'
    tag.innerHTML = styles

    const head = document.getElementsByTagName('head')[0]
    head.insertBefore(tag, document.getElementsByTagName('link')[0])
  }
}

insertAtTheStart(`
  @font-face {
    font-family: fakt-web;
    src: url('https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Normal.woff2')
        format('woff2'),
      url('https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Normal.woff') format('woff'),
      url('https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Normal.ttf')
        format('truetype');
    font-weight: ${fonts.weight.normal};
    font-style: normal;
  }
  @font-face {
    font-family: fakt-web;
    src: url('https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Medium.woff2')
        format('woff2'),
      url('https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Medium.woff') format('woff'),
      url('https://cdn.auth0.com/styleguide/core/2.0.4/fonts/fakt/FaktPro-Medium.ttf')
        format('truetype');
    font-weight: ${fonts.weight.medium};
    font-style: normal;
  }
  @font-face {
    font-family: fakt-web;
    src: url('https://cdn.auth0.com/website/ds/fonts/fakt/FaktPro-SemiBold.woff2')
        format('woff2'),
      url('https://cdn.auth0.com/website/ds/fonts/fakt/FaktPro-SemiBold.woff') format('woff'),
      url('https://cdn.auth0.com/website/ds/fonts/fakt/FaktPro-SemiBold_web.ttf')
        format('truetype');
    font-weight: ${fonts.weight.bold};
    font-style: normal;
  }
  @font-face {
    font-family: 'budicon-font';
    src: url('https://cdn.auth0.com/fonts/budicons/fonts/budicon-font.woff') format('woff');
  }
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: ${fonts.weight.semibold};
    src: local('Roboto Mono'), local('RobotoMono-Regular'), url('https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY4gp9Q8gbYrhqGlRav_IXfk.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }
`)
