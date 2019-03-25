import * as React from 'react'
import { shallow, mount } from 'enzyme'
import { EmptyState, Icon, Heading } from '@auth0/cosmos'

const emptyStateFactory = ({
  title = 'Some title',
  icon = 'copy',
  link = '/some-place',
  action = { label: 'Something', icon: 'copy', handler: () => {} }
} = {}) => (
  <EmptyState title={title} icon={icon} action={action} link={link}>
    Some description
  </EmptyState>
)

describe('Empty State', () => {
  it('renders properly', () => {
    const wrapper = shallow(emptyStateFactory())
    expect(wrapper).toMatchSnapshot()
  })

  it('renders properly without help link', () => {
    const wrapper = shallow(emptyStateFactory({ link: null }))
    expect(wrapper).toMatchSnapshot()
  })

  it('renders properly without text', () => {
    const wrapper = shallow(emptyStateFactory({ text: null }))
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
