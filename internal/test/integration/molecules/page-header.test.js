import Fixture from './page-header.fixture'
import customIdTest from '../helpers/custom-id'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'page-header')
})
