import React from 'react'
import { render } from 'react-testing-library'

import Fixture from './link.fixture'
import customIdTest from '../helpers/custom-id'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'link')
})
