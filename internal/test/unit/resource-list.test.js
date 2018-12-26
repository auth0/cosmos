import React from 'react'
import { shallow } from 'enzyme'
import { Button, ResourceList } from '@auth0/cosmos'
import { actionToButtonProps } from '@auth0/cosmos/molecules/resource-list/action-builder'

const noop = () => {}
const resourceListFactory = ({
  onItemClick = noop,
  items = [
    { title: 'Something', subtitle: 'Something else' },
    { title: 'Something 2', subtitle: 'Something else 2' }
  ]
} = {}) => shallow(<ResourceList items={items} onItemClick={onItemClick} />)

describe('ResourceList Action Builder', () => {
  it('builds actions', () => {
    const buttonPropTypes = Object.keys(Button.propTypes)
    const generatedProps = Object.keys(actionToButtonProps({}))
    const expectIfNotKey = (propName, expectation) => propName !== 'key' && expectation()

    // Ignore key since it is a React-internal prop
    generatedProps.forEach(prop =>
      expectIfNotKey(prop, () => expect(buttonPropTypes).toContain(prop))
    )
  })

  it('calls the onItemClick handler when appropiate', () => {
    const onItemClick = jest.fn()
    const resourceList = resourceListFactory({ onItemClick })
    const firstItem = resourceList.childAt(0)
    firstItem.simulate('click')

    expect(onItemClick).toHaveBeenCalled()
  })

  it('calls the action#onClick handler', () => {
    const actionCallback = jest.fn()
    const items = [
      {
        title: 'Something',
        subtitle: 'Something',
        actions: [<Button icon="warning" onClick={actionCallback} />]
      }
    ]
    const resourceList = resourceListFactory({ items })
    resourceList
      .childAt(0) // First ListItem
      .dive()
      .childAt(1) // Actions column
      .childAt(0) // Actions ButtonGroup
      .childAt(0) // First Action
      .simulate('click')
    expect(actionCallback).toHaveBeenCalledWith(undefined, items[0])
  })
})
