import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icon from '../../atoms/icon'
import Button from '../../atoms/button'
import Link from '../../atoms/link'
import Heading, { StyledHeading } from '../../atoms/heading'
import Paragraph from '../../atoms/paragraph'
import { colors, spacing } from '../../../tokens'

const EmptyState = props => {
  let helpLink
  if (props.helpUrl) {
    helpLink = (
      <Link href={props.helpUrl} target="_blank">
        Learn More
      </Link>
    )
  }
  return (
    <EmptyState.Wrapper>
      <Heading size={1}>{props.title}</Heading>
      <Icon name={props.icon} size={100} color={colors.base.blue} />
      <Paragraph>{props.text}</Paragraph> {helpLink}
      <Button primary icon={props.action.icon} onClick={props.action.method}>
        {props.action.text}
      </Button>
    </EmptyState.Wrapper>
  )
}

EmptyState.Wrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;

  > ${Icon.Element} {
    margin-top: ${spacing.xlarge};
    line-height: 1em;
    opacity: 0.2;
  }

  ${StyledHeading[1]} {
    margin: 0;
  }
`

EmptyState.displayName = 'EmptyState'

EmptyState.propTypes = {
  action: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    method: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  helpUrl: PropTypes.string,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string,
  title: PropTypes.string.isRequired
}

EmptyState.defaultProps = {
  text: 'No items have been added to this section.'
}

export default EmptyState
