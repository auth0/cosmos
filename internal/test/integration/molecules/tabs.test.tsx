import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Fixture from './tabs.fixture'
import customIdTest from '../helpers/custom-id'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'tabs')
})

test('First tab is rendered on start', () => {
  const body = render(<Fixture />)

  const content = body.getByTestId('tabs.item')

  expect(content).toHaveTextContent('This is tab 1')
})

test('Hitting right should move to next button', () => {
  const body = render(<Fixture />)

  const buttons = body.getAllByTestId('tabs.link')

  buttons[0].focus()
  expect(buttons[0]).toHaveFocus()

  fireEvent.keyDown(buttons[0], { key: 'ArrowRight' })

  expect(buttons[1]).toHaveFocus()
})

test('Hitting left should move to next button', () => {
  const body = render(<Fixture />)

  const buttons = body.getAllByTestId('tabs.link')

  buttons[1].focus()
  fireEvent.keyDown(buttons[1], { key: 'ArrowLeft' })

  expect(buttons[0]).toHaveFocus()
})

test('Hitting enter should select the tab', () => {
  const body = render(<Fixture />)

  const buttons = body.getAllByTestId('tabs.link')

  buttons[1].focus()
  fireEvent.keyDown(buttons[1], { key: 'Enter' })

  const content = body.getByTestId('tabs.item')
  expect(content).toHaveTextContent('This is tab 2')
})
