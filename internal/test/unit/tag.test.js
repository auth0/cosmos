import React from 'react'
import { shallow } from 'enzyme'
import { Tag } from '@auth0/cosmos'

describe('Tag', () => {
  it('calls onClick handler', () => {
    const handler = jest.fn()
    const tag = shallow(<Tag onClick={handler}>Something</Tag>)

    tag.simulate('click')

    expect(handler).toHaveBeenCalled()
  })

  it('calls onRemove handler', () => {
    const handler = jest.fn()
    const tag = shallow(<Tag onRemove={handler}>Something else</Tag>)

    tag.childAt(1).simulate('click', { stopPropagation: jest.fn() })

    expect(handler).toHaveBeenCalled()
  })

  it('does not call onClick when removed', () => {
    const onClick = jest.fn()
    const onRemove = jest.fn()
    const stopPropagation = jest.fn()

    const tag = shallow(
      <Tag onClicr={onClick} onRemove={onRemove}>
        Something else
      </Tag>
    )

    tag.childAt(1).simulate('click', { stopPropagation })

    expect(onRemove).toHaveBeenCalled()
    expect(onClick).not.toHaveBeenCalled()
    expect(stopPropagation).toHaveBeenCalled()
  })
})
