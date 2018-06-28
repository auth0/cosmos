import React from 'react'
import { storiesOf } from '@storybook/react'

import { Image } from '@auth0/cosmos'

storiesOf('Image', module).add('default', () => (
  <Image
    source="https://cdn.auth0.com/website/assets/pages/press/img/resources/auth0-logo-monotone-black-f9bf0aaf29.svg"
    alt="auth0 logo"
  />
))
