import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Fixture from './form.fixture'
import customIdTest from '../helpers/custom-id'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'form')
  customIdTest(Fixture, 'text-input')
})

test('Primary action calls submit and click handler', () => {
  const form = render(<Fixture />)

  const primaryButton = form.getByText('Save Changes')
  fireEvent.click(primaryButton)

  expect(Fixture.onPrimaryClick).toHaveBeenCalled()
})

test('Secondary action calls handler', () => {
  const form = render(<Fixture />)

  const secondaryAction = form.getByText('Reset')
  fireEvent.click(secondaryAction)

  expect(Fixture.onSecondaryAction).toHaveBeenCalled()
})
