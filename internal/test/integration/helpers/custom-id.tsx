import * as React from 'react'
import { render } from 'react-testing-library'

const customIdTest = (Fixture, componentName) => {
  const body = render(<Fixture />)

  const content = body.getByTestId(componentName)

  expect(content).toHaveAttribute('id', 'custom-id')
}

export default customIdTest
