import React from 'react'
import styled from 'styled-components'

import { Subheader } from '../docs-components/typography'

const Header = props => (
  <div>
    <Subheader>{props.description}</Subheader>
  </div>
)

export default Header
