import Fixture from './checkbox.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'checkbox')
})

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'checkbox.input', 'click', { target: { checked: true } })
})
