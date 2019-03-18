import React from 'react'
import styled from '@auth0/cosmos/styled'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'

import { Select, Dialog } from '@auth0/cosmos'

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

storiesOf('Select', module).add('simple with placeholder', () => (
  <ExampleForSelect title="Select: with placeholder">
    <InteractiveSelect>
      {(value, onChange) => (
        <Select
          placeholder="Select an option..."
          value={value}
          options={[
            { text: 'One', value: 1 },
            { text: 'Two', value: 2 },
            { text: 'Three', value: 3 }
          ]}
          onChange={onChange}
        />
      )}
    </InteractiveSelect>
  </ExampleForSelect>
))

storiesOf('Select', module).add('simple with error', () => (
  <ExampleForSelect title="Select: simple">
    <Select
      hasError
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

storiesOf('Select', module).add('simple with custom getOptionValue', () => (
  <ExampleForSelect title="Select: custom getOptionValue">
    <InteractiveSelect>
      {(value, onChange) => (
        <div>
          <Select
            defaultMenuOpen
            options={[
              { text: '1', myCustomValue: 1 },
              { text: '2', myCustomValue: 2 },
              { text: '3', myCustomValue: 3 },
              { text: '4', myCustomValue: 4 },
              { text: '5', myCustomValue: 5 },
              { text: '6', myCustomValue: 6 },
              { text: '7', myCustomValue: 7 },
              { text: '8', myCustomValue: 8 },
              { text: '9', myCustomValue: 9 },
              { text: '10', myCustomValue: 10 },
              { text: '11', myCustomValue: 11 },
              { text: '12', myCustomValue: 12 },
              { text: '13', myCustomValue: 13 },
              { text: '14', myCustomValue: 14 },
              { text: '15', myCustomValue: 15 },
              { text: '16', myCustomValue: 16 },
              { text: '17', myCustomValue: 17 },
              { text: '18', myCustomValue: 18 }
            ]}
            value={value}
            onChange={onChange}
            getOptionValue={option => option.myCustomValue}
          />
          <p>Selected value: {value}</p>
        </div>
      )}
    </InteractiveSelect>
  </ExampleForSelect>
))

storiesOf('Select', module).add('multiple with custom getOptionValue', () => (
  <ExampleForSelect title="Select: custom getOptionValue">
    <InteractiveSelect>
      {(value, onChange) => (
        <div>
          <Select
            multiple
            searchable
            options={[
              { text: 'One', myCustomValue: 1 },
              { text: 'Two', myCustomValue: 2 },
              { text: 'Three', myCustomValue: 3 }
            ]}
            value={value}
            onChange={onChange}
            getOptionValue={option => option.myCustomValue}
          />
          <p>Selected value: {(value || []).join(',')}</p>
        </div>
      )}
    </InteractiveSelect>
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
          // defaultMenuOpen
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

class CustomRendererExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selectedItems: [] }
  }

  handleChange(event) {
    const selectedItems = event.target.value
    this.setState({ selectedItems })
  }

  renderOption(option, { isHovered }) {
    return (
      <div>
        <p>
          <strong>{option.label}</strong>
        </p>
        <p>{option.description}</p>
      </div>
    )
  }

  render() {
    return (
      <Select
        value={this.state.selectedItems}
        onChange={ev => this.handleChange(ev)}
        placeholder="Select an item..."
        customOptionRenderer={this.renderOption}
        defaultMenuOpen={this.props.defaultMenuOpen}
        options={[
          {
            label: 'One',
            description: 'This item holds the One number as 1.',
            value: 1
          },
          {
            label: 'Two',
            description: 'This item holds the Two number as 2.',
            value: 2
          },
          {
            label: 'Three',
            description: 'This item holds the Three number as 3.',
            value: 3
          },
          {
            label: 'Four',
            description: 'This item holds the Four number as 4.',
            value: 4
          },
          {
            label: 'Five',
            description: 'This item holds the Five number as 5.',
            value: 5
          },
          {
            label: 'Six',
            description: 'This item holds the Six number as 6.',
            value: 6
          },
          {
            label: 'Seven',
            description: 'This item holds the Seven number as 7.',
            value: 7
          },
          {
            label: 'Eight',
            description: 'This item holds the Eight number as 8.',
            value: 8
          },
          {
            label: 'Nine',
            description: 'This item holds the Nine number as 9.',
            value: 9
          },
          {
            label: 'Ten',
            description: 'This item holds the Ten number as 10.',
            value: 10
          }
        ]}
      />
    )
  }
}

storiesOf('Select', module).add('custom renderer', () => (
  <ExampleForSelect title="Select: custom renderer">
    <CustomRendererExample />
  </ExampleForSelect>
))

storiesOf('Select', module).add('custom renderer in dialog', () => (
  <ExampleForSelect title="Select: custom renderer">
    <Dialog open title="A dialog example">
      <CustomRendererExample defaultMenuOpen />
    </Dialog>
  </ExampleForSelect>
))

class AsyncExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selectedItems: [] }
    this.allOptions = [
      {
        label: 'One',
        description: 'This item holds the One number as 1.',
        value: 1
      },
      {
        label: 'Two',
        description: 'This item holds the Two number as 2.',
        value: 2
      },
      {
        label: 'Three',
        description: 'This item holds the Three number as 3.',
        value: 3
      },
      {
        label: 'Four',
        description: 'This item holds the Four number as 4.',
        value: 4
      },
      {
        label: 'Five',
        description: 'This item holds the Five number as 5.',
        value: 5
      },
      {
        label: 'Six',
        description: 'This item holds the Six number as 6.',
        value: 6
      },
      {
        label: 'Seven',
        description: 'This item holds the Seven number as 7.',
        value: 7
      },
      {
        label: 'Eight',
        description: 'This item holds the Eight number as 8.',
        value: 8
      },
      {
        label: 'Nine',
        description: 'This item holds the Nine number as 9.',
        value: 9
      },
      {
        label: 'Ten',
        description: 'This item holds the Ten number as 10.',
        value: 10
      }
    ]

    this.loadOptions = this.loadOptions.bind(this)
    this.noOptionsMessage = this.noOptionsMessage.bind(this)
  }

  handleChange(event) {
    const selectedItems = event.target.value
    console.log({ selectedItems })
    this.setState({ selectedItems })
  }

  filterOptions(value) {
    return this.allOptions.filter(item => item.label.toLowerCase().includes(value.toLowerCase()))
  }

  loadOptions(inputValue, callback) {
    setTimeout(() => {
      callback(this.filterOptions(inputValue))
    }, 500)
  }

  noOptionsMessage({ inputValue }) {
    return inputValue.length > 0 ? 'No options' : 'Type to search...'
  }

  render() {
    return (
      <Select
        async
        value={this.state.selectedItems}
        onChange={ev => this.handleChange(ev)}
        placeholder="Select an item..."
        noOptionsMessage={this.noOptionsMessage}
        loadOptions={this.loadOptions}
      />
    )
  }
}

storiesOf('Select', module).add('async select', () => (
  <ExampleForSelect title="Select: async select">
    <AsyncExample />
  </ExampleForSelect>
))
