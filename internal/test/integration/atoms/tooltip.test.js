import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Fixture from './tooltip.fixture'

test('Tooltip is hidden by default', () => {
  const body = render(<Fixture />)

  const tooltip = body.queryByTestId('tooltip')

  expect(tooltip).toBeFalsy()
})

test('Tooltip should show up on hover', () => {
  const body = render(<Fixture />)

  const trigger = body.getByText('Hover me')

  fireEvent.mouseEnter(trigger)
  const tooltip = body.queryByTestId('tooltip')

  expect(tooltip).toBeTruthy()
  /* should have custom id as well */
  expect(tooltip).toHaveAttribute('id', 'custom-id')
})
