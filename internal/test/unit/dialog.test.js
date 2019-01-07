import React from 'react'
import { shallow } from 'enzyme'
import { Dialog, Button } from '@auth0/cosmos'

const noop = () => {}

const dialogFactory = ({
  open = true,
  title = 'Example Dialog',
  onClose = noop,
  actions = []
} = {}) => shallow(<Dialog open={open} title={title} onClose={onClose} actions={actions} />)

describe('Dialog', () => {
  it('calls onClose when clicked', () => {
    const onClose = jest.fn()

    const dialog = dialogFactory({ onClose })
    const overlay = dialog.childAt(0)
    const dialogElement = overlay.childAt(0)
    const closeContainer = dialogElement.childAt(0)
    const closeButton = closeContainer.childAt(0)

    closeButton.simulate('click')

    expect(onClose).toHaveBeenCalled()
  })

  it('calls actions handler', () => {
    const onClick = jest.fn()
    const actions = [<Button onClick={onClick}>Something</Button>]

    const action = dialogFactory({ actions })
      .childAt(0) // FocusLock
      .childAt(0) // Dialog Element
      .childAt(3) // Footer
      .childAt(0) // Footer Actions
      .childAt(0) // First Action

    action.simulate('click')

    expect(onClick).toHaveBeenCalled()
  })
})
