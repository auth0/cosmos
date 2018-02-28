import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing, colors } from '../../../tokens'

import Heading, { StyledHeading } from '../../atoms/heading'
import Breadcrumb from '../../atoms/breadcrumb'
import Code from '../../atoms/code'
import Description from './description'

import Button from '../../atoms/button'
import ButtonGroup, { StyledButtonGroup } from '../../molecules/button-group'

const StyledPageHeader = styled.div`
  margin-bottom: ${spacing.large};

  ${StyledButtonGroup} {
    float: right;
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
  margin-right: ${spacing.small};
  font-size: 12px;
  color: ${colors.base.grayDark};
  letter-spacing: 1px;
  text-transform: uppercase;
`

const ClientID = styled.span`
  font-size: 13px;
  color: ${colors.base.grayDarkest};
  margin-right: ${spacing.xsmall};
`

const Top = props => {
  if (props.actions) {
    return (
      <ButtonGroup align="right">
        {props.actions.secondaryAction && (
          <Button
            transparent
            icon={props.actions.secondaryAction.icon}
            onClick={props.actions.secondaryAction.method}
          >
            {props.actions.secondaryAction.label}
          </Button>
        )}
        {props.actions.primaryAction && (
          <Button
            primary
            icon={props.actions.primaryAction.icon}
            onClick={props.actions.primaryAction.method}
          >
            {props.actions.primaryAction.label}
          </Button>
        )}
      </ButtonGroup>
    )
  } else if (props.breadcrumb) {
    return <Breadcrumb content={props.breadcrumb.content} link={props.breadcrumb.link} />
  } else return null
}

const Title = props => {
  if (props.logo || props.type) {
    return (
      <TitleGroup>
        {props.logo ? <StyledLogo>{props.logo}</StyledLogo> : null}
        <div>
          <Heading size={1}>{props.title}</Heading>
          <Type>{props.type.name}</Type>
          <ClientID>Client ID</ClientID>
          <Code>{props.type.clientId}</Code>
        </div>
      </TitleGroup>
    )
  } else {
    return <Heading size={1}>{props.title}</Heading>
  }
}

const PageHeader = props => {
  return (
    <StyledPageHeader>
      <Top {...props} />

      <Title {...props} />

      {props.description ? <Description>{props.description}</Description> : null}
    </StyledPageHeader>
  )
}

PageHeader.displayName = 'Page Header'

PageHeader.propTypes = {
  /** Page title */
  title: PropTypes.string.isRequired,
  /** URL for the "Learn more" link  */
  learnMore: PropTypes.string
}

PageHeader.defaultProps = {
  title: null,
  learnMore: null
}

export default PageHeader
