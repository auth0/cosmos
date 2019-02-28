import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'

import {
  Form,
  TextInput,
  TextArea,
  Select,
  Switch,
  Radio,
  Checkbox,
  Stack,
  Button
} from '@auth0/cosmos'

storiesOf('Form', module).add('all the fields', () => (
  <Example title="all the fields">
    <Form>
      <Form.Field label="Field label">
        <TextInput
          type="text"
          placeholder="Enter something"
          actions={[{ icon: 'copy', handler: () => {}, label: 'Copy to clipboard' }]}
        />
      </Form.Field>
      <Form.Field label="Long input">
        <TextArea placeholder="Add a lot of text here" />
      </Form.Field>
      <Form.Field label="Options list">
        <Select
          value={1}
          options={[
            { text: 'First option', value: '1' },
            { text: 'Second option', value: '2' },
            { text: 'Third option', value: '3' },
            { text: 'Fourth option', value: '4' }
          ]}
          onChange={event => console.log(event)}
        />
      </Form.Field>
      <Form.Field label="Subscribe">
        <Switch on />
      </Form.Field>
      <Form.Field label="Agree">
        <Radio name="example1" selected="one" onChange={_ => {}}>
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
      <Form.Field htmlFor="bring-your-own-id" label="Custom field">
        <input id="bring-your-own-id" type="date" />
      </Form.Field>
      <Form.Field label="Height" helpText="How tall are you?" error="Show only in the first field">
        <Stack>
          <TextInput placeholder="Value" hasError />
          <Select
            value="cm"
            options={[{ text: 'centimetres', value: 'cm' }, { text: 'inches', value: 'in' }]}
            onChange={event => console.log(event)}
          />
          <Button appearance="link" icon="copy" label="Copy value" onClick={e => console.log(e)} />
        </Stack>
      </Form.Field>
    </Form>
  </Example>
))
