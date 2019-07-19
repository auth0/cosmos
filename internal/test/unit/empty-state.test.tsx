import * as React from 'react'
import { shallow, mount } from 'enzyme'
import { EmptyState } from '@auth0/cosmos'
import { ActionWithIcon } from '@auth0/cosmos/_helpers/action-shape'

type EmptyStateFactoryParams = {
  title?: string
  icon?: string
  link?: string
  action?: { label?: string; icon?: string; handler: Function }
}

const emptyStateFactory = ({
  title = 'Some title',
  icon = 'copy',
  link = '/some-place',
  action = { label: 'Something', icon: 'copy', handler: () => {} }
}: EmptyStateFactoryParams = {}) => {
  const safeAction = action as ActionWithIcon
  return (
    <EmptyState title={title} icon={icon} action={safeAction} link={link}>
      Some description
    </EmptyState>
  )
}

describe('Empty State', () => {
  it('renders properly', () => {
    const wrapper = shallow(emptyStateFactory())
    expect(wrapper).toMatchSnapshot()
  })

  it('renders properly without help link', () => {
    const wrapper = shallow(emptyStateFactory({ link: null }))
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the provided action and the helper is being called', () => {
    const action = { title: 'Something', icon: 'copy', handler: jest.fn() }
    const wrapper = mount(emptyStateFactory({ action }))

    expect(wrapper.exists('button')).toBe(true)

    const button = wrapper.find('button')
    button.simulate('click')

    expect(action.handler).toHaveBeenCalledTimes(1)
  })
})
