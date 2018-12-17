import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'
import Automation from '../../_helpers/automation-attribute'

import { spacing } from '@auth0/cosmos-tokens'

import Heading, { StyledHeading } from '../../atoms/heading'
import Description, { StyledParagraph as DescriptionParagraph } from './description'

import Button from '../../atoms/button'
import ButtonGroup from '../../molecules/button-group'
import { actionShapeWithRequiredIcon } from '@auth0/cosmos/_helpers/action-shape'
import { descriptionIsObject } from '../../_helpers/page-header'
import containerStyles from '../../_helpers/container-styles'

const PageHeader = props => {
  return (
    <PageHeader.Element {...Automation('page-header')}>
      <Heading size={1}>{props.title}</Heading>
      <PageHeader.Description {...props} />
      <ButtonGroup>
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
    </PageHeader.Element>
  )
}

PageHeader.Element = styled.div`
  ${containerStyles};
  > *:not(:last-child) {
    margin-bottom: ${spacing.small};
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
  /* 
  Components should not have margin by default.
  We'll remove this margin eventually
  */
  margin-bottom: ${spacing.large};

  ${ButtonGroup.Element} {
    @media (min-width: 768px) {
      margin-left: ${spacing.small};
    }
    &:empty {
      display: none;
    }
  }

  ${Heading.Element[1]} {
    flex: 1;
    /* 
    Components should not have margin by default.
    We'll remove this margin reset when we remove margins from headers
    */
    margin-top: 0;
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }
`

PageHeader.Description = ({ description, learnMore }) => {
  if (!description) return null

  if (descriptionIsObject(description)) {
    return <Description>{description}</Description>
  }

  let descriptionCompat = { text: description, learnMore }

  return <Description>{descriptionCompat}</Description>
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

const StyledPageHeader = PageHeader.Element

export default PageHeader
export { StyledPageHeader }
