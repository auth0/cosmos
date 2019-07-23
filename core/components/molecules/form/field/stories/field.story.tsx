import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '../../../../_helpers/story-helpers'

import {
  Form,
  TextInput,
  TextArea,
  Select,
  Switch,
  Radio,
  Checkbox,
  StackLayout,
  Button,
  RowLayout,
  Link,
  Text,
  Code
} from '../../../../'

storiesOf('Form', module).add('form field', () => (
  <Example title="form field">
    <Form.Field label="Field title">
      <TextInput type="text" placeholder="Enter something" />
    </Form.Field>
  </Example>
))

storiesOf('Form', module).add('form field + help text', () => (
  <Example title="form field + help text">
    <Form.Field
      label="Field title"
      helpText="The help text for the field provide the user with instructions of how to correctly fill this field."
    >
      <TextInput type="text" placeholder="Enter something" />
    </Form.Field>
  </Example>
))

storiesOf('Form', module).add('form field + rich help text', () => (
  <Example title="form field + rich help text">
    <Form.Field
      label="Field title"
      helpText={
        <>
          Help text for the field. It can contain <Link href="">links to documentation</Link> or{' '}
          <Code>code-anotations</Code>. Also, <Text type="strong">bold text</Text> for emphasis.
        </>
      }
    >
      <TextInput type="text" placeholder="Enter something" />
    </Form.Field>
  </Example>
))

storiesOf('Form', module).add('form field + error', () => (
  <Example title="form field + error">
    <Form.Field label="Field title" error="Everything is broken.">
      <TextInput type="text" placeholder="Enter something" hasError />
    </Form.Field>
  </Example>
))

storiesOf('Form', module).add('form field + help text + error', () => (
  <Example title="form field + help text + error">
    <Form.Field
      label="Field title"
      helpText="The help text for the field provide the user with instructions of how to correctly fill this field."
      error="Everything is broken."
    >
      <TextInput type="text" placeholder="Enter something" hasError />
    </Form.Field>
  </Example>
))

storiesOf('Form', module).add('all the fields', () => (
  <Example title="all the fields">
    <RowLayout gutter="small">
      <Form>
        <Form.Field label="Something">
          <TextInput
            type="text"
            placeholder="Enter something"
            actions={[{ icon: 'copy', handler: () => {}, label: 'Copy to clipboard' }]}
          />
        </Form.Field>
        <Form.Field
          label="Long input"
          helpText="How tall are you?"
          error="Show only in the first field"
        >
          <TextArea hasError id="custom-id" placeholder="Add a lot of text here" />
        </Form.Field>
        <Form.Field label="Options list">
          <Select
            options={[
              { text: 'First option', value: '1', defaultSelected: true },
              { text: 'Second option', value: '2' },
              { text: 'Third option', value: '3' },
              { text: 'Fourth option', value: '4' }
            ]}
          />
        </Form.Field>
        <Form.Field label="Subscribe">
          <Switch on />
        </Form.Field>
        <Form.Field label="Agree">
          <Radio name="example1" selected="one" onChange={(_) => {}}>
            <Radio.Option value="one">One</Radio.Option>
            <Radio.Option value="two">Two</Radio.Option>
          </Radio>
        </Form.Field>
        <Form.Field label="Framework">
          <Checkbox.Group name="example1" selected={['one', 'two']}>
            <Checkbox name="one" value="one">
              Option 1
            </Checkbox>
            <Checkbox name="two" value="two">
              Option 2
            </Checkbox>
          </Checkbox.Group>
        </Form.Field>
        <Form.Field label="Custom field">
          <TextInput placeholder="Value" type="date" hasError />
        </Form.Field>
        <Form.Field
          label="Height"
          helpText="How tall are you?"
          error="Show only in the first field"
        >
          <StackLayout gutter="xsmall">
            <TextInput placeholder="Value" hasError />
            <Select
              options={[{ text: 'centimetres', value: 'cm' }, { text: 'inches', value: 'in' }]}
            />
            <Button
              appearance="link"
              icon="copy"
              label="Copy value"
              onClick={(e) => console.log(e)}
            />
          </StackLayout>
        </Form.Field>
        <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
      </Form>

      <Form layout="label-on-top">
        <Form.Field label="Something">
          <TextInput
            type="text"
            placeholder="Enter something"
            actions={[{ icon: 'copy', handler: () => {}, label: 'Copy to clipboard' }]}
          />
        </Form.Field>
        <Form.Field
          label="Long input"
          helpText="How tall are you?"
          error="Show only in the first field"
        >
          <TextArea hasError placeholder="Add a lot of text here" />
        </Form.Field>
        <Form.Field label="Options list">
          <Select
            options={[
              { text: 'First option', value: '1', defaultSelected: true },
              { text: 'Second option', value: '2' },
              { text: 'Third option', value: '3' },
              { text: 'Fourth option', value: '4' }
            ]}
          />
        </Form.Field>
        <Form.Field label="Subscribe">
          <Switch on />
        </Form.Field>
        <Form.Field label="Agree">
          <Radio name="example1" selected="one" onChange={(_) => {}}>
            <Radio.Option value="one">One</Radio.Option>
            <Radio.Option value="two">Two</Radio.Option>
          </Radio>
        </Form.Field>
        <Form.Field label="Framework">
          <Checkbox.Group name="example1" selected={['one', 'two']}>
            <Checkbox name="one" value="one">
              Option 1
            </Checkbox>
            <Checkbox name="two" value="two">
              Option 2
            </Checkbox>
          </Checkbox.Group>
        </Form.Field>
        <Form.Field label="Custom field">
          <TextInput placeholder="Value" type="date" hasError />
        </Form.Field>
        <Form.Field
          label="Height"
          helpText="How tall are you?"
          error="Show only in the first field"
        >
          <StackLayout gutter="xsmall">
            <TextInput placeholder="Value" hasError />
            <Select
              options={[{ text: 'centimetres', value: 'cm' }, { text: 'inches', value: 'in' }]}
            />
            <Button
              appearance="link"
              icon="copy"
              label="Copy value"
              onClick={(e) => console.log(e)}
            />
          </StackLayout>
        </Form.Field>
        <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
      </Form>
    </RowLayout>
  </Example>
))

