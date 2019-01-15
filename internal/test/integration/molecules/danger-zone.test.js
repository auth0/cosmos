import Fixture from './danger-zone.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'danger-zone')
})

test('Calls action onClick handler', () => {
  eventHandlerTest(Fixture, 'danger-zone.action')
})
