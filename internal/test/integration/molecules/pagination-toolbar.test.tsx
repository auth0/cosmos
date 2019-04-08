import * as React from 'react'
import Fixture from './pagination-toolbar.fixture'
import { render, fireEvent } from 'react-testing-library'
import customIdTest from '../helpers/custom-id'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'pagination-toolbar')
})

test('Calls page change event handler', () => {
  const body = render(<Fixture />)

  const nextButton = body.getByLabelText('Next page')
  fireEvent.click(nextButton, {})

  expect(Fixture.onPageChanged).toHaveBeenCalled()
})
