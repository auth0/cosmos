import React from 'react'
import { Radio } from '@auth0/cosmos'

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
      >
        <Radio.Option value="one">Option 1</Radio.Option>
        <Radio.Option value="two">Option 2</Radio.Option>
      </Radio>
    )
  }
}

export default Fixture
