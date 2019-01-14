import Fixture from './sidebar.fixture'
import customIdTest from '../helpers/custom-id'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'sidebar')
  customIdTest(Fixture, 'sidebar.link')
  customIdTest(Fixture, 'sidebar.group')
})
