import * as React from 'react'
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
    const event = { stopPropagation: jest.fn() }
    resourceList
      .childAt(0) // First ListItem
      .dive()
      .childAt(1) // Actions column
      .childAt(0) // Actions ButtonGroup
      .childAt(0) // First Action
      .simulate('click', event)

    expect(actionCallback).toHaveBeenCalledWith(event, items[0])
    expect(event.stopPropagation).toHaveBeenCalled()
  })

  it('calls the action#handler function when using objects as actions', () => {
    const actionCallback = jest.fn()
    const items = [
      {
        title: 'Something',
        subtitle: 'Something',
        //actions: [<Button icon="warning" onClick={actionCallback} />]
        actions: [{ icon: 'warning', handler: actionCallback }]
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
