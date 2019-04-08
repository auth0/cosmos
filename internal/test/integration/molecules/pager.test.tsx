import * as React from 'react'
import Fixture from './pager.fixture'
import { render, fireEvent } from 'react-testing-library'
import customIdTest from '../helpers/custom-id'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'pager')
})

test('Calls page change event handler', () => {
  const body = render(<Fixture />)

  const nextButton = body.getByText('Older')
  fireEvent.click(nextButton, {})

  expect(Fixture.onPageChanged).toHaveBeenCalled()
})
