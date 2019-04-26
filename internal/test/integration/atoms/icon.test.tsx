import Fixture from './icon.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'icon')
})

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'icon')
})
