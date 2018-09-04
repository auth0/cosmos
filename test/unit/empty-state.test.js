import React from 'react'
import { shallow, mount } from 'enzyme'
import { EmptyState, Icon, Heading } from '@auth0/cosmos'

const emptyStateFactory = ({
  title = 'Some title',
  text = 'Some description',
  icon = 'copy',
  helpUrl = '/some-place',
  action = { title: 'Something', icon: 'copy', handler: () => {} }
}) => <EmptyState title={title} text={text} icon={icon} action={action} helpUrl={helpUrl} />

describe('Empty State', () => {
  it('renders the provided icon', () => {
    const iconName = 'copy'
    const wrapper = shallow(emptyStateFactory({ icon: iconName }))

    const icon = wrapper.find(Icon)

    expect(icon.prop('name')).toEqual(iconName)
  })

  it('renders the provided title', () => {
    const titleText = 'This is a sample title'
    const wrapper = mount(emptyStateFactory({ title: titleText }))

    const title = wrapper.find('h1')

    expect(title.prop('children')).toEqual(titleText)
  })

  it('renders the help text link if present', () => {
    const helpTextLink = '/some-place'
    const wrapper = mount(emptyStateFactory({ helpUrl: helpTextLink }))

    const link = wrapper.find('a')

    expect(link.prop('href')).toEqual(helpTextLink)
  })

  it('does not render help link if not provided', () => {
    const wrapper = mount(emptyStateFactory({ helpUrl: null }))

    expect(wrapper.exists('a')).toBe(false)
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
