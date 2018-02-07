import React from 'react'
import styled from 'styled-components'

import { spacing, colors } from '../../../tokens'

import { Heading1 } from '../../atoms/typography'
import Breadcrumb from '../../atoms/breadcrumb'
import Code from '../../atoms/code'

import Description from './description'
import Actions from './actions'

const StyledPageHeader = styled.div`
  margin-bottom: ${spacing.large};
`

const StyledLogo = styled.span`
  display: inline-block;
  float: left;
`

const StyledType = styled.div``

const PageHeader = props => {
  let Top
  if (props.actions) {
    Top = <Actions>{props.actions}</Actions>
  } else if (props.breadcrumb) {
    Top = <Breadcrumb content={props.breadcrumb.content} link={props.breadcrumb.link} />
  } else {
    return null
  }

  return (
    <StyledPageHeader>
      {Top}

      {props.logo ? <StyledLogo>{props.logo}</StyledLogo> : null}

      <Heading1>{props.title}</Heading1>

      {props.type ? (
        <StyledType>
          <span>{props.type.name}</span>
          <span>
            Client ID: <Code>{props.type.clientId}</Code>
          </span>
        </StyledType>
      ) : null}

      {props.description ? <Description>{props.description}</Description> : null}
    </StyledPageHeader>
  )
}

export default PageHeader
