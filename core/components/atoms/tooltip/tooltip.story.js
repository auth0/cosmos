import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'
import styled from '@auth0/cosmos/styled'
import { Tooltip, ButtonGroup, Button, Dialog, Icon, TextInput } from '@auth0/cosmos'

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

storiesOf('Tooltip', module).add('hidden by default', () => (
  <Example title="hidden by default">
    <Tooltip content="Can you see me?">
      <Button>Button</Button>
    </Tooltip>
  </Example>
))

storiesOf('Tooltip', module).add('with button', () => (
  <Example title="with button">
    {positions.map(position => (
      <ExampleContainer position={position} key={position}>
        <Tooltip position={position} content={`Inner content ${position}`} defaultVisible>
          <Button>Something</Button>
        </Tooltip>
      </ExampleContainer>
    ))}
  </Example>
))

storiesOf('Tooltip', module).add('with button group', () => (
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

storiesOf('Tooltip', module).add('with compressed button group', () => (
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

storiesOf('Tooltip', module).add('with icon only button', () => (
  <Example title="with icon only button">
    <ExampleContainer position="top">
      <Button icon="analytics" label="this is the label" labelDefaultVisible />
    </ExampleContainer>
  </Example>
))

storiesOf('Tooltip', module).add('long text', () => (
  <Example title="with long text">
    <ExampleContainer position="top">
      <Button
        icon="help"
        label="This is a very long text. Please try to keep it no longer than 4 lines. The tooltip should be a short and helpful text."
        labelDefaultVisible
      />
    </ExampleContainer>
  </Example>
))

storiesOf('Tooltip', module).add('in a small container', () => (
  <Example title="in a small container (#951)">
    <div style={{ overflow: 'hidden', padding: 20, border: '1px solid black' }}>
      <Tooltip content="here is some text">Hover over me</Tooltip>
    </div>
  </Example>
))

storiesOf('Tooltip', module).add('inside a dialog', () => (
  <Example title="inside a dialog (#1367)">
    <Dialog open={true} title="Test case for #1367">
      <div>
        plenty of room for the tooltip{' '}
        <Tooltip content="I have enough space" position="right" defaultVisible>
          <Icon name="help" size="15" color="default" />
        </Tooltip>
      </div>
      <br />
      <br />
      <div>
        just a lot of text which leaves no room for the tooltip inside the dialog{' '}
        <Tooltip
          position="right"
          content="no worries, I can float on top of the dialog"
          defaultVisible
        >
          <Icon name="help" size="15" color="default" />
        </Tooltip>
      </div>
      <br />
      <br />
      <div>
        if you resize the window, the tooltip will not have any space outside the dialog as well
        <Tooltip
          position="right"
          content="I would open on the left when there's no space left on the right"
          defaultVisible
        >
          <Icon name="help" size="15" color="default" />
        </Tooltip>
      </div>
    </Dialog>
  </Example>
))

storiesOf('Tooltip', module).add('with an input', () => (
  <Example title="with an input">
    <Tooltip content="Here's some help" position="bottom">
      <TextInput placeholder="Enter something" />
    </Tooltip>
  </Example>
))
