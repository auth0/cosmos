import React from 'react'

import Example from '../ov-components/example'
import { Tag } from '@auth0/cosmos'

const handleRemove = text => evt => {
  alert(`${text} was removed!`)
}

const Tags = () => (
  <Example title="Tags">
    <Tag.Group>
      <Tag onRemove={handleRemove('One')}>One</Tag>
      <Tag onRemove={handleRemove('Two')}>Two</Tag>
      <Tag onRemove={handleRemove('Three')}>Three</Tag>
      <Tag onRemove={handleRemove('Four')}>Four</Tag>
      <Tag onRemove={handleRemove('Five')}>Five</Tag>
    </Tag.Group>
  </Example>
)

export default Tags
