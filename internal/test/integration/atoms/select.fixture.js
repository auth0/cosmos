import React from 'react'
import { Select } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

const onChange = jest.fn()

class Fixture extends React.Component {
  render() {
    return (
      <Select
        id="custom-id"
        placeholder="Select an option..."
        options={[
          { text: 'One', value: 1, disabled: true },
          { text: 'Two', value: 2 },
          { text: 'Three', value: 3 }
        ]}
        onChange={onChange}
        onClick={mockFn}
      />
    )
  }
}

Fixture.onChange = onChange

export default Fixture
