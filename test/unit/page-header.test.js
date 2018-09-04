import React from 'react'
import { shallow, mount } from 'enzyme'

import { PageHeader, Button, Icon, Link } from '@auth0/cosmos'

describe('Page Header', () => {
  it('renders primary action only', () => {
    const label = 'Button Content'
    const icon = 'copy'
    const handler = jest.fn()
    const wrapper = shallow(<PageHeader primaryAction={{ label, icon, handler }} />)

    const headerButtons = wrapper.find(Button)
    const primaryAction = headerButtons.first()
    primaryAction.simulate('click')

    expect(headerButtons).toHaveLength(1)
    expect(handler).toHaveBeenCalled()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders secondary action only', () => {
    const label = 'Button Content'
    const icon = 'copy'
    const handler = jest.fn()
    const wrapper = shallow(
      <PageHeader description="A description" secondaryAction={{ label, icon, handler }} />
    )

    const headerButtons = wrapper.find(Button)
    const secondaryAction = headerButtons.last()
    secondaryAction.simulate('click')

    expect(headerButtons).toHaveLength(1)
    expect(handler).toHaveBeenCalled()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders both primary and secondary actions', () => {
    const actions = {
      primary: {
        label: 'Primary',
        icon: 'analytics',
        handler: jest.fn()
      },
      secondary: {
        label: 'Secondary',
        icon: 'copy',
        handler: jest.fn()
      }
    }

    const wrapper = shallow(
      <PageHeader
        primaryAction={actions.primary}
        secondaryAction={actions.secondary}
        description="A description"
      />
    )

    const headerButtons = wrapper.find(Button)
    const primaryAction = headerButtons.first()
    const secondaryAction = headerButtons.last()

    primaryAction.simulate('click')
    secondaryAction.simulate('click')

    expect(headerButtons).toHaveLength(2)

    expect(actions.primary.handler).toHaveBeenCalled()
    expect(actions.secondary.handler).toHaveBeenCalled()
    expect(wrapper).toMatchSnapshot()
  })
})
