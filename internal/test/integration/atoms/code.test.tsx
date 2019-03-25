import Fixture from './code.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'code')
})

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'code')
})
