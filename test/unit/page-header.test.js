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
    expect(primaryAction.contains(label))
    expect(primaryAction.contains(<Icon name={icon} />))
    expect(primaryAction.prop('appearance')).toEqual('cta')
  })

  it('renders secondary action only', () => {
    const label = 'Button Content'
    const icon = 'copy'
    const handler = jest.fn()
    const wrapper = shallow(
      <PageHeader description="A description" secondaryAction={{ label, icon, handler }} />
    )

    const headerButtons = wrapper.find(Button)
    const secondaryAction = headerButtons.first()

    secondaryAction.simulate('click')

    expect(headerButtons).toHaveLength(1)
    expect(handler).toHaveBeenCalled()
    expect(secondaryAction.contains(label))
    expect(secondaryAction.contains(<Icon name={icon} />))
    expect(secondaryAction.prop('appearance')).toEqual('secondary')
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
    expect(primaryAction.contains(actions.primary.label))
    expect(primaryAction.contains(<Icon name={actions.primary.icon} />))

    expect(actions.secondary.handler).toHaveBeenCalled()
    expect(secondaryAction.contains(actions.secondary.label))
    expect(secondaryAction.contains(<Icon name={actions.secondary.icon} />))
  })

  it('renders the given description', () => {
    const descriptionText = 'Some description'
    const wrapper = mount(<PageHeader description={descriptionText} />)

    expect(wrapper.exists('p')).toBe(true)
    expect(wrapper.find('p').prop('children')).toContain(descriptionText)
  })

  it('renders the learn more link', () => {
    const linkUri = '/some-place'
    const wrapper = mount(<PageHeader description="Something" learnMore={linkUri} />)

    // expect(wrapper.exists(Link)).toBe(true)
    expect(
      wrapper
        .find('p')
        .find(Link)
        .prop('href')
    ).toEqual(linkUri)
  })
})
