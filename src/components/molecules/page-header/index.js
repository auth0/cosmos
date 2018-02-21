import React from 'react'
import styled from 'styled-components'

import { spacing } from '../../../tokens'

import Heading, { StyledHeading } from '../../atoms/heading'
import Breadcrumb from '../../atoms/breadcrumb'
import Code from '../../atoms/code'

import Description from './description'
import Actions from './actions'

const StyledPageHeader = styled.div`
  margin-bottom: ${spacing.large};

  ${StyledHeading[1]} {
    margin: 0;
  }
`

/* Should be a Component */
const TitleGroup = styled.div`
  display: flex;
  align-items: center;

  ${StyledHeading[1]} {
    margin: 0;
  }
`

/* Should be a Component */
const StyledLogo = styled.span`
  width: 72px;
  height: 72px;
  display: inline-block;
  float: left;
  margin-right: ${spacing.small};
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
    Top = <Actions actions={props.actions} />
  } else if (props.breadcrumb) {
    Top = <Breadcrumb content={props.breadcrumb.content} link={props.breadcrumb.link} />
  }

  let Title
  if (props.logo || props.type) {
    Title = (
      <TitleGroup>
        {props.logo ? <StyledLogo>{props.logo}</StyledLogo> : null}
        <div>
          <Heading size={1}>{props.title}</Heading>
          <Type>{props.type.name}</Type>
          <ClientId>
            Client ID: <Code>{props.type.clientId}</Code>
          </ClientId>
        </div>
      </TitleGroup>
    )
  } else {
    Title = <Heading size={1}>{props.title}</Heading>
  }

  return (
    <StyledPageHeader>
      {Top}

      {Title}

      {props.description ? <Description>{props.description}</Description> : null}
    </StyledPageHeader>
  )
}

export default PageHeader
