import React from 'react'

import { Row, Col } from '../ov-components/grid'
import Section from '../ov-components/section'
import Example from '../ov-components/example'

import { Stack, TextInput, TextArea, Switch } from '../../components'

const Inputs = () => (
  <Section title="Inputs">
    <Row>
      <Col>
        <Example title="Text Input with Placeholder" align="center">
          <TextInput placeholder="Placeholder" />
        </Example>
      </Col>
      <Col>
        <Example title="Text Input with Value" align="center">
          <TextInput placeholder="Placeholder" value="Text Input" />
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Read only" align="center">
          <TextInput readOnly value="Read-only value" />
        </Example>
      </Col>
      <Col>
        <Example title="Input Number" align="center">
          <TextInput type="number" value="3600" />
        </Example>
      </Col>
    </Row>

    <Row>
      <Col>
        <Example title="Text Area" align="center">
          <TextArea value="" placeholder />
        </Example>
      </Col>
      <Col />
    </Row>
  </Section>
)

export default Inputs
