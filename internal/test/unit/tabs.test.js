import React from 'react'
import { shallow } from 'enzyme'

import Tabs, { TabLink } from '@auth0/cosmos/molecules/tabs/tabs'

function tabsFactory() {
  const content = {
    first: <div className="content-1" />,
    second: <div className="content-2" />,
    third: <div className="content-3" />
  }

  const generator = (index = 0, onSelect = () => {}) =>
    shallow(
      <Tabs selected={index} onSelect={onSelect}>
        <Tabs.Tab title="Title 1">{content.first}</Tabs.Tab>
        <Tabs.Tab title="Title 2">{content.second}</Tabs.Tab>
        <Tabs.Tab title="Title 3">{content.third}</Tabs.Tab>
      </Tabs>
    )

  return { generator, content }
}

describe('Tabs', () => {
  it('renders only selected tab content', () => {
    const { generator: wrapper } = tabsFactory()

    expect(wrapper).toMatchSnapshot()
  })

  it('only render one tab title as selected', () => {
    const { generator } = tabsFactory()

    // Create three <Tabs> instances with different tabs selected
    const [first, second, third] = [generator(0), generator(1), generator(2)]

    expect(first).toMatchSnapshot()
    expect(second).toMatchSnapshot()
    expect(third).toMatchSnapshot()
  })

  it('onSelect is called on tab title click', () => {
    const { generator } = tabsFactory()
    const selectedHandler = jest.fn()

    const wrapper = generator(0, selectedHandler)
    const unSelectedTab = wrapper
      .find(TabLink)
      .filter({ selected: false })
      .first()

    unSelectedTab.simulate('click')

    expect(selectedHandler).toHaveBeenCalled()
  })
})
