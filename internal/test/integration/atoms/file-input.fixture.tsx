import * as React from 'react'

import { FileInput } from '@auth0/cosmos'

class Fixture extends React.Component {
  state = { items: [] }

  handleChange(event) {
    if (event.added) {
      this.setState({ items: [...this.state.items, event.added] })
    }

    if (event.deleted) {
      this.setState({ items: this.state.items.filter((_, index) => index !== event.deleted) })
    }
  }

  render() {
    return (
      <FileInput
        id="custom-id"
        items={this.state.items}
        onChange={event => this.handleChange(event)}
      />
    )
  }
}

export default Fixture
