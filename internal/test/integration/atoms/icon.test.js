import React from 'react'
import { render } from 'react-testing-library'

import Fixture from './icon.fixture'
import customIdTest from '../helpers/custom-id'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'icon')
})
