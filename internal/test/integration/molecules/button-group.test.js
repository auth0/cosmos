import React from 'react'
import { render } from 'react-testing-library'

import Fixture from './button-group.fixture'
import customIdTest from '../helpers/custom-id'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'button-group')
  customIdTest(Fixture, 'button')
})

import eventHandlerTest from '../helpers/event-handler'

test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'button-group')
})
