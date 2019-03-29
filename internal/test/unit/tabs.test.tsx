import * as React from 'react'
import { shallow } from 'enzyme'

import Tabs from '@auth0/cosmos/molecules/tabs/tabs'

function tabsFactory() {
  const content = {
    first: <div className="content-1" />,
    second: <div className="content-2" />,
    third: <div className="content-3" />
  }

  const generator = (index = 0, onSelect = () => { }) =>
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
    jest.mock('../../../core/components/_helpers/uniqueId', () => () => 'abcdef1234')
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
      .find(Tabs.TabLink)
      .filter({ 'aria-selected': false })
      .first()

    unSelectedTab.simulate('click')

    expect(selectedHandler).toHaveBeenCalled()
  })

  it('renders linked accessibility identifiers', () => {
    const { generator } = tabsFactory()
    const testableIndexes = [0, 1, 2]

    testableIndexes.forEach(index => {
      const tabs = generator(index)

      // @ts-ignore
      const [tabList, activeTabPanel] = tabs.children()

      const getPropFromTabLink = propName =>
        tabList.props.children.map(link => link.props.children.props[propName])

      const getPropFromTabPane = (propName, removeValue?: string) => {
        const value = activeTabPanel.props[propName]
        return removeValue ? value.replace(removeValue, '') : value
      }

      const tabLinkIds = getPropFromTabLink('id')
      const tabLinkAriaControls = getPropFromTabLink('aria-controls')

      expect(tabLinkIds[index]).toEqual(getPropFromTabPane('id', '-tab'))
      expect(tabLinkIds[index]).toEqual(getPropFromTabPane('aria-labelledby', '-tab'))
      expect(tabLinkAriaControls[index]).toEqual(getPropFromTabPane('id'))
    })
  })
})
