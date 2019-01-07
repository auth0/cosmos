import React from 'react'
import { render } from 'react-testing-library'

import Fixture from './breadcrumb.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'breadcrumb')
  customIdTest(Fixture, 'breadcrumb.link')
})

test('Calls event handler', () => {
  eventHandlerTest(Fixture, 'breadcrumb.link')
})
