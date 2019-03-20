import React from 'react'
import { getDrawer } from '@auth0/cosmos/_helpers/list'
import { List } from '@auth0/cosmos'

describe('List', () => {
  it('List can handle List.Drawer', () => {
    const providedDrawer = (
      <List.Drawer description="Something">
        <p>This is a test</p>
      </List.Drawer>
    )

    const children = <List.Item>{providedDrawer}</List.Item>

    const drawer = getDrawer(children, false, List.Drawer)
    expect(drawer[0].type).toEqual(List.Drawer)
  })

  it('List can handle', () => {
    const providedChildren = (
      <List.Body>
        <span>ID:</span>
      </List.Body>
    )

    const children = <List.Item>{providedChildren}</List.Item>

    const drawer = getDrawer(children, false, List.Drawer)
    expect(drawer).toHaveLength(0)
  })

  it('List can handle', () => {
    const providedChildren = null

    const children = <List.Item>{providedChildren}</List.Item>

    const drawer = getDrawer(children, false, List.Drawer)
    expect(drawer).toBeNull()
  })

  it('List can handle List.Drawer', () => {
    const providedDrawer = (
      <List.Drawer description="Something">
        <p>This is a test</p>
      </List.Drawer>
    )

    const children = <List.Item>{providedDrawer}</List.Item>

    const drawer = getDrawer(children, false, List.Drawer)
    expect(drawer[0].props.hidden).toEqual(true)
  })
})
