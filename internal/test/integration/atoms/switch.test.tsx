import Fixture from './switch.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'switch')
})

test('Calls onChange', () => {
  eventHandlerTest(Fixture, 'switch')
})
