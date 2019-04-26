import * as React from 'react'
import { render } from 'react-testing-library'

const customIdTest = (Fixture, expectedAttributeValue) => {
  const body = render(<Fixture />)

  const content = body.getByTestId(expectedAttributeValue)

  expect(content).not.toBeNull()
}

export default customIdTest
