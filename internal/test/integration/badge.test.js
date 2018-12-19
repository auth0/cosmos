import React from 'react'
import { render } from 'react-testing-library'

import Fixture from './badge.fixture'

test('Accepts custom id prop', () => {
  const body = render(<Fixture id="custom-id" />)

  const content = body.getByTestId('badge')

  expect(content).toHaveAttribute('id', 'custom-id')
})
