import React from 'react'
import { storiesOf } from '@storybook/react'

import { Text } from '@auth0/cosmos'

storiesOf('Text', module).add('default', () => <Text>Good old text</Text>)

storiesOf('Text', module).add('all caps', () => <Text type="allcaps">All caps text</Text>)

storiesOf('Text', module).add('subdued', () => <Text type="subdued">subdued text</Text>)
