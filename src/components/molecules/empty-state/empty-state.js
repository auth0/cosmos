import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icon, { __ICONNAMES__ } from '../../atoms/icon'
import Button from '../../atoms/button'
import Link from '../../atoms/link'
import Heading from '../../atoms/heading'
import Paragraph from '../../atoms/paragraph'
import { colors, spacing } from '@auth0/cosmos-tokens'

const EmptyState = props => {
  let helpLink
  if (props.helpUrl) {
    helpLink = (
      <LearnMore>
        <Link href={props.helpUrl} target="_blank">
          Learn More <i> </i>
        </Link>
      </LearnMore>
    )
  }
  return (
    <Wrapper>
      <Title size={1}>{props.title}</Title>
      <Body>
        <Icon name={props.icon} size={110} color={colors.base.blue} />
        <Text>{props.text}</Text>
        {helpLink}
      </Body>
      <Button size="large" appearance="cta" icon={props.action.icon} onClick={props.action.handler}>
        {props.action.text}
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`
const Body = styled.div`
  max-width: 400px;
  margin: 0 auto ${spacing.small} auto;
  > ${Icon.Element} {
    margin-bottom: ${spacing.xsmall};
    line-height: 1em;
    opacity: 0.2;
  }
`
const Title = styled(Heading)`
  margin: 0 0 ${spacing.xlarge} 0;
`
const Text = styled(Paragraph)`
  margin: 0;
`

const LearnMore = styled.div`
  display: inline-block;
  i {
    position: relative;
    left: 2px;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 0 4px 6px;
    border-color: transparent transparent transparent ${colors.link.default};
  }
  &:hover i  {
    border-color: transparent transparent transparent ${colors.link.defaultHover};
  }
`

EmptyState.displayName = 'EmptyState'

EmptyState.propTypes = {
  action: PropTypes.shape({
    icon: PropTypes.oneOf(__ICONNAMES__).isRequired,
    handler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  helpUrl: PropTypes.string,
  icon: PropTypes.oneOf(__ICONNAMES__).isRequired,
  text: PropTypes.string,
  title: PropTypes.string.isRequired
}

EmptyState.defaultProps = {
  text: 'No items have been added to this section.'
}

export default EmptyState
