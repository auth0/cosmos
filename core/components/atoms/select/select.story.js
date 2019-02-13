import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Select } from '@auth0/cosmos'

storiesOf('Select', module).add('simple', () => (
  <Example title="Select: simple">
    <Select
      options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
      onChange={event => console.log(event)}
    />
  </Example>
))

class SelectWithEmptyString extends React.Component {
  constructor(props) {
    super(props)

    this.state = { value: 'custom' }

    this.handleValue = this.handleValue.bind(this)
  }

  handleValue(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <Select
        options={[
          { text: 'All apps', value: '' },
          { text: 'Custom apps', value: 'custom' },
          { text: 'Private apps', value: 'private' }
        ]}
        value={this.state.value}
        onChange={this.handleValue}
      />
    )
  }
}

storiesOf('Select', module).add('simple with empty string', () => (
  <Example title="Select: simple">
    <SelectWithEmptyString />
  </Example>
))

storiesOf('Select', module).add('with placeholder', () => (
  <Example title="Select: with placeholder">
    <Select
      placeholder="Select an option..."
      options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
      onChange={event => console.log(event)}
    />
  </Example>
))

storiesOf('Select', module).add('default value', () => (
  <Example title="Select: with default value">
    <Select
      value={2}
      options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
      onChange={event => console.log(event)}
    />
  </Example>
))

storiesOf('Select', module).add('disabled', () => (
  <Example title="Select: disabled">
    <Select
      value={2}
      disabled
      options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
      onChange={event => console.log(event)}
    />
  </Example>
))

storiesOf('Select', module).add('disabled option', () => (
  <Example title="Select: disabled option">
    <Select
      placeholder="Select from the enabled options"
      options={[
        { text: 'One', value: 1, disabled: true },
        { text: 'Two', value: 2 },
        { text: 'Three', value: 3 }
      ]}
      onChange={event => console.log(event)}
    />
  </Example>
))

storiesOf('Select', module).add('groups', () => (
  <Example title="Select: groups">
    <Select
      defaultMenuOpen
      placeholder="Groups"
      options={[
        {
          groupName: 'Group one',
          items: [
            { text: 'One one', value: 11 },
            { text: 'One two', value: 12 },
            { text: 'One three', value: 13 }
          ]
        },
        {
          groupName: 'Group two',
          items: [
            { text: 'Two one', value: 21 },
            { text: 'Two two', value: 22 },
            { text: 'Two three', value: 23 }
          ]
        }
      ]}
    />
  </Example>
))

storiesOf('Select', module).add('stressed', () => (
  <Example title="Select: stressed - 56 characters with 300px width">
    <div style={{ width: 300 }}>
      <Select
        value={1}
        options={[
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            value: 1
          },
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            value: 2
          },
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            value: 3
          }
        ]}
        onChange={event => console.log(event)}
      />
    </div>
  </Example>
))
