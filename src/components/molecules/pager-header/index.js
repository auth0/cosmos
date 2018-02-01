import React from 'react'
import styled from 'styled-components'

import { spacing, colors } from '../../../tokens'

import { Heading1 } from '../../atoms/typography'
import Button from '../../atoms/button'
import Icon from '../../atoms/icon'

const StyledPagerHeader = styled.div`
  ${Heading1} {
    margin-bottom: ${spacing.small};
  }
`

const StyledActions = styled.div`
  float: right;
`

const ArrowMore = styled.i`
  position: relative;
  left: 2px;
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 4px 0 4px 6px;
  border-color: transparent transparent transparent ${colors.link.default};
`

const PagerLink = styled.a`
  color: ${colors.link.default};
  text-decoration: none;
`

const PagerHeader = props => {
  return (
    <StyledPagerHeader>
      <StyledActions>
        {props.secondaryAction && (
          <Button transparent onClick={props.secondaryAction.method}>
            {props.secondaryAction.icon ? <Icon type={props.secondaryAction.icon} /> : null}
            {props.secondaryAction.label}
          </Button>
        )}
        {props.primaryAction && (
          <Button primary onClick={props.primaryAction.method}>
            {props.primaryAction.icon ? <Icon type={props.primaryAction.icon} /> : null}
            {props.primaryAction.label}
          </Button>
        )}
      </StyledActions>

      <Heading1>{props.title}</Heading1>
      {props.description && (
        <div>
          {props.description.text}
          {props.description.learnMore ? (
            <PagerLink href={props.description.learnMore}>
              Learn more<ArrowMore />
            </PagerLink>
          ) : null}
        </div>
      )}
    </StyledPagerHeader>
  )
}

export default PagerHeader
