import React from 'react'

import { Row, Col } from '../ov-components/grid'
import Section from '../ov-components/section'
import Example from '../ov-components/example'

import { Stack, TextInput, TextArea, Switch, Select } from '@auth0/cosmos'

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
    <Row>
      <Col>
        <Example title="Switch">
          <Stack>
            <Switch on />
            <Switch off />
          </Stack>
        </Example>
      </Col>
      <Col>
        <Example title="Select">
          <Select
            options={[
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 }
            ]}
            onChange={event => console.log(event)}
          />
        </Example>
      </Col>
    </Row>
  </Section>
)

export default Inputs
