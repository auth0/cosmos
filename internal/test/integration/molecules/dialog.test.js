import React from 'react'
import { render } from 'react-testing-library'

import Fixture from './dialog.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'dialog')
})

test('Calls custom handler', () => {
  eventHandlerTest(Fixture, 'dialog.close')
})

test('Calls actions handler', () => {
  const dialog = render(<Fixture />)

  const dialogAction = dialog.getAllByTestId('dialog.action')[0]
  dialogAction.click()

  expect(Fixture.actionOnClick).toHaveBeenCalled()
})
