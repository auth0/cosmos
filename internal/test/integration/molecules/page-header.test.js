import React from 'react'
import Fixture from './page-header.fixture'
import { render, fireEvent } from 'react-testing-library'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'page-header')
})

test('Calls custom event handler', () => {
  const body = render(<Fixture />)

  const primaryAction = body.getByText('Create Client')
  fireEvent.click(primaryAction, {})

  expect(Fixture.onPrimaryClick).toHaveBeenCalled()
})
