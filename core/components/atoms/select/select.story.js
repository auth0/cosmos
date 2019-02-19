import React from 'react'
import styled from '@auth0/cosmos/styled'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'

import { Select } from '@auth0/cosmos'

const ExampleForSelect = styled(Example)`
  min-height: 450px;
`

class InteractiveSelect extends React.Component {
  constructor(props) {
    super(props)

    this.state = { value: null }
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return this.props.children(this.state.value, this.onChange)
  }
}

storiesOf('Select', module).add('simple', () => (
  <ExampleForSelect title="Select: simple">
    <Select
      options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
      onChange={event => console.log(event)}
    />
  </ExampleForSelect>
))

storiesOf('Select', module).add('simple: open', () => (
  <ExampleForSelect title="Select: simple">
    <Select
      defaultMenuOpen
      options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
      onChange={event => console.log(event)}
    />
  </ExampleForSelect>
))

storiesOf('Select', module).add('multiple tags', () => (
  <ExampleForSelect title="Select: stressed multiple tags">
    <Select
      multiple
      value={[1, 2, 3]}
      options={[
        { text: 'Applications', value: 1 },
        { text: 'Connections', value: 2 },
        { text: 'Logs', value: 3 }
      ]}
    />
  </ExampleForSelect>
))

storiesOf('Select', module).add('multiple tags: open', () => (
  <ExampleForSelect title="Select: stressed multiple tags">
    <Select
      multiple
      defaultMenuOpen
      value={[1]}
      options={[
        { text: 'Applications', value: 1 },
        { text: 'Connections', value: 2 },
        { text: 'Logs', value: 3 }
      ]}
    />
  </ExampleForSelect>
))

storiesOf('Select', module).add('stressed: multiple tags', () => (
  <ExampleForSelect title="Select: stressed multiple tags">
    <Select
      multiple
      defaultMenuOpen
      value={[1, 2, 3, 4, 5, 6, 7]}
      options={[
        { text: 'This is a very long tag, like super long', value: 1 },
        { text: 'This is a very long tag, like super long for real', value: 2 },
        { text: 'This is a long tag, like super long for real', value: 3 },
        { text: 'Very long tag, like super long for real', value: 4 },
        { text: 'Long tag, like super long for real', value: 5 },
        { text: 'This is a long tag', value: 6 },
        { text: 'This is a very long tag, like super long for real', value: 7 }
      ]}
    />
  </ExampleForSelect>
))

storiesOf('Select', module).add('stressed: multiple tags - open', () => (
  <ExampleForSelect title="Select: stressed multiple tags">
    <Select
      multiple
      defaultMenuOpen
      value={[1]}
      options={[
        { text: 'This is a very long tag, like super long', value: 1 },
        { text: 'This is a very long tag, like super long for real', value: 2 },
        { text: 'This is a long tag, like super long for real', value: 3 },
        { text: 'Very long tag, like super long for real', value: 4 },
        { text: 'Long tag, like super long for real', value: 5 },
        { text: 'This is a long tag', value: 6 },
        { text: 'This is a very long tag, like super long for real', value: 7 }
      ]}
    />
  </ExampleForSelect>
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
        defaultMenuOpen={this.props.defaultMenuOpen}
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
  <ExampleForSelect title="Select: simple">
    <SelectWithEmptyString />
  </ExampleForSelect>
))
storiesOf('Select', module).add('simple with empty string: open', () => (
  <ExampleForSelect title="Select: simple">
    <SelectWithEmptyString defaultMenuOpen />
  </ExampleForSelect>
))

storiesOf('Select', module).add('with placeholder', () => (
  <ExampleForSelect title="Select: with placeholder">
    <Select
      placeholder="Select an option..."
      options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
      onChange={event => console.log(event)}
    />
  </ExampleForSelect>
))

storiesOf('Select', module).add('default value', () => (
  <ExampleForSelect title="Select: with default value">
    <Select
      value={2}
      options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
      onChange={event => console.log(event)}
    />
  </ExampleForSelect>
))

storiesOf('Select', module).add('disabled', () => (
  <ExampleForSelect title="Select: disabled">
    <Select
      value={2}
      disabled
      options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
      onChange={event => console.log(event)}
    />
  </ExampleForSelect>
))

storiesOf('Select', module).add('disabled option', () => (
  <ExampleForSelect title="Select: disabled option">
    <Select
      defaultMenuOpen
      placeholder="Select from the enabled options"
      options={[
        { text: 'One', value: 1, disabled: true },
        { text: 'Two', value: 2 },
        { text: 'Three', value: 3 }
      ]}
      onChange={event => console.log(event)}
    />
  </ExampleForSelect>
))

storiesOf('Select', module).add('groups', () => (
  <ExampleForSelect title="Select: groups">
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
  </ExampleForSelect>
))

storiesOf('Select', module).add('interactive: groups', () => (
  <ExampleForSelect title="Select: groups">
    <InteractiveSelect>
      {(value, onChange) => (
        <Select
          value={value}
          onChange={onChange}
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
      )}
    </InteractiveSelect>
  </ExampleForSelect>
))

storiesOf('Select', module).add('interactive: groups - multiple', () => (
  <ExampleForSelect title="Select: groups">
    <InteractiveSelect>
      {(value, onChange) => (
        <Select
          multiple
          searchable
          value={value}
          onChange={onChange}
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
      )}
    </InteractiveSelect>
  </ExampleForSelect>
))

storiesOf('Select', module).add('stressed', () => (
  <ExampleForSelect title="Select: stressed - 56 characters with 300px width">
    <div style={{ width: 300 }}>
      <Select
        value={1}
        defaultMenuOpen
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
  </ExampleForSelect>
))

storiesOf('Select', module).add('interactive: stressed', () => (
  <ExampleForSelect title="Select: stressed - 56 characters with 300px width">
    <div style={{ width: 300 }}>
      <InteractiveSelect>
        {(value, onChange) => (
          <Select
            value={value}
            onChange={onChange}
            defaultMenuOpen
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
          />
        )}
      </InteractiveSelect>
    </div>
  </ExampleForSelect>
))
