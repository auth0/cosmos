import React from 'react'
import { render } from 'react-testing-library'

import Fixture from './label.fixture'
import customIdTest from './helpers/custom-id'

test('Accepts custom id prop', () => {
  return customIdTest(Fixture, 'label')
})
