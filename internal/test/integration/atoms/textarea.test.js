import Fixture from './textarea.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'text-area')
})

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'text-area')
})
