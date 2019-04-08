import * as React from 'react'
import { shallow, mount } from 'enzyme'

import { PageHeader, Button, Icon, Link } from '@auth0/cosmos'
import { escapeComponent } from 'uri-js'

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

  it('calls primaryAction#handler callback', () => {
    const primaryAction = { label: 'Something', icon: 'copy', handler: jest.fn() }
    const pageHeader = shallow(
      <PageHeader primaryAction={primaryAction} description="A description" />
    )
    pageHeader
      .childAt(2)
      .childAt(0)
      .simulate('click')

    expect(primaryAction.handler).toHaveBeenCalled()
  })

  it('calls secondaryAction#handler callback', () => {
    const secondaryAction = { label: 'Something', icon: 'copy', handler: jest.fn() }
    const pageHeader = shallow(
      <PageHeader secondaryAction={secondaryAction} description="A description" />
    )
    pageHeader
      .childAt(2)
      .childAt(0)
      .simulate('click')

    expect(secondaryAction.handler).toHaveBeenCalled()
  })
})
