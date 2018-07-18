import React from 'react'

import { Row, Col } from '../components/grid'
import Section from '../components/section'
import Example from '../components/example'
import Stack from '../components/stack'

import { Button, ButtonGroup } from '@auth0/cosmos'

class ButtonStateWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mode: 'default' }
  }
  onClick() {
    this.setState({ mode: 'loading' })
    setTimeout(() => this.setState({ mode: 'success' }), 1000)
  }
  render() {
    let props = { ...this.props }
    if (this.state.mode === 'loading') props.loading = true
    else if (this.state.mode === 'success') props.success = true

    return (
      <Button {...props} onClick={this.onClick.bind(this)}>
        Button
      </Button>
    )
  }
}

const Buttons = () => (
  <Section title="Buttons">
    <Row>
      <Col>
        <Example title="Default Button" align="center">
          <Button>Button</Button>
        </Example>
      </Col>
      <Col>
        <Example title="CTA Button" align="center">
          <Button appearance="cta">Button</Button>
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Primary Button" align="center">
          <Button appearance="primary">Button</Button>
        </Example>
      </Col>
      <Col>
        <Example title="Secondary Button" align="center">
          <Button appearance="secondary">Button</Button>
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Disabled Button" align="center">
          <Button appearance="primary" disabled>
            Button
          </Button>
        </Example>
      </Col>
      <Col>
        <Example title="Destructive Button" align="center">
          <Button appearance="destructive">Button</Button>
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Button States" align="center">
          <Stack>
            <ButtonStateWrapper />
            <Button loading>Button</Button>
            <Button success>Button</Button>
          </Stack>
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Button with icon" align="center">
          <Stack>
            <Button appearance="cta" size="large" icon="plus">
              Create Client
            </Button>
            <Button appearance="secondary" icon="play">
              Try
            </Button>
            <Button appearance="link" icon="copy" />
            <Button icon="copy" label="Copy to Clipboard" />
          </Stack>
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Button Group">
          <Stack>
            <ButtonGroup>
              <Button appearance="secondary" size="large" icon="play-circle">
                Tutorial
              </Button>
              <Button appearance="cta" size="large" icon="plus">
                Create Client
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button icon="pencil" />
              <Button icon="copy" />
              <Button icon="delete" />
            </ButtonGroup>
          </Stack>
        </Example>
      </Col>
    </Row>
  </Section>
)

export default Buttons
