import React from 'react'

import { Row, Col } from '../ov-components/grid'
import Section from '../ov-components/section'
import Example from '../ov-components/example'
import Stack from '../ov-components/stack'

import { Button, ButtonGroup } from '../../components'

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
        <Example title="Primary Button" align="center">
          <Button primary>Button</Button>
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Secondary Button" align="center">
          <Button transparent>Button</Button>
        </Example>
      </Col>
      <Col>
        <Example title="Link Button" align="center">
          <Button link>Button</Button>
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Disabled Button" align="center">
          <Button disabled>Button</Button>
        </Example>
      </Col>
      <Col>
        <Example title="Destructive Button" align="center">
          <Button destructive>Button</Button>
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
            <Button primary icon="plus">
              Create Client
            </Button>
            <Button transparent icon="play-circle">
              Tutorial
            </Button>
            <Button link icon="copy" />
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
              <Button transparent icon="play-circle">
                Tutorial
              </Button>
              <Button primary icon="plus">
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
