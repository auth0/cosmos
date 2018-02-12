import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icon from '../../atoms/icon'
import Button from '../../atoms/button'
import Link from '../../atoms/link'
import { Heading1, Text } from '../../atoms/typography'
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
      <Heading1>{props.title}</Heading1>
      <Icon name={props.icon} size={100} color={colors.icon.light} />
      <p>
        <Text>{props.text}</Text> {helpLink}
      </p>
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
  }
  p {
    margin-top: ${spacing.xsmall};
    margin-bottom: ${spacing.xsmall};
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
