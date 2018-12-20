import React from 'react'
import { Tag } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <Tag.Group id="custom-id">
        <Tag id="custom-id" onRemove={evt => alert('First tag was removed!')}>
          First
        </Tag>
        <Tag onRemove={evt => alert('Second tag was removed!')}>Second</Tag>{' '}
        <Tag onRemove={evt => alert('Third tag was removed!')}>Third</Tag>
      </Tag.Group>
    )
  }
}

export default Fixture
