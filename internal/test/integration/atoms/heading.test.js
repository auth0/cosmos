import React from 'react'
import { render } from 'react-testing-library'

import Fixture from './heading.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'heading')
})

test('Calls event handler', () => {
  eventHandlerTest(Fixture, 'heading')
})
