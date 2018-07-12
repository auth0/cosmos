import React from 'react'
import { storiesOf } from '@storybook/react'

import { Icon } from '@auth0/cosmos'
import { __ICONNAMES__ } from '@auth0/cosmos/atoms/icon'

__ICONNAMES__.map(name => {
  storiesOf('Icon', module).add(name, () => <Icon name={name} />)
})
