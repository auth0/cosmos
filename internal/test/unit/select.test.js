import React from 'react'
import { shallow } from 'enzyme'
import { Select } from '@auth0/cosmos'

const noop = () => {}
const selectFactory = ({ onChange = noop } = {}) =>
  shallow(
    <Select
      placeholder="Select an option..."
      options={[
        { text: 'One', value: 1, disabled: true },
        { text: 'Two', value: 2 },
        { text: 'Three', value: 3 }
      ]}
      onChange={onChange}
    />
  )

describe('Select tests', () => {
  it('calls the onChange handler when the value changes', () => {
    const onChange = jest.fn()
    const selectWrapper = selectFactory({ onChange })
    const select = selectWrapper.childAt(1)

    const eventData = { target: { value: 2 } }

    select.simulate('change', eventData)
    expect(onChange).toHaveBeenCalledWith(eventData)
  })
})
