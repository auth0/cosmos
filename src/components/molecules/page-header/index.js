import React from 'react'
import styled from 'styled-components'

import { spacing } from '../../../tokens'

import Header from '../../atoms/header'
import Breadcrumb from '../../atoms/breadcrumb'
import Code from '../../atoms/code'

import Description from './description'
import Actions from './actions'

const StyledPageHeader = styled.div`
  margin-bottom: ${spacing.large};
`

const StyledLogo = styled.span`
  width: 72px;
  height: 72px;
  display: inline-block;
  float: left;
  margin-right: ${spacing.small};
  margin-top: ${spacing.xsmall};
`

const Type = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  color: #7c7c7c;
  margin-right: ${spacing.small};
`

const ClientId = styled.span`
  font-size: 13px;
  color: #676767;
`

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

      <div>
        {props.logo ? <StyledLogo>{props.logo}</StyledLogo> : null}
        <Header size={1}>{props.title}</Header>
      </div>

      {props.type ? (
        <div>
          <Type>{props.type.name}</Type>
          <ClientId>
            Client ID: <Code>{props.type.clientId}</Code>
          </ClientId>
        </div>
      ) : null}

      {props.description ? <Description>{props.description}</Description> : null}
    </StyledPageHeader>
  )
}

export default PageHeader
