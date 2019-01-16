import React from 'react'
import { Radio } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 'one' }
  }
  handleChange(evt) {
    this.setState({ selected: evt.target.value })
  }
  render() {
    return (
      <Radio
        name="fixture"
        selected={this.state.selected}
        onChange={evt => this.handleChange(evt)}
        id="custom-id"
        onClick={mockFn}
      >
        <Radio.Option value="one" id="custom-id">
          Option 1
        </Radio.Option>
        <Radio.Option value="two">Option 2</Radio.Option>
      </Radio>
    )
  }
}

export default Fixture
