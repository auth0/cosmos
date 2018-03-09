import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing, colors } from 'auth0-cosmos-tokens'
import { Breadcrumb, Code, Heading } from 'auth0-cosmos'

/* TODO: Find a good way to override: https://github.com/auth0/cosmos/issues/347 */
import { StyledHeading } from 'auth0-cosmos/atoms/heading'

const StyledClientPageHeader = styled.div`
  margin-bottom: ${spacing.large};

  ${StyledHeading[1]} {
    margin: 0;
    margin-bottom: ${spacing.xsmall};
  }
`

/* Should be a Css Component */
const TitleGroup = styled.div`
  display: flex;
  align-items: center;
`

/* Should be a Css Component */
const StyledLogo = styled.span`
  width: 72px;
  height: 72px;
  display: inline-block;
  float: left;
  margin-right: ${spacing.small};
`

/* Should be a Css Component */
const Type = styled.span`
  margin-right: ${spacing.small};
  font-size: 12px;
  color: ${colors.base.grayDark};
  letter-spacing: 1px;
  text-transform: uppercase;
`

/* Should be a Css Component */
const ClientID = styled.span`
  font-size: 13px;
  color: ${colors.base.grayDarkest};
  margin-right: ${spacing.xsmall};
`

const ClientPageHeader = props => {
  return (
    <StyledClientPageHeader>
      <Breadcrumb content={props.breadcrumb.content} link={props.breadcrumb.link} />

      <TitleGroup>
        {props.logo ? <StyledLogo>{props.logo}</StyledLogo> : null}
        <div>
          <Heading size={1}>{props.title}</Heading>
          <Type>{props.type.name}</Type>
          <ClientID>Client ID</ClientID>
          <Code>{props.type.clientId}</Code>
        </div>
      </TitleGroup>
    </StyledClientPageHeader>
  )
}

ClientPageHeader.displayName = 'Client Page Header'

ClientPageHeader.propTypes = {
  /** Page title */
  title: PropTypes.string.isRequired
}

ClientPageHeader.defaultProps = {
  title: null
}

export default ClientPageHeader
