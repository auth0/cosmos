import * as React from 'react'
import { render } from 'react-testing-library'

import Fixture from './form-group.fixture'
import customIdTest from '../helpers/custom-id'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'form-group')
})
