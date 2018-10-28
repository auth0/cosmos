import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Heading } from '@auth0/cosmos'

storiesOf('Heading').add('sizes', () => (
  <Example title="Sizes">
    <Heading size={1}>Good design is good business</Heading>
    <Heading size={2}>Good design is good business</Heading>
    <Heading size={3}>Good design is good business</Heading>
    <Heading size={4}>Good design is good business</Heading>
  </Example>
))

storiesOf('Heading').add('dark background', () => (
  <Example title="Dark background" background="dark">
    <Heading size={1} inverse>Good design is good business</Heading>
    <Heading size={2} inverse>Good design is good business</Heading>
    <Heading size={3} inverse>Good design is good business</Heading>
    <Heading size={4} inverse>Good design is good business</Heading>
  </Example>
))
