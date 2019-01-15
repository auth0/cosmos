import Fixture from './image.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'image')
})

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'image')
})
