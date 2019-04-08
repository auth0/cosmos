import Fixture from './badge.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'badge')
})

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'badge')
})
