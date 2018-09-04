import React from 'react'
import renderer from 'react-test-renderer'
import { Radio } from '@auth0/cosmos'
import 'jest-styled-components'

describe('Radio', () => {
  it('renders with automation attribute', () => {
    const tree = renderer
      .create(
        <Radio name="cosmos">
          <Radio.Option value="one">Option</Radio.Option>
        </Radio>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
