import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing } from '@auth0/cosmos-tokens'

import Heading, { StyledHeading } from '../../atoms/heading'
import Description from './description'

import Button from '../../atoms/button'
import ButtonGroup, { StyledButtonGroup } from '../../molecules/button-group'
import { __ICONNAMES__ } from '@auth0/cosmos/atoms/icon'

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
      {props.primaryAction && (
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
          <Button
            size="large"
            appearance="cta"
            icon={props.primaryAction.icon}
            onClick={props.primaryAction.handler}
          >
            {props.primaryAction.label}
          </Button>
        </ButtonGroup>
      )}

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
  description: PropTypes.string,
  /** URL for the "Learn more" link  */
  learnMore: PropTypes.string,
  /** Actions to be attached on top */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.oneOf(__ICONNAMES__).isRequired,
      handler: PropTypes.func.isRequired
    })
  )
}

PageHeader.defaultProps = {
  title: null,
  description: null,
  learnMore: null
}

export default PageHeader
export { StyledPageHeader }
