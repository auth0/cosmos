import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Fixture from './tag.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'tag')
  customIdTest(Fixture, 'tag.group')
})

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'tag')
})

test('Calls onRemove', () => {
  const body = render(<Fixture />)

  const removeElement = body.getByTestId('tag.remove')
  fireEvent.click(removeElement)

  expect(Fixture.onRemove).toHaveBeenCalledTimes(1)
})
