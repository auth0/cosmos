import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Form } from '@auth0/cosmos'

storiesOf('Form', module).add('radio field', () => (
  <Example title="radio field">
    <Form>
      <Form.Radio name="example1" selected="one">
        <Form.Radio.Option value="one">One</Form.Radio.Option>
        <Form.Radio.Option value="two">Two</Form.Radio.Option>
        <Form.Radio.Option value="three">Three</Form.Radio.Option>
      </Form.Radio>
    </Form>
  </Example>
))

storiesOf('Form', module).add('radio field horizontal', () => (
  <Example title="radio field horizontal">
    <Form>
      <Form.Radio name="example1" selected="one" align="horizontal">
        <Form.Radio.Option value="one">One</Form.Radio.Option>
        <Form.Radio.Option value="two">Two</Form.Radio.Option>
        <Form.Radio.Option value="three">Three</Form.Radio.Option>
      </Form.Radio>
    </Form>
  </Example>
))

storiesOf('Form', module).add('radio field + helper text', () => (
  <Example title="radio field">
    <Form>
      <Form.Radio name="example1" selected="one" helpText="Additional text to guide the user.">
        <Form.Radio.Option value="one">One</Form.Radio.Option>
        <Form.Radio.Option value="two">Two</Form.Radio.Option>
        <Form.Radio.Option value="three">Three</Form.Radio.Option>
      </Form.Radio>
    </Form>
  </Example>
))

storiesOf('Form', module).add('radio field + error', () => (
  <Example title="radio field + error">
    <Form>
      <Form.Radio name="example1" selected="" error="Everything is broken">
        <Form.Radio.Option value="one">One</Form.Radio.Option>
        <Form.Radio.Option value="two">Two</Form.Radio.Option>
        <Form.Radio.Option value="three">Three</Form.Radio.Option>
      </Form.Radio>
    </Form>
  </Example>
))

storiesOf('Form', module).add('radio field + error + helper text', () => (
  <Example title="radio field + error">
    <Form>
      <Form.Radio
        name="example1"
        selected=""
        error="Everything is broken"
        helpText="Additional text to guide the user."
      >
        <Form.Radio.Option value="one">One</Form.Radio.Option>
        <Form.Radio.Option value="two">Two</Form.Radio.Option>
        <Form.Radio.Option value="three">Three</Form.Radio.Option>
      </Form.Radio>
    </Form>
  </Example>
))
