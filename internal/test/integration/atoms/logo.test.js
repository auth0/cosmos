import React from 'react'
import { render } from 'react-testing-library'

import Fixture from './logo.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'logo')
})

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'logo')
})
