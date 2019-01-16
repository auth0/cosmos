import Fixture from './button.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'button')
})

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'button')
})
