import React from 'react'

import { Logo } from '../components'
import { Grid, Column } from '../components/_helpers/grid'

import Overview from './src/overview'

import Colors from './src/colors'
import Icons from './src/icons'
import Spacing from './src/spacing'
import Forms from './src/forms'
import EmptyStates from './src/empty-states'
import Overlays from './src/overlays'

import Links from './src/links'
import Tooltip from './src/tooltip'
import Typography from './src/typography'
import Buttons from './src/buttons'

export default () => (
  <Overview>
    <Grid>
      <Column>
        <Logo />
        <Colors />
        <Icons />
        <Spacing />
        <EmptyStates />
        <Overlays />
        <Forms />
        <Tooltip />
      </Column>
      <Column>
        <Links />
        <Typography />
        <Buttons />
      </Column>
    </Grid>
  </Overview>
)
