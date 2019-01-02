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

  const input = body.queryByTestId('text-input')
  fireEvent.mouseEnter(input)

  let tooltip = body.queryByTestId('tooltip')
  expect(tooltip).toBeTruthy()

  /* should have custom id as well */
  expect(tooltip).toHaveAttribute('id', 'custom-id')

  fireEvent.mouseLeave(input)

  tooltip = body.queryByTestId('tooltip')
  expect(tooltip).toBeFalsy()
})

test('Tooltip is shows up on focus', () => {
  const body = render(<Fixture />)

  const input = body.queryByTestId('text-input')
  fireEvent.focus(input)

  let tooltip = body.queryByTestId('tooltip')
  expect(tooltip).toBeTruthy()

  /* should have custom id as well */
  expect(tooltip).toHaveAttribute('id', 'custom-id')

  fireEvent.blur(input)

  tooltip = body.queryByTestId('tooltip')
  expect(tooltip).toBeFalsy()
})
