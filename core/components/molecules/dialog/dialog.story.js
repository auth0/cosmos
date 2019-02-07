import React from 'react'
import styled from '@auth0/cosmos/styled'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'
import {
  Dialog,
  Form,
  Link,
  Tabs,
  Paragraph,
  Text,
  Button,
  TextInput,
  Tooltip,
  ButtonGroup
} from '@auth0/cosmos'
import Checkbox from '../../atoms/checkbox'

const StyledExample = styled(Example)`
  min-height: 800px;
`

storiesOf('Dialog', module).add('default', () => (
  <StyledExample title="default">
    <Dialog
      open
      title="Example Dialog"
      role="destructive"
      onClose={() => {}}
      actions={[
        new Dialog.Action('OK', () => {}, 'primary'),
        new Dialog.Action('Cancel', () => {}, 'secondary')
      ]}
    >
      Are you sure?
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog', module).add('with primary button only', () => (
  <StyledExample title="with primary button only">
    <Dialog
      open
      title="Example Dialog"
      onClose={() => {}}
      actions={[
        <Button onClick={() => {}} appearance="primary">
          OK
        </Button>
      ]}
    >
      Are you sure?
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog', module).add('without footer', () => (
  <StyledExample title="without footer">
    <Dialog open title="Example Dialog" onClose={() => {}}>
      Some information
    </Dialog>
    <Button>test</Button>
  </StyledExample>
))

storiesOf('Dialog', module).add('with form', () => (
  <StyledExample title="with form">
    <Dialog
      open
      title="Example Dialog"
      role="form"
      onClose={() => {}}
      actions={[
        <Button onClick={() => {}} appearance="primary">
          OK
        </Button>,
        <Button onClick={() => {}} appearance="secondary">
          Cancel
        </Button>
      ]}
      width={600}
    >
      <Form layout="label-on-top">
        <Form.Field label="First Name">
          <TextInput type="text" placeholder="John" />
        </Form.Field>
        <Form.Field label="Last Name">
          <TextInput type="text" placeholder="Doe" />
        </Form.Field>
        <Form.Field label="Email Address">
          <TextInput type="text" placeholder="john.doe@auth0.com" />
        </Form.Field>
      </Form>
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog', module).add('with introduction + form', () => (
  <StyledExample title="with introduction + form">
    <Dialog
      open
      title="Example Dialog"
      onClose={() => {}}
      actions={[
        <Button onClick={() => {}} appearance="primary">
          OK
        </Button>,
        <Button onClick={() => {}} appearance="secondary">
          Cancel
        </Button>
      ]}
      width={600}
    >
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Form layout="label-on-top">
        <Form.Field label="First Name">
          <TextInput type="text" placeholder="John" />
        </Form.Field>
        <Form.Field label="Last Name">
          <TextInput type="text" placeholder="Doe" />
        </Form.Field>
        <Form.Field label="Email Address">
          <TextInput type="text" placeholder="john.doe@auth0.com" />
        </Form.Field>
      </Form>
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog', module).add('stressed', () => (
  <StyledExample title="stressed">
    <Dialog
      open
      title="Thisisaverylongstringoftexttotestworkbreakandoverlowingofthecomponentwhenithasaverylongstringoftest"
      onClose={() => {}}
      actions={[
        <Button onClick={() => {}} appearance="primary">
          OK
        </Button>,
        <Button onClick={() => {}} appearance="secondary">
          Cancel
        </Button>
      ]}
    >
      Thisisaverylongstringoftexttotestworkbreakandoverlowingofthecomponentwhenithasaverylongstringoftest
      This is a brief introduction to the form. This is a short text that goes before the form
      starts and may include <Link href="#">links to other sites</Link> and/or{' '}
      <Text type="strong">bold</Text> text.
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog', module).add('dialog with tabs', () => (
  <StyledExample title="dialog with tabs">
    <Dialog
      open
      title="Example Dialog"
      role="destructive"
      onClose={() => {}}
      actions={[
        new Dialog.Action('OK', () => {}, 'primary'),
        new Dialog.Action('Cancel', () => {}, 'secondary')
      ]}
    >
      <Tabs selected={0} onSelect={_ => {}}>
        <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
        <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
        <Tabs.Tab label="Tab 3">Look, third tab is selected by default!</Tabs.Tab>
      </Tabs>
    </Dialog>
  </StyledExample>
))

class StatedDialogTabsExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 0 }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(newIndex) {
    this.setState({ selected: newIndex })
  }

  render() {
    return (
      <Dialog open={true} title="Test 1">
        <Tabs selected={this.state.selected} onSelect={this.handleChange}>
          <Tabs.Tab label="Test 1st tab">
            <p>Are you sure</p>

            {/* Adding a key is optional but recommended
            to avoid unexpected transitions between tab footer buttons */}
            <Dialog.FooterContainer>
              <Dialog.Footer key="1st-tab-footer">
                <ButtonGroup>
                  <Button appearance="secondary">Cancel</Button>
                  <Button appearance="cta">Send</Button>
                </ButtonGroup>
              </Dialog.Footer>
            </Dialog.FooterContainer>
          </Tabs.Tab>
          <Tabs.Tab label="Test 2nd tab">
            <Tooltip content="This is a tooltip which is soooo long that should go out of the dialog.">
              <Button>Hover me</Button>
            </Tooltip>

            <Dialog.Footer key="2nd-tab-footer">
              <ButtonGroup>
                <Button appearance="cta">Enable add-on</Button>
              </ButtonGroup>
            </Dialog.Footer>
          </Tabs.Tab>
        </Tabs>
      </Dialog>
    )
  }
}

storiesOf('Dialog', module).add('composed dialog with tabs', () => (
  <StyledExample title="test">
    <StatedDialogTabsExample />
  </StyledExample>
))

storiesOf('Dialog', module).add('composed dialog', () => (
  <StyledExample title="test2">
    <Dialog onClose={() => {}} open={true} composed>
      <Dialog.Header>
        <Dialog.Title>This is a simple title</Dialog.Title>
      </Dialog.Header>
      <Dialog.Body>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut autem delectus
          inventore labore laboriosam laborum libero molestias obcaecati odit officia optio,
          praesentium quam quasi sapiente unde vel voluptatem voluptatum.
        </p>
      </Dialog.Body>
      <Dialog.Footer>
        <Button appearance="cta">Test</Button>
      </Dialog.Footer>
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog', module).add('composed dialog with consecutive tooltips', () => (
  <StyledExample title="test">
    <Dialog onClose={() => {}} open={true} composed>
      <Dialog.Header>
        <Dialog.Title>This is a simple title</Dialog.Title>
      </Dialog.Header>
      <Dialog.Body>
        <Tooltip content="This is a sample tooltip" position="right" defaultVisible>
          <Checkbox name="test">This is a sample checkbox</Checkbox>
        </Tooltip>
        <Tooltip content="This is a sample tooltip" position="left" defaultVisible>
          <Checkbox name="test">This is a sample checkbox</Checkbox>
        </Tooltip>
      </Dialog.Body>
      <Dialog.Footer>
        <ButtonGroup>
          <Button appearance="cta">Test</Button>
        </ButtonGroup>
      </Dialog.Footer>
    </Dialog>
  </StyledExample>
))
