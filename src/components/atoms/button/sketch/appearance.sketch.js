import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button, ButtonGroup } from '@auth0/cosmos'

storiesOf('Button', module).add('default', () => <Button>Button</Button>)
storiesOf('Button', module).add('primary', () => <Button appearance="primary">Button</Button>)
storiesOf('Button', module).add('seconadary', () => <Button appearance="seconadary">Button</Button>)
storiesOf('Button', module).add('link', () => <Button appearance="link">Button</Button>)
storiesOf('Button', module).add('destructive', () => (
  <Button appearance="destructive">Button</Button>
))
