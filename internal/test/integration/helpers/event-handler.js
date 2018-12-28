import React from 'react'
import { render, fireEvent } from 'react-testing-library'

const eventHandlerTest = (Fixture, button) => {
  const body = render(<Fixture />)

  const clickElement = body.getByTestId(button)
  fireEvent.click(clickElement)

  expect(Fixture.mockFn).toHaveBeenCalledWith()
}

export default eventHandlerTest
