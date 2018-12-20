import React from 'react'
import { render } from 'react-testing-library'

import Fixture from './breadcrumb.fixture'
import customIdTest from '../helpers/custom-id'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'breadcrumb')
  customIdTest(Fixture, 'breadcrumb.link')
})
