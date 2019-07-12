import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Example, IconStoryBox } from '@auth0/cosmos/_helpers/story-helpers'
import { Paragraph, Text, StackLayout, RowLayout, ColumnLayout } from '../../'

import { Icon } from '../../'
import { spacing } from '@auth0/cosmos/tokens'
import iconsRaw from './icons.json'

const icons = iconsRaw.icons

storiesOf('Icon', module).add('default', () => (
  <Example title="Icons">
    <StackLayout>
      <Icon name="analytics" />
      <Icon name="anomaly-detection" />
      <Icon name="apis" />
      <Icon name="arrow-left" />
      <Icon name="arrow-right" />
      <Icon name="authorization" />
      <Icon name="check" />
    </StackLayout>
  </Example>
))

storiesOf('Icon', module).add('size', () => (
  <Example title="Size">
    <StackLayout>
      <Icon name="analytics" size={spacing.xsmall} />
      <Icon name="analytics" size={spacing.small} />
      <Icon name="analytics" size={spacing.medium} />
      <Icon name="analytics" size={spacing.large} />
      <Icon name="analytics" size={spacing.xlarge} />
      <Icon name="analytics" size={spacing.xxlarge} />
    </StackLayout>
  </Example>
))

storiesOf('Icon', module).add('color', () => (
  <Example title="Size">
    <StackLayout>
      <Icon name="analytics" color="white" />
      <Icon name="analytics" color="black" />
      <Icon name="analytics" color="gray" />
      <Icon name="analytics" color="blue" />
      <Icon name="analytics" color="orange" />
      <Icon name="analytics" color="green" />
      <Icon name="analytics" color="red" />
    </StackLayout>
  </Example>
))

storiesOf('Icon', module).add('dark-background', () => (
  <Example title="Dark background" background="dark">
    <StackLayout>
      <Icon name="analytics" color="white" />
      <Icon name="analytics" color="black" />
      <Icon name="analytics" color="gray" />
      <Icon name="analytics" color="blue" />
      <Icon name="analytics" color="orange" />
      <Icon name="analytics" color="green" />
      <Icon name="analytics" color="red" />
    </StackLayout>
  </Example>
))

storiesOf('Icon', module).add('named icons', () => (
  <Example>
    <div>
      {Object.keys(icons).map(name => (
        <IconStoryBox key={name}>
          <Icon name={name} size={40} />
          <p>{name}</p>
        </IconStoryBox>
      ))}
    </div>
  </Example>
))

storiesOf('Icon', module).add('icon and text aligment', () => (
  <Example>
    <RowLayout gutter="large">
      <ColumnLayout>
        <div>
          <Icon name="danger" size="16" color="red" /> <Text>Icon name (Inline)</Text>
        </div>

        <div>
          <Icon name="danger" color="red" size="20" /> <Text>Icon name (Inline)</Text>
        </div>

        <StackLayout gutter="xsmall">
          <Icon color="red" name="danger" size="16" />
          <span>Icon name (Stack Layout)</span>
        </StackLayout>

        <StackLayout gutter="xsmall">
          <Icon name="danger" color="red" size="20" />
          <span>Icon name (Stack Layout)</span>
        </StackLayout>
      </ColumnLayout>

      <div>
        <div style={{ maxWidth: '300px', borderBottom: '1px solid #cecece', padding: '0.75rem 0' }}>
          <StackLayout distribution="spaceBetween">
            <StackLayout gutter="xsmall">
              <Icon color="default" name="settings" size="16" />
              <span>Icon name (Stack Layout)</span>
            </StackLayout>
            <Icon color="green" name="check" size="16" />
          </StackLayout>
        </div>
        <div style={{ maxWidth: '300px', borderBottom: '1px solid #cecece', padding: '0.75rem 0' }}>
          <StackLayout distribution="spaceBetween">
            <StackLayout gutter="xsmall">
              <Icon color="default" name="plus" size="16" />
              <span>Icon name (Stack Layout)</span>
            </StackLayout>
            <Icon color="green" name="check" size="16" />
          </StackLayout>
        </div>
      </div>

      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac velit fringilla,
        faucibus quam a, efficitur felis. Suspendisse viverra lacinia interdum. Vivamus semper
        interdum justo non aliquam. <Icon name="danger" size="16" color="red" /> Aliquam lacinia
        commodo nulla at vehicula. Curabitur eget enim bibendum, consectetur diam nec, pellentesque
        elit. Integer sagittis scelerisque elementum. Praesent eleifend enim a lorem hendrerit, et
        feugiat arcu mollis. Sed sit amet diam in felis euismod lacinia vitae nec augue. Curabitur
        tristique turpis non interdum rhoncus. Vivamus a finibus nunc, ut gravida turpis. Nam
        aliquam pretium velit, eu aliquam massa hendrerit et. Curabitur a tellus felis. Vivamus vel
        porttitor ante. In quis feugiat nisl. Curabitur mauris ante, posuere a mauris in, consequat
        faucibus diam. Quisque quis justo nisl.
      </Paragraph>
    </RowLayout>
  </Example>
))
