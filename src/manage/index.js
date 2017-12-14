import React from 'react'

import { Dummy as Navigation, Dummy as Sidebar, Dummy as PageHeader } from './dummy-components'

import { Heading1 } from '../components'

const Main = () => (
  <div>
    <Heading1>Default App</Heading1>
    <PageHeader />
  </div>
)

export default () => (
  <div>
    <Navigation />
    <Sidebar />
    <Main />
  </div>
)
