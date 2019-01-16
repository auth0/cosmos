import Fixture from './text-input.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'text-input')
})

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'text-input')
})
