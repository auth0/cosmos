import React from 'react'

import { Row, Col } from '../ov-components/grid'
import Section from '../ov-components/section'
import Example from '../ov-components/example'

import { TextInput, TextArea } from '../../components'

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
          <TextInput placeholder="Placeholder" defaultValue="Text Input" />
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Read only" align="center">
          <TextInput readOnly defaultValue="Read-only value" />
        </Example>
      </Col>
      <Col>
        <Example title="Masked value" align="center">
          <TextInput masked defaultValue="Masked value" />
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Input Number" align="center">
          <TextInput type="number" defaultValue="3600" />
        </Example>
      </Col>
      <Col>
        <Example title="Input Code" align="center">
          <TextInput code defaultValue="DUq0xuJZAD7RvezvqCrA6hpJVb6iDUip" />
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Text Area" align="center">
          <TextArea defaultValue="Text" />
        </Example>
      </Col>
      <Col>
        <Example title="Text Area Code" align="center">
          <TextArea code defaultValue="Code" />
        </Example>
      </Col>
    </Row>
  </Section>
)

export default Inputs
