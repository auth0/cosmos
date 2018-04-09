import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Icon } from '@auth0/cosmos'
import { spacing, colors } from '@auth0/cosmos/tokens'

storiesOf('Icon').add('default', () => (
  <Example title="Icons">
    <Icon name="analytics" />
    <Icon name="anomaly-detection" />
    <Icon name="apis" />
    <Icon name="arrow-left" />
    <Icon name="arrow-right" />
    <Icon name="authorization" />
    <Icon name="check" />
  </Example>
))

storiesOf('Icon').add('size', () => (
  <Example title="Size">
    <Icon name="analytics" size={spacing.xsmall} />
    <Icon name="analytics" size={spacing.small} />
    <Icon name="analytics" size={spacing.medium} />
    <Icon name="analytics" size={spacing.large} />
    <Icon name="analytics" size={spacing.xlarge} />
    <Icon name="analytics" size={spacing.xxlarge} />
  </Example>
))

storiesOf('Icon').add('color', () => (
  <Example title="Size">
    <Icon name="analytics" color={colors.base.white} />
    <Icon name="analytics" color={colors.base.black} />
    <Icon name="analytics" color={colors.base.gray} />
    <Icon name="analytics" color={colors.base.blue} />
    <Icon name="analytics" color={colors.base.orange} />
    <Icon name="analytics" color={colors.base.green} />
    <Icon name="analytics" color={colors.base.red} />
  </Example>
))

storiesOf('Icon').add('dark-background', () => (
  <Example title="Dark background" background="dark">
    <Icon name="analytics" color={colors.base.white} />
    <Icon name="analytics" color={colors.base.black} />
    <Icon name="analytics" color={colors.base.gray} />
    <Icon name="analytics" color={colors.base.blue} />
    <Icon name="analytics" color={colors.base.orange} />
    <Icon name="analytics" color={colors.base.green} />
    <Icon name="analytics" color={colors.base.red} />
  </Example>
))
