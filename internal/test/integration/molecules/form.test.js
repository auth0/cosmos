import React from 'react'
import { render } from 'react-testing-library'

import Fixture from './form.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'form')
  customIdTest(Fixture, 'text-input')
})

test('Calls event handler on inputs', () => {
  eventHandlerTest(Fixture, 'text-input', 'change')
})
