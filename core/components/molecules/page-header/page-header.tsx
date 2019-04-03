import * as React from 'react'
import styled from '../../styled'
import Automation from '../../_helpers/automation-attribute'

import { spacing } from '@auth0/cosmos-tokens'

import Heading from '../../atoms/heading'
import Description from './description'

import ButtonGroup from '../../molecules/button-group'
import { ActionWithIcon } from '../../_helpers/action-shape'
import { descriptionIsObject } from '../../_helpers/page-header'
import containerStyles from '../../_helpers/container-styles'
import buttonPropHelper from '../../_helpers/button-prop'
import { rootProps } from '../../_helpers/root-props'

export type PageHeaderDescription = React.ReactNode | { text?: string, learnMore?: string }
export interface IPageHeaderProps {
  /** HTML ID of the component */
  id?: string
  /** Page title of the section */
  title: React.ReactNode
  /** Description to give more information to the user */
  description?: PageHeaderDescription
  /** URL to be used as the target of the 'Learn more' link */
  learnMore?: string
  /** Actions to be attached on top */
  primaryAction?: ActionWithIcon | React.ReactNode
  secondaryAction?: ActionWithIcon | React.ReactNode
  children?: React.ReactNode
}

const PageHeader = (props: IPageHeaderProps) => {
  return (
    <PageHeader.Element {...Automation('page-header')} {...rootProps(props)}>
      <Heading size={1}>{props.title}</Heading>
      <PageHeader.Description {...props} />

      {(props.secondaryAction || props.primaryAction) && (
        <ButtonGroup>
          {buttonPropHelper(props.secondaryAction, { size: 'large', appearance: 'secondary' })}
          {buttonPropHelper(props.primaryAction, { size: 'large', appearance: 'cta' })}
        </ButtonGroup>
      )}
    </PageHeader.Element>
  )
}

PageHeader.Element = styled.div`
  ${containerStyles};

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
    margin-top: ${spacing.medium};
    @media (min-width: 768px) {
      margin-top: 0;
      margin-left: ${spacing.small};
    }
  }

  ${Heading.Element[1]} {
    flex: 1;
    /*
    Components should not have margin by default.
    We'll remove this margin reset when we remove margins from headers
    */
    margin: 0;
  }
`

export interface IPageHeaderDescriptionProps {
  description?: PageHeaderDescription
  learnMore?: string
}

PageHeader.Description = ({ description, learnMore }: IPageHeaderDescriptionProps) => {
  if (!description) return null

  if (descriptionIsObject(description)) {
    return <Description>{description}</Description>
  }

  let descriptionCompat = { text: description, learnMore }

  return <Description>{descriptionCompat}</Description>
}

PageHeader.displayName = 'Page Header'

PageHeader.defaultProps = {
  title: ''
}

const StyledPageHeader = PageHeader.Element

export default PageHeader
export { StyledPageHeader }
