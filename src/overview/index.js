import React from 'react'

import { Logo } from '../components'
import { Grid, Column } from '../components/_helpers/grid'

import Overview from './ov-components/overview'
import Container from './ov-components/container'
import Links from './ov-components/links'

import Colors from './examples/colors'
import Icons from './examples/icons'
import Spacing from './examples/spacing'
import Forms from './examples/forms'
import EmptyStates from './examples/empty-states'
import Overlays from './examples/overlays'
import Tooltip from './examples/tooltip'
import Typography from './examples/typography'
import Buttons from './examples/buttons'

export default () => (
  <Overview>
    <Container>
      <Links />
      <Typography />
      <Buttons />
      <Icons />
      <EmptyStates />
      <Overlays />
      <Forms />
      <Tooltip />
    </Container>
  </Overview>
)
