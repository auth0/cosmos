import React from 'react'
import styled from 'styled-components'

import { Heading1, Text, Code, Button, Icon, Breadcrumb } from '../components'

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
  border-color: transparent transparent transparent #0688d2;
`

const PagerLink = styled.a`
  color: #0688d2;
  text-decoration: none;
`

const StyledPagerAvatar = styled.img`
  display: inline-block;
`

const PagerHeader = props => <div>{props.children}</div>
const PagerAvatar = ({ image, ...props }) => <StyledPagerAvatar src={image || ''} />

PagerHeader.Primary = props => (
  <div>
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
        {props.description.text}{' '}
        {props.description.learnMore ? (
          <PagerLink href={props.description.learnMore}>
            Learn more<ArrowMore />
          </PagerLink>
        ) : null}
      </div>
    )}
  </div>
)

PagerHeader.Secondary = props => (
  <div>
    {props.breadcrumb && (
      <Breadcrumb content={props.breadcrumb.content} href={props.breadcrumb.link} />
    )}
    <div>
      <PagerAvatar image="https://cdn.auth0.com/website/ds/avatar.svg" />
      <Heading1>{props.title}</Heading1>
      <Text>NON INTERACTIVE</Text>
      <Text>
        Client ID:<Code>DUq0xuJZAD7RvezvqCrA6hpJVb6iDUip</Code>
        <Button link>
          <Icon type="copy" />
        </Button>
      </Text>
    </div>
  </div>
)

export default PagerHeader
