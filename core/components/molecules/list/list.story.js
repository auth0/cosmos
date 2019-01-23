import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'

import {
  List,
  Switch,
  StackLayout,
  Button,
  ButtonGroup,
  Heading,
  ColumnLayout,
  RowLayout,
  AvatarBlock,
  TextInput,
  Avatar,
  Code
} from '@auth0/cosmos'
import { Paragraph } from '../../components'

class ExampleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { listDrawers: { uno: false, dos: false, tres: false } }
  }

  toggleList(listId) {
    this.setState({
      listDrawers: { ...this.state.listDrawers, [listId]: !this.state.listDrawers[listId] }
    })
  }

  render() {
    return (
      <List sortable>
        <List.Item>
          <List.Header>
            <AvatarBlock
              type="resource"
              icon="apis"
              title="Auth0 Management API"
              subtitle="System API"
              size="default"
            />
          </List.Header>
          <List.Body>
            <StackLayout gutter="condensed">
              <p>hola</p>
              <TextInput
                code
                size="small"
                readOnly
                type="text"
                placeholder="978387639783876367833678367897838763678336783678978387636783367836789783876367833678367897838763678336783678678336783678"
              />
            </StackLayout>
          </List.Body>
          <List.Footer>
            <ButtonGroup>
              <Button icon="pencil" />
              <Button icon="copy" />
              <Button icon="delete" />
            </ButtonGroup>
          </List.Footer>
          <List.Drawer
            open={this.state.listDrawers.uno}
            onToggle={() => this.toggleList('uno')}
            description="desciption of the drawer"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            temporellentesque. Risus ultricies tristique nulla aliquet enim. Proin libero nunc
            consequat interdum varius sit amet. Scelerisque viverra mauris in aliquam sem fringilla
            ut morbi tincidunt. Tincidunt arcu nonLorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod temporellentesque. Risus ultricies tristique nulla aliquet enim.
            Proin libero nunc consequat interdum varius sit amet. Scelerisque viverra mauris in
            aliquam sem fringilla ut morbi tincidunt. Tincidunt arcu nonLorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod temporellentesque. Risus ultricies tristique
            nulla aliquet enim. Proin libero nunc consequat interdum varius sit amet. Scelerisque
            viverra mauris in aliquam sem fringilla ut morbi tincidunt. Tincidunt arcu non
          </List.Drawer>
        </List.Item>
        <List.Item>
          <List.Header>
            <StackLayout space={['none', 1]} gutter="condensed" wrap="true">
              <Avatar type="resource" />
              <RowLayout gutter="none">
                <Heading size={4}>
                  Title Title Title Title Title Title Title tle Title Title Title
                </Heading>
                <Paragraph>
                  Descrifption Description Description Description Description Description
                  Description Description Description Description Description Description
                </Paragraph>
              </RowLayout>
            </StackLayout>
          </List.Header>
          <List.Body>
            <span>ID:</span> <Code>98367683783</Code>
          </List.Body>
          <List.Footer>
            <ButtonGroup>
              <Button icon="pencil" />
              <Button icon="copy" />
              <Button icon="delete" />
            </ButtonGroup>
          </List.Footer>
          <List.Drawer
            open={this.state.listDrawers.dos}
            onToggle={() => this.toggleList('dos')}
            description="desciption of the drawer"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            temporellentesque. Risus ultricies tristique nulla aliquet enim. Proin libero nunc
            consequat interdum varius sit amet. Scelerisque viverra mauris in aliquam sem fringilla
            ut morbi tincidunt. Tincidunt arcu nonLorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod temporellentesque. Risus ultricies tristique nulla aliquet enim.
            Proin libero nunc consequat interdum varius sit amet. Scelerisque viverra mauris in
            aliquam sem fringilla ut morbi tincidunt. Tincidunt arcu nonLorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod temporellentesque. Risus ultricies tristique
            nulla aliquet enim. Proin libero nunc consequat interdum varius sit amet. Scelerisque
            viverra mauris in aliquam sem fringilla ut morbi tincidunt. Tincidunt arcu non
          </List.Drawer>
        </List.Item>
      </List>
    )
  }
}

storiesOf('List', module).add('Default structure', () => (
  <Example title="Default structure">
    <ExampleList />
  </Example>
))

storiesOf('List', module).add('Simple list', () => (
  <Example title="Simple list">
    <List>
      <List.Item>Item 1</List.Item>
      <List.Item>Item 2</List.Item>
      <List.Item>Item 3</List.Item>
    </List>
  </Example>
))

storiesOf('List', module).add('with StackLayout', () => (
  <Example title="with StackLayout">
    <List>
      <List.Item>
        <StackLayout distribution="spaceBetween">
          <Heading size={4}>Heading</Heading>
          <ButtonGroup compressed>
            <Button icon="pencil" />
            <Button icon="copy" />
            <Button icon="delete" />
          </ButtonGroup>
        </StackLayout>
      </List.Item>

      <List.Item>
        <StackLayout distribution="spaceBetween">
          <Heading size={4}>Heading</Heading>
          <ButtonGroup compressed>
            <Button icon="pencil" />
            <Button icon="copy" />
            <Button icon="delete" />
          </ButtonGroup>
        </StackLayout>
      </List.Item>

      <List.Item>
        <StackLayout distribution="spaceBetween">
          <Heading size={4}>Heading</Heading>
          <ButtonGroup compressed>
            <Button icon="pencil" />
            <Button icon="copy" />
            <Button icon="delete" />
          </ButtonGroup>
        </StackLayout>
      </List.Item>

      <List.Item>
        <StackLayout distribution="spaceBetween">
          <Heading size={4}>Heading</Heading>
          <ButtonGroup compressed>
            <Button icon="pencil" />
            <Button icon="copy" />
            <Button icon="delete" />
          </ButtonGroup>
        </StackLayout>
      </List.Item>
    </List>
  </Example>
))