storiesOf('Form', module).add('Form full width', () => (
  <Example title="Form full width">
    <RowLayout gutter="small">
      <Form fullWidth>
        <Form.Field label="Something">
          <TextInput
            type="text"
            placeholder="Enter something"
            actions={[{ icon: 'copy', handler: () => {}, label: 'Copy to clipboard' }]}
          />
        </Form.Field>
        <Form.Field
          label="Long input"
          helpText="How tall are you?"
          error="Show only in the first field"
        >
          <TextArea placeholder="Add a lot of text here" />
        </Form.Field>
        <Form.Field label="Options list">
          <Select
            options={[
              { text: 'First option', value: '1', defaultSelected: true },
              { text: 'Second option', value: '2' },
              { text: 'Third option', value: '3' },
              { text: 'Fourth option', value: '4' }
            ]}
          />
        </Form.Field>
        <Form.Field label="Subscribe">
          <Switch on />
        </Form.Field>
        <Form.Field label="Agree">
          <Radio name="example1" selected="one" onChange={(_) => {}}>
            <Radio.Option value="one">One</Radio.Option>
            <Radio.Option value="two">Two</Radio.Option>
          </Radio>
        </Form.Field>
        <Form.Field label="Framework">
          <Checkbox.Group name="example1" selected={['one', 'two']}>
            <Checkbox name="one" value="one">
              Option 1
            </Checkbox>
            <Checkbox name="two" value="two">
              Option 2
            </Checkbox>
          </Checkbox.Group>
        </Form.Field>
        <Form.Field label="Custom field">
          <TextInput placeholder="Value" type="date" hasError />
        </Form.Field>
        <Form.Field
          label="Height"
          helpText="How tall are you?"
          error="Show only in the first field"
        >
          <StackLayout gutter="xsmall">
            <TextInput placeholder="Value" hasError />
            <Select
              options={[{ text: 'centimetres', value: 'cm' }, { text: 'inches', value: 'in' }]}
            />
            <Button
              appearance="link"
              icon="copy"
              label="Copy value"
              onClick={(e) => console.log(e)}
            />
          </StackLayout>
        </Form.Field>
        <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
      </Form>

      <Form layout="label-on-top" fullWidth>
        <Form.Field label="Something">
          <TextInput
            type="text"
            placeholder="Enter something"
            actions={[{ icon: 'copy', handler: () => {}, label: 'Copy to clipboard' }]}
          />
        </Form.Field>
        <Form.Field
          hasError
          label="Long input"
          helpText="How tall are you?"
          error="Show only in the first field"
        >
          <TextArea placeholder="Add a lot of text here" />
        </Form.Field>
        <Form.Field label="Options list">
          <Select
            options={[
              { text: 'First option', value: '1', defaultSelected: true },
              { text: 'Second option', value: '2' },
              { text: 'Third option', value: '3' },
              { text: 'Fourth option', value: '4' }
            ]}
          />
        </Form.Field>
        <Form.Field label="Subscribe">
          <Switch on />
        </Form.Field>
        <Form.Field label="Agree">
          <Radio name="example1" selected="one" onChange={(_) => {}}>
            <Radio.Option value="one">One</Radio.Option>
            <Radio.Option value="two">Two</Radio.Option>
          </Radio>
        </Form.Field>
        <Form.Field label="Framework">
          <Checkbox.Group name="example1" selected={['one', 'two']}>
            <Checkbox name="one" value="one">
              Option 1
            </Checkbox>
            <Checkbox name="two" value="two">
              Option 2
            </Checkbox>
          </Checkbox.Group>
        </Form.Field>
        <Form.Field label="Custom field">
          <TextInput placeholder="Value" type="date" hasError />
        </Form.Field>
        <Form.Field
          label="Height"
          helpText="How tall are you?"
          error="Show only in the first field"
        >
          <StackLayout gutter="xsmall">
            <TextInput placeholder="Value" hasError />
            <Select
              options={[{ text: 'centimetres', value: 'cm' }, { text: 'inches', value: 'in' }]}
            />
            <Button
              appearance="link"
              icon="copy"
              label="Copy value"
              onClick={(e) => console.log(e)}
            />
          </StackLayout>
        </Form.Field>
        <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
      </Form>
    </RowLayout>
  </Example>
))

storiesOf('Form', module).add('Form Fields with null children', () => (
  <Example title="Form Fields with null children">
    <RowLayout gutter="small">
      <Form>
        <Form.Field label="Something">
          <TextInput
            type="text"
            placeholder="Enter something"
            actions={[{ icon: 'copy', handler: () => {}, label: 'Copy to clipboard' }]}
          />
          {null}
        </Form.Field>

        <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
      </Form>
    </RowLayout>
  </Example>
))
