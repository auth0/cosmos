import React from 'react'
import { storiesOf } from '@storybook/react'

import { Breadcrumb } from '@auth0/cosmos'

storiesOf('Breadcrumb', module).add('default', () => (
  <Breadcrumb link="https://auth0.com" content="Current page" />
))