storiesOf('List', module).add('with columns', () => (
  <Example title="with columns">
    <List>
      <List.Item>
        <ColumnLayout distribution="1/4 1/4 1/4 1/4">
          <div>Column 01</div>
          <div>Column 02</div>
          <div>Column 03</div>
          <div>Column 04</div>
        </ColumnLayout>
      </List.Item>
      <List.Item>
        <ColumnLayout distribution="1/4 1/4 1/4 1/4">
          <div>Column 01</div>
          <div>Column 02</div>
          <div>Column 03</div>
          <div>Column 04</div>
        </ColumnLayout>
      </List.Item>
      <List.Item>
        <ColumnLayout distribution="1/4 1/4 1/4 1/4">
          <div>Column 01</div>
          <div>Column 02</div>
          <div>Column 03</div>
          <div>Column 04</div>
        </ColumnLayout>
      </List.Item>
      <List.Item>
        <ColumnLayout distribution="1/4 1/4 1/4 1/4">
          <div>Column 01</div>
          <div>Column 02</div>
          <div>Column 03</div>
          <div>Column 04</div>
        </ColumnLayout>
      </List.Item>
    </List>
  </Example>
))

storiesOf('List', module).add('StackLayout with a switch', () => (
  <Example title="StackLayout with a switch">
    <List>
      <List.Item>
        <StackLayout space={[1, 1, 'none']}>
          <div>github</div>
          <div>GitHub</div>
          <Switch on labelPosition="left" />
        </StackLayout>
      </List.Item>

      <List.Item>
        <StackLayout space={[1, 1, 'none']}>
          <div>github</div>
          <div>GitHub</div>
          <Switch on labelPosition="left" />
        </StackLayout>
      </List.Item>

      <List.Item>
        <StackLayout space={[1, 1, 'none']}>
          <div>github</div>
          <div>GitHub</div>
          <Switch on labelPosition="left" />
        </StackLayout>
      </List.Item>

      <List.Item>
        <StackLayout space={[1, 1, 'none']}>
          <div>github</div>
          <div>GitHub</div>
          <Switch on labelPosition="left" />
        </StackLayout>
      </List.Item>
    </List>
  </Example>
))

storiesOf('List', module).add('stressed new', () => (
  <Example title="mfkdfd">
    <List>
      <List.Item>item</List.Item>
      <List.Item>item</List.Item>
      <List.Item>item</List.Item>
    </List>
  </Example>
))
storiesOf('List', module).add('stressed', () => (
  <Example title="stressed">
    <List>
      <List.Item>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sollicitudin
        pellentesque. Ut magna ex, ultricies in risus eget, laoreet lacinia nunc. Suspendisse mi
        leo, facilisis auctor massa non, congue interdum nunc. Donec eget sem id odio accumsan
        posuere ut ac neque. Etiam nec varius elit. Vivamus pharetra vulputate neque ut dignissim.
        Etiam ut malesuada nisl. Proin eget nulla venenatis ligula fringilla sodales sed in enim.
        Etiam luctus sollicitudin mollis. Duis a varius felis, quis egestas quam. Suspendisse
        sollicitudin varius condimentum. Nam accumsan placerat diam nec pretium. Vestibulum sed
        accumsan tellus. Nullam dictum lorem vel orci porta scelerisque. Nulla malesuada nibh ante,
        id dapibus felis fermentum eget.
      </List.Item>

      <List.Item>
        Loremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmmremmmm
        ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sollicitudin pellentesque.
        Ut magna ex, ultricies in risus eget, laoreet lacinia nunc. Suspendisse mi leo, facilisis
        auctor massa non, congue interdum nunc. Donec eget sem id odio accumsan posuere ut ac neque.
        Etiam nec varius elit. Vivamus pharetra vulputate neque ut dignissim. Etiam ut malesuada
        nisl. Proin eget nulla venenatis ligula fringilla sodales sed in enim. Etiam luctus
        sollicitudin mollis. Duis a varius felis, quis egestas quam. Suspendisse sollicitudin varius
        condimentum. Nam accumsan placerat diam nec pretium. Vestibulum sed accumsan tellus. Nullam
        dictum lorem vel orci porta scelerisque. Nulla malesuada nibh ante, id dapibus felis
        fermentum eget.
      </List.Item>
      <List.Item>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sollicitudin
        pellentesque. Ut magna ex, ultricies in risus eget, laoreet lacinia nunc. Suspendisse mi
        leo, facilisis auctor massa non, congue interdum nunc. Donec eget sem id odio accumsan
        posuere ut ac neque. Etiam nec varius elit. Vivamus pharetra vulputate neque ut dignissim.
        Etiam ut malesuada nisl. Proin eget nulla venenatis ligula fringilla sodales sed in enim.
        Etiam luctus sollicitudin mollis. Duis a varius felis, quis egestas quam. Suspendisse
        sollicitudin varius condimentum. Nam accumsan placerat diam nec pretium. Vestibulum sed
        accumsan tellus. Nullam dictum lorem vel orci porta scelerisque. Nulla malesuada nibh ante,
        id dapibus felis fermentum eget.
      </List.Item>
    </List>
  </Example>
))
