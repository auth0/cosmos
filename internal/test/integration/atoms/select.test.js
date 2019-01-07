import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Fixture from './select.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'select')
})

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'select')
})

test('Calls onChange', () => {
  const body = render(<Fixture />)

  const select = body.getByTestId('select')

  fireEvent.change(select, { value: 2 })

  expect(Fixture.onChange).toHaveBeenCalledTimes(1)
})
