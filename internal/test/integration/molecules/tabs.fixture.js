import React from 'react'
import { Tabs } from '@auth0/cosmos'

class Fixture extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 0 }
  }

  handleSelected(selected) {
    this.setState({ selected })
  }

  render() {
    return (
      <Tabs
        id="custom-id"
        onSelect={nextIndex => this.handleSelected(nextIndex)}
        selected={this.state.selected}
      >
        <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
        <Tabs.Tab label="Tab 2">This is tab 2</Tabs.Tab>
        <Tabs.Tab label="Tab 3">This is tab 3</Tabs.Tab>
      </Tabs>
    )
  }
}

export default Fixture
