import React from 'react'
import { render } from 'react-testing-library'

import Fixture from './spinner.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'spinner')
})

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'spinner')
})
