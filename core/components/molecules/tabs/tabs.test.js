import React from 'react'
import { shallow } from 'enzyme'

import Tabs, { TabLink } from './tabs'

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

describe('Tabs tests', () => {
  it('renders only selected tab content', () => {
    const { generator, content } = tabsFactory()

    // Create three <Tabs> instances with different tabs selected
    const [first, second, third] = [generator(0), generator(1), generator(2)]

    expect(first).toMatchSnapshot()
    expect(second).toMatchSnapshot()
    expect(third).toMatchSnapshot()

    expect(first.contains(content.first)).toBe(true)
    expect(first.contains(content.second)).toBe(false)
    expect(first.contains(content.third)).toBe(false)

    expect(second.contains(content.first)).toBe(false)
    expect(second.contains(content.second)).toBe(true)
    expect(second.contains(content.third)).toBe(false)

    expect(third.contains(content.first)).toBe(false)
    expect(third.contains(content.second)).toBe(false)
    expect(third.contains(content.third)).toBe(true)
  })

  it('only render one tab title as selected', () => {
    const { generator } = tabsFactory()

    // Create three <Tabs> instances with different tabs selected
    const [first, second, third] = [generator(0), generator(1), generator(2)]

    expect(first.find(TabLink).filter({ selected: true })).toHaveLength(1)
    expect(second.find(TabLink).filter({ selected: true })).toHaveLength(1)
    expect(third.find(TabLink).filter({ selected: true })).toHaveLength(1)
  })

  it('render item titles', () => {
    const wrapper = shallow(
      <Tabs selected={0} onSelect={() => {}}>
        <Tabs.Tab title="First title">First content</Tabs.Tab>
        <Tabs.Tab title="Second Title">Second Content</Tabs.Tab>
      </Tabs>
    )
    const tabLinks = wrapper.find(TabLink)
    expect(tabLinks).toHaveLength(2)
    expect(wrapper).toMatchSnapshot()
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
    expect(wrapper).toMatchSnapshot()
  })
})
