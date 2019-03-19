import React from 'react'
import { shallow } from 'enzyme'

import { Form, TextInput } from '@auth0/cosmos'

describe('Form Field', () => {
  it('renders the correct id', () => {
    const wrapper = shallow(
      <Form>
        <Form.Field label="Field label">
          <TextInput type="text" />
        </Form.Field>
      </Form>
    )

    expect(wrapper).toMatchSnapshot()
  })
})

describe('Form Field - old API', () => {
  it('renders the correct id', () => {
    const wrapper = shallow(
      <Form>
        <Form.Field label="Old API">
          <Form.TextInput type="text" />
        </Form.Field>
      </Form>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
