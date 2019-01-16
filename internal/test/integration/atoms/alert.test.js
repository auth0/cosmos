import React from 'react'
import { render } from 'react-testing-library'

import Fixture from './alert.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'alert')
})

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'alert.dismiss')
})

test('Calls custom event handler automatically using dismissAfterSeconds', () => {
  const alert = render(<Fixture dismissAfterSeconds={0.5} />)

  return new Promise(resolve => {
    setTimeout(() => {
      expect(Fixture.onDismiss).toHaveBeenCalled()
      resolve()
    }, 750)
  })
})
