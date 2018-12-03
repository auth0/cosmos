import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing, colors } from '@auth0/cosmos-tokens'
import { Breadcrumb, Code, Heading } from '@auth0/cosmos'

/* TODO: Find a good way to override: https://github.com/auth0/cosmos/issues/347 */
import { StyledHeading } from '@auth0/cosmos/atoms/heading'

const StyledApplicationPageHeader = styled.div`
  margin-bottom: ${spacing.large};
  line-height: 1.6;
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
const ApplicationID = styled.span`
  font-size: 13px;
  color: ${colors.base.grayDarkest};
  margin-right: ${spacing.xsmall};
`

const ApplicationPageHeader = props => {
  return (
    <StyledApplicationPageHeader>
      <Breadcrumb content={props.breadcrumb.content} link={props.breadcrumb.link} />

      <TitleGroup>
        {props.logo ? <StyledLogo>{props.logo}</StyledLogo> : null}
        <div>
          <Heading size={1} margin={{ top: 0, bottom: 'xsmall' }}>
            {props.title}
          </Heading>
          <Type>{props.type.name}</Type>
          <ApplicationID>Application ID</ApplicationID>
          <Code>{props.type.applicationId}</Code>
        </div>
      </TitleGroup>
    </StyledApplicationPageHeader>
  )
}

ApplicationPageHeader.displayName = 'Application Page Header'

ApplicationPageHeader.propTypes = {
  /** Page title */
  title: PropTypes.string.isRequired
}

ApplicationPageHeader.defaultProps = {
  title: null
}

export default ApplicationPageHeader
