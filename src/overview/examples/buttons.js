import React from 'react'

import { Row, Col } from '../ov-components/grid'
import Section from '../ov-components/section'
import Example from '../ov-components/example'

import { Button, Stack } from '../../components'

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
          <ButtonStateWrapper />
        </Example>
      </Col>
      <Col>
        <Example title="Primary Button" align="center">
          <ButtonStateWrapper primary />
        </Example>
      </Col>
      <Col>
        <Example title="Secondary Button" align="center">
          <ButtonStateWrapper transparent />
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Link Button" align="center">
          <ButtonStateWrapper link />
        </Example>
      </Col>
      <Col>
        <Example title="Disabled Button" align="center">
          <ButtonStateWrapper disabled />
        </Example>
      </Col>
      <Col>
        <Example title="Destructive Button" align="center">
          <ButtonStateWrapper destructive />
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Button with icon" align="center">
          <Stack>
            <Button primary icon="plus">
              Button
            </Button>
            <ButtonStateWrapper link icon="copy" />
            <Button icon="copy" label="Copy to Clipboard" />
          </Stack>
        </Example>
      </Col>
    </Row>
  </Section>
)

export default Buttons
