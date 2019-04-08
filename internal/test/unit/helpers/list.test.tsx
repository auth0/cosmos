import * as React from 'react'
import { shallow } from 'enzyme'
import { getDrawer, isListExpandable, excludeDrawer } from '@auth0/cosmos/_helpers/list'
import { List } from '@auth0/cosmos'

const testCases = {
  hiddenListDrawer: () => (
    <List.Item>
      <List.Drawer hidden description="Something">
        <p>This is a test</p>
      </List.Drawer>
    </List.Item>
  ),
  includingListDrawer: () => (
    <List.Item>
      <List.Drawer description="Something">
        <p>This is a test</p>
      </List.Drawer>
    </List.Item>
  ),
  excludingListDrawer: () => (
    <List.Item>
      <List.Body>
        <span>ID:</span>
      </List.Body>
    </List.Item>
  ),
  nullChildren: () => <List.Item>{null}</List.Item>
}

describe('getDrawer', () => {
  it.only('should handle a List.Drawer', () => {
    const drawer = getDrawer(testCases.includingListDrawer(), false, List.Drawer)
    expect(drawer[0].type).toEqual(List.Drawer)
  })

  it.only('should handle children without List.Drawer', () => {
    const drawer = getDrawer(testCases.excludingListDrawer(), false, List.Drawer)
    expect(drawer).toHaveLength(0)
  })

  it.only('should handle null children', () => {
    const drawer = getDrawer(testCases.nullChildren(), false, List.Drawer)
    expect(drawer).toBeNull()
  })

  it.only('should pass a hidden prop to List.Drawer', () => {
    const drawer = getDrawer(testCases.includingListDrawer(), false, List.Drawer)
    expect(drawer[0].props.hidden).toEqual(true)
  })
})

describe('isListExpandable', () => {
  it.only('should handle a List.Drawer', () => {
    const [isExpandable, _] = isListExpandable(testCases.includingListDrawer(), List.Drawer)

    expect(isExpandable).toBe(true)
  })

  it.only('should handle children without List.Drawer', () => {
    const [isExpandable, _] = isListExpandable(testCases.excludingListDrawer(), List.Drawer)

    expect(isExpandable).toBe(false)
  })

  it.only('should handle null children', () => {
    const [isExpandable, _] = isListExpandable(testCases.nullChildren(), List.Drawer)

    expect(isExpandable).toBe(false)
  })

  it.only('should mark the arrow as visible if hidden is not passed to List.Drawer', () => {
    const [_, arrowIsVisible] = isListExpandable(testCases.includingListDrawer(), List.Drawer)

    expect(arrowIsVisible).toBe(true)
  })

  it.only('should mark the arrow as not visible when hidden is passed to List.Drawer', () => {
    const [_, arrowIsVisible] = isListExpandable(testCases.hiddenListDrawer(), List.Drawer)

    expect(arrowIsVisible).toBe(false)
  })
})

describe('excludeDrawer', () => {
  it.only('should handle a List.Drawer', () => {
    const result = excludeDrawer(testCases.includingListDrawer(), List.Drawer)
    const children = shallow(result).children()

    expect(children.exists()).toBe(false)
  })

  it.only('should handle children without List.Drawer', () => {
    const result = excludeDrawer(testCases.excludingListDrawer(), List.Drawer)
    const children = shallow(result).children()

    expect(children.exists()).toBe(true)
  })

  it.only('should handle null children', () => {
    const result = excludeDrawer(testCases.nullChildren(), List.Drawer)
    const children = shallow(result).children()

    expect(children.exists()).toBe(false)
  })
})
