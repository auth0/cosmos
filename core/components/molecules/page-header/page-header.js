import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Automation from '../../_helpers/automation-attribute'
import containerStyles from '../../_helpers/container-styles'

import { spacing } from '@auth0/cosmos-tokens'

import Heading, { StyledHeading } from '../../atoms/heading'
import Description, { StyledParagraph as DescriptionParagraph } from './description'

import Button from '../../atoms/button'
import ButtonGroup, { StyledButtonGroup } from '../../molecules/button-group'
import { actionShapeWithRequiredIcon } from '@auth0/cosmos/_helpers/action-shape'
import { descriptionIsObject } from '../../_helpers/page-header'

const StyledPageHeader = styled.div`
  ${containerStyles};
  margin-bottom: ${spacing.large};

  ${StyledButtonGroup} {
    float: right;
  }

  ${StyledHeading[1]} {
    margin: 0;
    margin-bottom: ${spacing.xsmall};
  }
`

const SoftDescription = ({ description, learnMore }) => {
  if (!description) return null

  if (descriptionIsObject(description)) {
    return <Description>{description}</Description>
  }

  let descriptionCompat = { text: description, learnMore }

  return <Description>{descriptionCompat}</Description>
}

const PageHeader = props => {
  return (
    <StyledPageHeader {...Automation('page-header')}>
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
      <SoftDescription {...props} />
    </StyledPageHeader>
  )
}

PageHeader.displayName = 'Page Header'

PageHeader.propTypes = {
  /** Page title of the section */
  title: PropTypes.string.isRequired,
  /** Description to give more information to the user */
  description: PropTypes.oneOfType([
    PropTypes.shape({
      text: PropTypes.string,
      learnMore: PropTypes.string
    }),
    PropTypes.node
  ]),
  /** URL to be used as the target of the 'Learn more' link */
  learnMore: PropTypes.string,
  /** Actions to be attached on top */
  primaryAction: actionShapeWithRequiredIcon,
  secondaryAction: actionShapeWithRequiredIcon
}

PageHeader.defaultProps = {
  title: ''
}

export default PageHeader
export { StyledPageHeader }
