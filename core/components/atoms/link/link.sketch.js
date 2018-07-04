import React from 'react'
import { storiesOf } from '@storybook/react'

import { Link } from '@auth0/cosmos'

storiesOf('Link', module).add('default', () => <Link href="https://auth0.com">Click me!</Link>)
