import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Fixture from './form.fixture'
import customIdTest from '../helpers/custom-id'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'form')
  customIdTest(Fixture, 'text-input')
})

test('Calls event handler on inputs', () => {
  const form = render(<Fixture />)

  const input = form.getByTestId('text-input')
  fireEvent.change(input)

  expect(Fixture.onInputChange).toHaveBeenCalled()
})

test('Primary action calls submit and click handler', () => {
  const form = render(<Fixture />)

  const primaryButton = form.getByTestId('button')
  fireEvent.click(primaryButton)

  expect(Fixture.onPrimaryClick).toHaveBeenCalled()
  expect(Fixture.onSubmit).toHaveBeenCalled()
})
