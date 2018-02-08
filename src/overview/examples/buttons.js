import React from 'react'

import { Row, Col } from '../ov-components/grid'
import Section from '../ov-components/section'
import Example from '../ov-components/example'

import { Button } from '../../components'

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
        <Example title="Default Button">
          <ButtonStateWrapper />
        </Example>
      </Col>
      <Col>
        <Example title="Primary Button">
          <ButtonStateWrapper primary />
        </Example>
      </Col>
      <Col>
        <Example>
          <ButtonStateWrapper transparent />
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example>
          <ButtonStateWrapper disabled />
        </Example>
      </Col>
      <Col>
        <Example>
          <ButtonStateWrapper destructive />
        </Example>
      </Col>
      <Col>
        <Example>
          <ButtonStateWrapper link />
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example>
          <ButtonStateWrapper link icon="copy" />
        </Example>
      </Col>
    </Row>
  </Section>
)

export default Buttons
