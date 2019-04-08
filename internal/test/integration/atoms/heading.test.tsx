import Fixture from './heading.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'heading')
})

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'heading')
})
