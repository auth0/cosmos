import * as React from 'react'
import { Tag } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

const onRemove = jest.fn()

class Fixture extends React.Component {
  static onRemove = onRemove

  render() {
    return (
      <Tag.Group id="custom-id" onClick={mockFn}>
        <Tag id="custom-id" onRemove={onRemove}>
          First
        </Tag>
        <Tag>Second</Tag> <Tag>Third</Tag>
      </Tag.Group>
    )
  }
}

export default Fixture
