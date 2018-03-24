import React from 'react'
import { storiesOf } from '@storybook/react'
import withPropsCombinations from 'react-storybook-addon-props-combinations'

import { Button } from 'auth0-cosmos'

storiesOf('Button').add(
  'All combinations',
  withPropsCombinations(
    Button,
    {
      size: ['default', 'large', 'small', 'compressed'],
      appearance: ['default', 'primary', 'transparent', 'destructive', 'link'],
      icon: ['', 'delete'],
      label: ['', 'Click here'],
      disabled: [true, false],
      loading: [true, false],
      success: [true, false],
      children: ['Button']
    },
    {
      showSource: false
    }
  )
)
