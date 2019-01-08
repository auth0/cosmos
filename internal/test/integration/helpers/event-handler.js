import React from 'react'
import { render, fireEvent } from 'react-testing-library'

const mockFn = jest.fn()

const eventHandlerTest = (Fixture, elementToClick) => {
  const body = render(<Fixture />)

  const clickElement = body.getByTestId(elementToClick)
  fireEvent.click(clickElement)

  expect(mockFn).toHaveBeenCalledTimes(1)
}

export default eventHandlerTest
export { mockFn }
