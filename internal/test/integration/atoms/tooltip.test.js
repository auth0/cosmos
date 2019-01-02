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

  fireEvent.blur(input)

  tooltip = body.queryByTestId('tooltip')
  expect(tooltip).toBeFalsy()
})

test('Tooltip should have custom id', () => {
  const body = render(<Fixture />)

  /* get tooltip to show */
  const input = body.queryByTestId('text-input')
  fireEvent.mouseEnter(input)

  let tooltip = body.queryByTestId('tooltip')
  expect(tooltip).toHaveAttribute('id', 'custom-id')
})

test('Tooltip should hide on escape key', () => {
  const body = render(<Fixture />)

  /* show tooltip */
  const input = body.queryByTestId('text-input')
  fireEvent.focus(input)

  let tooltip = body.queryByTestId('tooltip')

  /* confirm tooltip is shown*/
  expect(tooltip).toBeTruthy()

  fireEvent.keyDown(input, { key: 'Escape' })

  tooltip = body.queryByTestId('tooltip')
  expect(tooltip).toBeFalsy()
})
