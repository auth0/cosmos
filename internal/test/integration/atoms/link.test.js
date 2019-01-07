import React from 'react'
import { render } from 'react-testing-library'
import eventHandlerTest from '../helpers/event-handler'

import Fixture from './link.fixture'
import customIdTest from '../helpers/custom-id'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'link')
})

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'link')
})
