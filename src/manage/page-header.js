import React from 'react'
import styled from 'styled-components'

import { Heading1, Button, Icon } from '../components'

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

const StyledActions = styled.div`
  float: right;
`

const PageHeader = props => <div>{props.children}</div>

PageHeader.Primary = props => (
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
        {props.description.link ? (
          <a href={props.description.link}>
            Learn more <ArrowMore />
          </a>
        ) : null}
      </div>
    )}
  </div>
)

PageHeader.Secondary = props => (
  <div>
    <Heading1>{props.title}</Heading1>
  </div>
)

export default PageHeader
