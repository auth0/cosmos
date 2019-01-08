import React from 'react'
import { shallow } from 'enzyme'
import { Tag } from '@auth0/cosmos'

describe('Tag', () => {
  it('does not call onClick when removed', () => {
    const onClick = jest.fn()
    const onRemove = jest.fn()
    const stopPropagation = jest.fn()

    const tag = shallow(
      <Tag onClick={onClick} onRemove={onRemove}>
        Something else
      </Tag>
    )

    tag.childAt(1).simulate('click', { stopPropagation })

    expect(onRemove).toHaveBeenCalled()
    expect(onClick).not.toHaveBeenCalled()
    expect(stopPropagation).toHaveBeenCalled()
  })
})
