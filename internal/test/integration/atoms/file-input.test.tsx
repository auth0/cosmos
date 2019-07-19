import customIdTest from '../helpers/custom-id'
import Fixture from './file-input.fixture'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'file-input')
})
