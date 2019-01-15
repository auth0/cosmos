import Fixture from './label.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'label')
})

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'label')
})
