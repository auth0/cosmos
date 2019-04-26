import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Fixture from './table.fixture'
import customIdTest from '../helpers/custom-id'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'table')
})

test('Calls on sort event handler', () => {
  const body = render(<Fixture />)

  const nextButton = body.getByText('Goals')
  fireEvent.click(nextButton)

  expect(Fixture.onSort).toHaveBeenCalled()
})

test('Calls on row click event handler', () => {
  const body = render(<Fixture />)

  const row = body.getByTestId('table.row')
  fireEvent.click(row)

  expect(Fixture.onRowClick).toHaveBeenCalled()
})
