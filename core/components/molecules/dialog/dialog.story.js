import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'
import { Dialog, Form, Link, Tabs, Paragraph, Text } from '@auth0/cosmos'

const StyledExample = styled(Example)`
  min-height: 800px;
`

storiesOf('Dialog').add('default', () => (
  <StyledExample title="default">
    <Dialog
      open
      title="Example Dialog"
      onClose={() => { }}
      actions={[
        new Dialog.Action('OK', () => { }, 'primary'),
        new Dialog.Action('Cancel', () => { })
      ]}
    >
      Are you sure?
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog').add('with primary button only', () => (
  <StyledExample title="with primary button only">
    <Dialog
      open
      title="Example Dialog"
      onClose={() => { }}
      actions={[new Dialog.Action('OK', () => { }, 'primary')]}
    >
      Are you sure?
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog').add('with secondary button only', () => (
  <StyledExample title="with secondary button only">
    <Dialog
      open
      title="Example Dialog"
      onClose={() => { }}
      actions={[new Dialog.Action('Dismiss', () => { })]}
    >
      Are you sure?
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog').add('with form', () => (
  <StyledExample title="with form">
    <Dialog
      open
      title="Example Dialog"
      onClose={() => { }}
      actions={[
        new Dialog.Action('OK', () => { }, 'primary'),
        new Dialog.Action('Cancel', () => { })
      ]}
      width={600}
    >
      <Form layout="label-on-top">
        <Form.TextInput label="First Name" type="text" placeholder="John" />
        <Form.TextInput label="Last Name" type="text" placeholder="Doe" />
        <Form.TextInput label="Email Address" type="text" placeholder="john.doe@auth0.com" />
      </Form>
    </Dialog>
  </StyledExample>
))

storiesOf('Dialog').add('with introduction + form', () => (
  <StyledExample title="with introduction + form">
    <Dialog
      open
      title="Example Dialog"
      onClose={() => { }}
      actions={[
        new Dialog.Action('OK', () => { }, 'primary'),
        new Dialog.Action('Cancel', () => { })
      ]}
      width={600}
    >
      <Paragraph>
        This is a brief introduction to the form. This is a short text that goes before the form
        starts and may include <Link href="#">links to other sites</Link> and/or{' '}
        <Text type="strong">bold</Text> text.
      </Paragraph>
      <Form layout="label-on-top">
        <Form.TextInput label="First Name" type="text" placeholder="John" />
        <Form.TextInput label="Last Name" type="text" placeholder="Doe" />
        <Form.TextInput label="Email Address" type="text" placeholder="john.doe@auth0.com" />
      </Form>
    </Dialog>
  </StyledExample>
))


storiesOf('Dialog').add('with tabs', () => (
  <StyledExample title="with tabs">
    <Dialog
      open
      title="Example Dialog"
      onClose={() => { }}
      actions={[
        new Dialog.Action('OK', () => { }, 'primary'),
        new Dialog.Action('Cancel', () => { })
      ]}
      width={600}
    >
      Tabs
      {/* <Tabs selected={2} onSelect={_ => { }}>
        <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
        <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
        <Tabs.Tab selected label="Tab 3">
          Look, third tab is selected by default!
        </Tabs.Tab>
      </Tabs> */}

    </Dialog>
  </StyledExample>
))

storiesOf('Dialog').add('stressed', () => (
  <StyledExample title="stressed">
    <Dialog
      open
      title="Thisisaverylongstringoftexttotestworkbreakandoverlowingofthecomponentwhenithasaverylongstringoftest"
      onClose={() => { }}
      actions={[
        new Dialog.Action('OK', () => { }, 'primary'),
        new Dialog.Action('Cancel', () => { })
      ]}
    >
      Thisisaverylongstringoftexttotestworkbreakandoverlowingofthecomponentwhenithasaverylongstringoftest

      This is a brief introduction to the form. This is a short text that goes before the form starts and may include <Link href="#">links to other sites</Link> and/or{' '} <Text type="strong">bold</Text> text.

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