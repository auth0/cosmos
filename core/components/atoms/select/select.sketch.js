import React from 'react'
import { storiesOf } from '@storybook/react'

import { Select } from '@auth0/cosmos'

storiesOf('Select', module).add('default', () => (
  <Select
    value={1}
    options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
    onChange={event => console.log(event)}
  />
))

storiesOf('Select', module).add('default value', () => (
  <Select
    value={2}
    options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
    onChange={event => console.log(event)}
  />
))

storiesOf('Select', module).add('readOnly', () => (
  <Select
    readOnly
    value={2}
    options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
    onChange={event => console.log(event)}
  />
))
