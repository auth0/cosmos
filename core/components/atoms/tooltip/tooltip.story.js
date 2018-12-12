import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'
import styled from '@auth0/cosmos/styled'
import { Tooltip, ButtonGroup, Button } from '@auth0/cosmos'

const positions = ['top', 'left', 'right', 'bottom']

const ExampleContainer = ({ children, position, noMargins }) => {
  const Container = styled.div`
    margin-top: 20px;
    min-height: 80px;

    p {
      font-family: monospace;
      margin-bottom: ${position === 'top' && !noMargins ? '50px' : '10px'};
      opacity: 0.5;
    }

    & > div {
      margin-left: ${position === 'left' && !noMargins ? '120px' : 0};
    }
  `

  return (
    <Container>
      <p>{position}</p>
      <div>{children}</div>
    </Container>
  )
}

storiesOf('Tooltip').add('with button', () => (
  <Example title="with button">
    {positions.map(position => (
      <ExampleContainer position={position}>
        <Tooltip position={position} content={`Inner content ${position}`} defaultVisible>
          <Button>Something</Button>
        </Tooltip>
      </ExampleContainer>
    ))}
  </Example>
))

storiesOf('Tooltip').add('with button group', () => (
  <Example title="with button group">
    {positions.map(position => (
      <ExampleContainer position={position} noMargins>
        <ButtonGroup>
          <Button>Something</Button>
          <Tooltip position={position} content={`Inner content ${position}`} defaultVisible>
            <Button>Something</Button>
          </Tooltip>
          <Button>Something</Button>
        </ButtonGroup>
      </ExampleContainer>
    ))}
  </Example>
))

storiesOf('Tooltip').add('with compressed button group', () => (
  <Example title="with compressed button group">
    {positions.map(position => (
      <ExampleContainer position={position} noMargins>
        <ButtonGroup compressed>
          <Button>Something</Button>
          <Tooltip position={position} content={`Inner content ${position}`} defaultVisible>
            <Button>Something</Button>
          </Tooltip>
          <Button>Something</Button>
        </ButtonGroup>
      </ExampleContainer>
    ))}
  </Example>
))

storiesOf('Tooltip').add('with icon only button', () => (
  <Example title="with icon only button">
    <ExampleContainer position="top">
      <Button icon="analytics" label="this is the label" labelDefaultVisible />
    </ExampleContainer>
  </Example>
))
