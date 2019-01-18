import React from 'react'
import { render, fireEvent } from 'react-testing-library'

const mockFn = jest.fn()

const sampleEvent = {
  stopPropagation: jest.fn(),
  preventDefault: jest.fn()
}

const checkEventIsValid = event => {
  const availableEvents = Object.keys(fireEvent)

  if (availableEvents.indexOf(event) < 0)
    throw new Error(
      `Event '${event}' is not valid. Please use one of: ${availableEvents.join(', ')}`
    )
}

const eventHandlerTest = (Fixture, elementToTrigger, event = 'click', eventData = sampleEvent) => {
  mockFn.mockReset()
  checkEventIsValid(event)
  const body = render(<Fixture />)

  const triggerableElement = body.getByTestId(elementToTrigger)
  fireEvent[event](triggerableElement, eventData)

  expect(mockFn).toHaveBeenCalled()
}

export default eventHandlerTest
export { mockFn }
