import React from 'react'
import { storiesOf } from '@storybook/react'

import { Heading } from '@auth0/cosmos'

storiesOf('Heading', module).add('size 1', () => <Heading size={1}>Heading 1</Heading>)
storiesOf('Heading', module).add('size 2', () => <Heading size={2}>Heading 2</Heading>)
storiesOf('Heading', module).add('size 3', () => <Heading size={3}>Heading 3</Heading>)
storiesOf('Heading', module).add('size 4', () => <Heading size={4}>Heading 4</Heading>)
