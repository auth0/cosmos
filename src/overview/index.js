import React from 'react'

import { Logo } from '../components'
import { Grid, Column } from '../components/_helpers/grid'

import Overview from './src/overview'

import Colors from './src/colors'
import Icons from './src/icons'
import Spacing from './src/spacing'
import Forms from './src/forms'

import Github from './src/github'
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
        <Forms />
      </Column>
      <Column>
        <Github />
        <Typography />
        <Buttons />
      </Column>
    </Grid>
  </Overview>
)
