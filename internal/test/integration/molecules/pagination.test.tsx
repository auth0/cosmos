import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Fixture from './pagination.fixture'
import customIdTest from '../helpers/custom-id'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'pagination')
})

test('Calls page change event handler', () => {
  const body = render(<Fixture />)

  const nextButton = body.getByLabelText('Next page')
  fireEvent.click(nextButton, {})

  expect(Fixture.onPageChanged).toHaveBeenCalled()

  const lastButton = body.getByText('Last')
  fireEvent.click(lastButton, {})

  expect(Fixture.onPageChanged).toHaveBeenCalled()
})
