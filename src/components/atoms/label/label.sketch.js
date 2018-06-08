import React from 'react'
import { storiesOf } from '@storybook/react'

import { Label } from '@auth0/cosmos'

storiesOf('Label', module).add('default', () => <Label appearance="default">Default</Label>)
storiesOf('Label', module).add('information', () => (
  <Label appearance="information">Information</Label>
))
storiesOf('Label', module).add('success', () => <Label appearance="success">Success</Label>)
storiesOf('Label', module).add('warning', () => <Label appearance="warning">Warning</Label>)
storiesOf('Label', module).add('danger', () => <Label appearance="danger">Danger</Label>)
