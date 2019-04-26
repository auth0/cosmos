import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '../../_helpers/story-helpers'

import { Tabs } from '../../'

class TestExample extends React.Component<{}, { selectedTab: number }> {
  constructor(props) {
    super(props)
    this.state = { selectedTab: 0 }
  }

  changeSelected(selectedTab) {
    this.setState({ selectedTab })
  }

  render() {
    return (
      <Tabs
        selected={this.state.selectedTab}
        onSelect={(newIndex) => this.changeSelected(newIndex)}
        id="example"
      >
        <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
        <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
        <Tabs.Tab label="Tab 3">Look, third tab is selected by default!</Tabs.Tab>
      </Tabs>
    )
  }
}

storiesOf('Tabs', module).add('default', () => (
  <Example title="default">
    <TestExample />
  </Example>
))

storiesOf('Tabs', module).add('default selected', () => (
  <Example title="default">
    <Tabs selected={2} onSelect={(_) => {}}>
      <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
      <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
      <Tabs.Tab selected label="Tab 3">
        Look, third tab is selected by default!
      </Tabs.Tab>
    </Tabs>
  </Example>
))

storiesOf('Tabs', module).add('null tab in children', () => (
  <Example title="default">
    <Tabs selected={0} onSelect={(_) => {}}>
      <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
      {null}
      <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
    </Tabs>
  </Example>
))

storiesOf('Tabs', module).add('stressed', () => (
  <Example title="stressed - 9 tabs with 26 characters labels">
    <Tabs selected={0} onSelect={(_) => {}}>
      <Tabs.Tab label="Lorem ipsum dolor sit amet">This is tab 1</Tabs.Tab>
      <Tabs.Tab label="Lorem ipsum dolor sit amet">This is tab 2</Tabs.Tab>
      <Tabs.Tab label="Lorem ipsum dolor sit amet">This is tab 3</Tabs.Tab>
      <Tabs.Tab label="Lorem ipsum dolor sit amet">This is tab 4</Tabs.Tab>
      <Tabs.Tab label="Lorem ipsum dolor sit amet">This is tab 5</Tabs.Tab>
      <Tabs.Tab label="Lorem ipsum dolor sit amet">This is tab 6</Tabs.Tab>
      <Tabs.Tab label="Lorem ipsum dolor sit amet">This is tab 7</Tabs.Tab>
      <Tabs.Tab label="Lorem ipsum dolor sit amet">This is tab 8</Tabs.Tab>
      <Tabs.Tab label="Lorem ipsum dolor sit amet">This is tab 9</Tabs.Tab>
    </Tabs>
  </Example>
))
