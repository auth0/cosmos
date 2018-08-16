import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { CardList } from '@auth0/cosmos'

storiesOf('Card List').add('default', () => (
  <Example title="default">
    <CardList
      items={[{
        content: 'Card'
      }, {
        content: 'Card'
      }, {
        content: 'Card'
      }, {
        content: 'Card'
      }, {
        content: 'Card'
      }, {
        content: 'Card'
      }]}
      renderItem={(item) => (
        <CardList.Item>
          {item.content}
        </CardList.Item>
      )}
    />
  </Example>
))

storiesOf('Card List').add('columns', () => (
  <Example title="columns">
    <CardList
      columns={4}
      items={[{
        content: 'Card'
      }, {
        content: 'Card'
      }, {
        content: 'Card'
      }, {
        content: 'Card'
      }, {
        content: 'Card'
      }, {
        content: 'Card'
      }]}
      renderItem={(item) => (
        <CardList.Item>
          {item.content}
        </CardList.Item>
      )}
    />
  </Example>
))

storiesOf('Card List').add('gutter', () => (
  <Example title="gutter">
    <CardList
      columns={2}
      gutter="default"
      items={[{
        content: 'Card'
      }, {
        content: 'Card'
      }]}
      renderItem={(item) => (
        <CardList.Item>
          {item.content}
        </CardList.Item>
      )}
    />
    <CardList
      columns={2}
      gutter="small"
      items={[{
        content: 'Card'
      }, {
        content: 'Card'
      }]}
      renderItem={(item) => (
        <CardList.Item>
          {item.content}
        </CardList.Item>
      )}
    />
    <CardList
      columns={2}
      gutter="none"
      items={[{
        content: 'Card'
      }, {
        content: 'Card'
      }]}
      renderItem={(item) => (
        <CardList.Item>
          {item.content}
        </CardList.Item>
      )}
    />
  </Example>
))


