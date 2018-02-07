import React from 'react'
import styled from 'styled-components'

import { spacing, colors } from '../../../tokens'

import { Heading1 } from '../../atoms/typography'

import Description from './description'
import Actions from './actions'

const StyledPageHeader = styled.div`
  margin-bottom: ${spacing.large};
`

const PageHeader = props => {
  return (
    <StyledPageHeader>
      {props.actions ? <Actions>{props.actions}</Actions> : null}

      <Heading1>{props.title}</Heading1>
      {props.description ? <Description>{props.description}</Description> : null}
    </StyledPageHeader>
  )
}

export default PageHeader
