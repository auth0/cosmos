import React from 'react'
import styled from 'styled-components'

import { Heading1, Button, Icon, Breadcrumb } from '../components'

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
  text-decoration: none;
`

const PagerHeader = props => <div>{props.children}</div>

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
    <Heading1>{props.title}</Heading1>
  </div>
)

export default PagerHeader
