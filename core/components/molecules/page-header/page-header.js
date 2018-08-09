import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing } from '@auth0/cosmos-tokens'

import Heading, { StyledHeading } from '../../atoms/heading'
import Description, { StyledParagraph as DescriptionParagraph } from './description'

import Button from '../../atoms/button'
import ButtonGroup, { StyledButtonGroup } from '../../molecules/button-group'
import { actionShapeWithRequiredIcon } from '@auth0/cosmos/_helpers/action-shape'
import { descriptionIsObject } from '../../_helpers/page-header'

import { deprecate } from '../../_helpers/custom-validations'

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

function renderDescription(description, children) {
  if (children) return <DescriptionParagraph>{children}</DescriptionParagraph>
  if (!description) return null

  if (descriptionIsObject(description)) {
    return <Description>{description}</Description>
  }

  return <DescriptionParagraph>{description}</DescriptionParagraph>
}

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

      {renderDescription(props.description, props.children)}
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
  /** Actions to be attached on top */
  primaryAction: actionShapeWithRequiredIcon,
  secondaryAction: actionShapeWithRequiredIcon,

  _error: props => deprecate(props, { name: 'description', replacement: 'children' })
}

PageHeader.defaultProps = {
  title: ''
}

export default PageHeader
export { StyledPageHeader }
