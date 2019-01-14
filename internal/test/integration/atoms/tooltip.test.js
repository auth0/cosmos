import Fixture from './tooltip.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'tooltip')
})

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'tooltip')
})
