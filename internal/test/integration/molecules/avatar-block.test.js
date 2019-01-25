import React from 'react'
import { render } from 'react-testing-library'

import Fixture from './avatar-block.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  return customIdTest(Fixture, 'avatar-block')
})

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'avatar-block')
})
