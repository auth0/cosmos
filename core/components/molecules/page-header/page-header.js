import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'

import { spacing } from '@auth0/cosmos-tokens'

import Heading, { StyledHeading } from '../../atoms/heading'
import Description from './description'

import Button from '../../atoms/button'
import ButtonGroup, { StyledButtonGroup } from '../../molecules/button-group'
import { actionShapeWithRequiredIcon } from '@auth0/cosmos/_helpers/action-shape'

const StyledPageHeader = styled.div`
  margin-bottom: ${spacing.large};

  ${StyledButtonGroup} {
    float: right;
  }

  ${StyledHeading[1]} {
    margin: 0;
    margin-bottom: ${spacing.xsmall};
  }
`

const PageHeader = props => {
  return (
    <StyledPageHeader>
      <ButtonGroup align="right">
        {props.secondaryAction && (
          <Button
            size="large"
            appearance="secondary"
            icon={props.secondaryAction.icon}
            onClick={props.secondaryAction.handler}
          >
            {props.secondaryAction.label}
          </Button>
        )}
        {props.primaryAction && (
          <Button
            size="large"
            appearance="cta"
            icon={props.primaryAction.icon}
            onClick={props.primaryAction.handler}
          >
            {props.primaryAction.label}
          </Button>
        )}
      </ButtonGroup>

      <Heading size={1}>{props.title}</Heading>

      {props.description ? <Description>{props.description}</Description> : null}
    </StyledPageHeader>
  )
}

PageHeader.displayName = 'Page Header'

PageHeader.propTypes = {
  /** Page title of the section */
  title: PropTypes.string.isRequired,
  /** Description to give more information to the user */
  description: PropTypes.shape({
    text: PropTypes.string,
    learnMore: PropTypes.string
  }),
  /** Actions to be attached on top */
  primaryAction: actionShapeWithRequiredIcon,
  secondaryAction: actionShapeWithRequiredIcon
}

PageHeader.defaultProps = {
  title: ''
}

export default PageHeader
export { StyledPageHeader }
