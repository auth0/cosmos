import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'
import { Dialog, Form } from '@auth0/cosmos'

const StyledExample = styled(Example)`
  min-height: 800px;
`

storiesOf('Dialog').add('default', () => (
  <StyledExample title="default">
    <Dialog open title="Example Dialog" onClose={() => {}}>
      <Dialog.Body>Are you sure?</Dialog.Body>
      <Dialog.Footer>
        <Button appearance="primary">OK</Button>
        <Button>Cancel</Button>
      </Dialog.Footer>
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog').add('with primary button only', () => (
  <StyledExample title="with primary button only">
    <Dialog open title="Example Dialog" onClose={() => {}}>
      <Dialog.Body>Are you sure?</Dialog.Body>
      <Dialog.Footer>
        <Button appearance="primary">OK</Button>
      </Dialog.Footer>
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog').add('with secondary button only', () => (
  <StyledExample title="with secondary button only">
    <Dialog open title="Example Dialog" onClose={() => {}}>
      <Dialog.Body>Are you sure?</Dialog.Body>
      <Dialog.Footer>
        <Button>Dismiss</Button>
      </Dialog.Footer>
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog').add('with form', () => (
  <StyledExample title="with form">
    <Dialog open title="Example Dialog" onClose={() => {}} width={600}>
      <Dialog.Body>
        <Form layout="label-on-top">
          <Form.TextInput label="First Name" type="text" placeholder="John" />
          <Form.TextInput label="Last Name" type="text" placeholder="Doe" />
          <Form.TextInput label="Email Address" type="text" placeholder="john.doe@auth0.com" />
        </Form>
      </Dialog.Body>
      <Dialog.Footer>
        <Button appearance="primary">OK</Button>
        <Button>Cancel</Button>
      </Dialog.Footer>
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog').add('with introduction + form', () => (
  <StyledExample title="with introduction + form">
    <Dialog open title="Example Dialog" onClose={() => {}} width={600}>
      <Dialog.Body>
        <p>
          This is a brief introduction to the form. This is a short text that goes before the form
          starts and may include <a href="#">links to other sites</a> and/or <strong>bold</strong>{' '}
          text.
        </p>
      </Dialog.Body>
      <Form layout="label-on-top">
        <Form.TextInput label="First Name" type="text" placeholder="John" />
        <Form.TextInput label="Last Name" type="text" placeholder="Doe" />
        <Form.TextInput label="Email Address" type="text" placeholder="john.doe@auth0.com" />
      </Form>
      <Dialog.Footer>
        <Button appearance="primary">OK</Button>
        <Button>Cancel</Button>
      </Dialog.Footer>
    </Dialog>
  </StyledExample>
))
