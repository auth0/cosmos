import React from 'react'
import { render } from 'react-testing-library'

import Fixture from './avatar.fixture'

test('Accepts custom id prop', () => {
  const body = render(<Fixture id="custom-id" />)

  const content = body.getByTestId('avatar')

  expect(content).toHaveAttribute('id', 'custom-id')
})
