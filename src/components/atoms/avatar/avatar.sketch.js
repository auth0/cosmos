import React from 'react'
import { storiesOf } from '@storybook/react'

import { Avatar } from '@auth0/cosmos'

storiesOf('Avatar', module).add('small', () => (
  <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" size="small" name="Cosmos" />
))
storiesOf('Avatar', module).add('medium', () => (
  <Avatar
    image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
    size="medium"
    name="Cosmos"
  />
))
storiesOf('Avatar', module).add('large', () => (
  <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" size="large" name="Cosmos" />
))
