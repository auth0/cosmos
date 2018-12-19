import React from 'react'
import { render } from 'react-testing-library'

import Fixture from './alert.fixture'

test('Accepts custom id prop', () => {
  const body = render(<Fixture id="custom-id" />)

  const content = body.getByTestId('alert')

  expect(content).toHaveAttribute('id', 'custom-id')
})
