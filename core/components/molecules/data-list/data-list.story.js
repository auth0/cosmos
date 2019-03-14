import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'

import {
  DataList,
  Switch,
  StackLayout,
  Button,
  ButtonGroup,
  Heading,
  ColumnLayout,
  RowLayout,
  Avatar,
  Code
} from '@auth0/cosmos'
import { Paragraph } from '../../components'

class ExampleDataList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      DatalistDrawers: { uno: false, dos: false, tres: false },
      items: ['uno', 'dos', 'tres']
    }
  }

  toggleDataList(DatalistId) {
    this.setState({
      DatalistDrawers: {
        ...this.state.DatalistDrawers,
        [DatalistId]: !this.state.DatalistDrawers[DatalistId]
      }
    })
  }

  buildItem(item) {
    return (
      <DataList.Item>
        <DataList.Header>
          <StackLayout space={['none', 1]} gutter="small" wrap="true">
            <Avatar type="resource" />
            <RowLayout gutter="none">
              <Heading size={4}>Title</Heading>
              <Paragraph>Descrifption Description</Paragraph>
            </RowLayout>
          </StackLayout>
        </DataList.Header>
        <DataList.Body>
          <span>ID:</span> <Code>98367683783</Code>
        </DataList.Body>
        <DataList.Footer>
          <ButtonGroup>
            <Button icon="pencil" />
            <Button icon="copy" />
            <Button icon="delete" />
          </ButtonGroup>
        </DataList.Footer>
        <DataList.Drawer
          open={this.state.DatalistDrawers[item]}
          onToggle={() => this.toggleDataList(item)}
          description="desciption of the drawer"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporellentesque.
          Risus ultricies tristique nulla aliquet enim. Proin libero nunc consequat interdum varius
          sit amet. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt.
          Tincidunt arcu nonLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          temporellentesque. Risus ultricies tristique nulla aliquet enim. Proin libero nunc
          consequat interdum varius sit amet. Scelerisque viverra mauris in aliquam sem fringilla ut
          morbi tincidunt. Tincidunt arcu nonLorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod temporellentesque. Risus ultricies tristique nulla aliquet enim.
          Proin libero nunc consequat interdum varius sit amet. Scelerisque viverra mauris in
          aliquam sem fringilla ut morbi tincidunt. Tincidunt arcu non
        </DataList.Drawer>
      </DataList.Item>
    )
  }

  render() {
    return (
      <DataList
        label={'something'}
        draggable
        onDragEnd={(oldItems, newItems) =>
          this.setState({ items: DataList.arrayMove(this.state.items, oldItems, newItems) })
        }
      >
        {this.state.items.map(item => this.buildItem(item))}
      </DataList>
    )
  }
}

storiesOf('DataList', module).add('Default structure', () => (
  <Example title="Default structure">
    <ExampleDataList />
  </Example>
))

storiesOf('DataList', module).add('Simple Datalist', () => (
  <Example title="Simple Datalist">
    <DataList draggable onDragEnd={() => {}}>
      <DataList.Item>Item 1</DataList.Item>
      <DataList.Item>Item 2</DataList.Item>
      <DataList.Item>Item 3</DataList.Item>
    </DataList>
  </Example>
))

storiesOf('DataList', module).add('with StackLayout', () => (
  <Example title="with StackLayout">
    <DataList>
      <DataList.Item>
        <StackLayout distribution="spaceBetween">
          <Heading size={4}>Heading</Heading>
          <ButtonGroup compressed>
            <Button icon="pencil" />
            <Button icon="copy" />
            <Button icon="delete" />
          </ButtonGroup>
        </StackLayout>
      </DataList.Item>

      <DataList.Item>
        <StackLayout distribution="spaceBetween">
          <Heading size={4}>Heading</Heading>
          <ButtonGroup compressed>
            <Button icon="pencil" />
            <Button icon="copy" />
            <Button icon="delete" />
          </ButtonGroup>
        </StackLayout>
      </DataList.Item>

      <DataList.Item>
        <StackLayout distribution="spaceBetween">
          <Heading size={4}>Heading</Heading>
          <ButtonGroup compressed>
            <Button icon="pencil" />
            <Button icon="copy" />
            <Button icon="delete" />
          </ButtonGroup>
        </StackLayout>
      </DataList.Item>

      <DataList.Item>
        <StackLayout distribution="spaceBetween">
          <Heading size={4}>Heading</Heading>
          <ButtonGroup compressed>
            <Button icon="pencil" />
            <Button icon="copy" />
            <Button icon="delete" />
          </ButtonGroup>
        </StackLayout>
      </DataList.Item>
    </DataList>
  </Example>
))

storiesOf('DataList', module).add('with columns', () => (
  <Example title="with columns">
    <DataList>
      <DataList.Item>
        <ColumnLayout distribution="1/4 1/4 1/4 1/4">
          <div>Column 01</div>
          <div>Column 02</div>
          <div>Column 03</div>
          <div>Column 04</div>
        </ColumnLayout>
      </DataList.Item>
      <DataList.Item>
        <ColumnLayout distribution="1/4 1/4 1/4 1/4">
          <div>Column 01</div>
          <div>Column 02</div>
          <div>Column 03</div>
          <div>Column 04</div>
        </ColumnLayout>
      </DataList.Item>
      <DataList.Item>
        <ColumnLayout distribution="1/4 1/4 1/4 1/4">
          <div>Column 01</div>
          <div>Column 02</div>
          <div>Column 03</div>
          <div>Column 04</div>
        </ColumnLayout>
      </DataList.Item>
      <DataList.Item>
        <ColumnLayout distribution="1/4 1/4 1/4 1/4">
          <div>Column 01</div>
          <div>Column 02</div>
          <div>Column 03</div>
          <div>Column 04</div>
        </ColumnLayout>
      </DataList.Item>
    </DataList>
  </Example>
))

storiesOf('DataList', module).add('StackLayout with a switch', () => (
  <Example title="StackLayout with a switch">
    <DataList onItemClick={(ev, item) => console.log({ ev, item })}>
      <DataList.Item>
        <StackLayout space={[1, 1, 'none']}>
          <RowLayout gutter="xxsmall">
            <Heading size="3">M2M</Heading>
            <Paragraph>CLIENT ID whatever</Paragraph>
          </RowLayout>
          <div>GitHub</div>
          <Switch on labelPosition="left" />
        </StackLayout>
      </DataList.Item>

      <DataList.Item>
        <StackLayout space={[1, 1, 'none']}>
          <RowLayout gutter="xxsmall">
            <Heading size="3">M2M</Heading>
            <Paragraph>CLIENT ID whatever</Paragraph>
          </RowLayout>
          <div>GitHub</div>
          <Switch on labelPosition="left" />
        </StackLayout>
      </DataList.Item>

      <DataList.Item>
        <StackLayout space={[1, 1, 'none']}>
          <RowLayout gutter="xxsmall">
            <Heading size="3">M2M</Heading>
            <Paragraph>CLIENT ID whatever</Paragraph>
          </RowLayout>
          <div>GitHub</div>
          <Switch on labelPosition="left" />
        </StackLayout>
      </DataList.Item>

      <DataList.Item>
        <StackLayout space={[1, 1, 'none']}>
          <RowLayout gutter="xxsmall">
            <Heading size="3">M2M</Heading>
            <Paragraph>CLIENT ID whatever</Paragraph>
          </RowLayout>
          <div>GitHub</div>
          <Switch on labelPosition="left" />
        </StackLayout>
      </DataList.Item>
    </DataList>
  </Example>
))

storiesOf('DataList', module).add('switch in the middle', () => (
  <Example title="switch in the middle">
    <DataList sortable>
      <DataList.Item>
        <DataList.Header>Empty Rule</DataList.Header>
        <DataList.Body>
          <Switch hideAccessibleLabels />
        </DataList.Body>
        <DataList.Footer>
          <ButtonGroup>
            <Button icon="copy" />
            <Button icon="delete" />
          </ButtonGroup>
        </DataList.Footer>
      </DataList.Item>
      <DataList.Item>
        <DataList.Header>Empty Rule</DataList.Header>
        <DataList.Body>
          <Switch hideAccessibleLabels />
        </DataList.Body>
        <DataList.Footer>
          <ButtonGroup>
            <Button icon="copy" />
            <Button icon="delete" />
          </ButtonGroup>
        </DataList.Footer>
      </DataList.Item>
      <DataList.Item>
        <DataList.Header>Empty Rule</DataList.Header>
        <DataList.Body>
          <Switch hideAccessibleLabels />
        </DataList.Body>
        <DataList.Footer>
          <ButtonGroup>
            <Button icon="copy" />
            <Button icon="delete" />
          </ButtonGroup>
        </DataList.Footer>
      </DataList.Item>
    </DataList>
  </Example>
))

storiesOf('DataList', module).add('Drawer and switch', () => (
  <Example title="Drawer and switch">
    <DataList>
      <DataList.Item>
        <DataList.Header>
          <RowLayout gutter="xxsmall">
            <Heading size="3">M2M</Heading>
            <Paragraph>CLIENT ID whatever</Paragraph>
          </RowLayout>
        </DataList.Header>
        <DataList.Footer>
          <Switch on labelPosition="left" accessibleLabels={['AUTHORIZED', 'NOT AUTHORIZED']} />
        </DataList.Footer>
        <DataList.Drawer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporellentesque.
          Risus ultricies tristique nulla aliquet enim. Proin libero nunc consequat interdum varius
          sit amet. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt.
        </DataList.Drawer>
      </DataList.Item>
      <DataList.Item>
        <DataList.Header>
          <RowLayout gutter="xxsmall">
            <Heading size="3">M2M</Heading>
            <Paragraph>CLIENT ID whatever</Paragraph>
          </RowLayout>
        </DataList.Header>
        <DataList.Footer>
          <Switch on labelPosition="left" accessibleLabels={['AUTHORIZED', 'NOT AUTHORIZED']} />
        </DataList.Footer>
        <DataList.Drawer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporellentesque.
          Risus ultricies tristique nulla aliquet enim. Proin libero nunc consequat interdum varius
          sit amet. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt.
        </DataList.Drawer>
      </DataList.Item>
      <DataList.Item>
        <DataList.Header>
          <RowLayout gutter="xxsmall">
            <Heading size="3">M2M</Heading>
            <Paragraph>CLIENT ID whatever</Paragraph>
          </RowLayout>
        </DataList.Header>
        <DataList.Footer>
          <Switch on labelPosition="left" accessibleLabels={['AUTHORIZED', 'NOT AUTHORIZED']} />
        </DataList.Footer>
        <DataList.Drawer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporellentesque.
          Risus ultricies tristique nulla aliquet enim. Proin libero nunc consequat interdum varius
          sit amet. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt.
        </DataList.Drawer>
      </DataList.Item>
    </DataList>
  </Example>
))

storiesOf('DataList', module).add('stressed', () => (
  <Example title="stressed">
    <DataList>
      <DataList.Item>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sollicitudin
        pellentesque. Ut magna ex, ultricies in risus eget, laoreet lacinia nunc. Suspendisse mi
        leo, facilisis auctor massa non, congue interdum nunc. Donec eget sem id odio accumsan
        posuere ut ac neque. Etiam nec varius elit. Vivamus pharetra vulputate neque ut dignissim.
        Etiam ut malesuada nisl. Proin eget nulla venenatis ligula fringilla sodales sed in enim.
        Etiam luctus sollicitudin mollis. Duis a varius felis, quis egestas quam. Suspendisse
        sollicitudin varius condimentum. Nam accumsan placerat diam nec pretium. Vestibulum sed
        accumsan tellus. Nullam dictum lorem vel orci porta scelerisque. Nulla malesuada nibh ante,
        id dapibus felis fermentum eget.
      </DataList.Item>

      <DataList.Item>
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
      </DataList.Item>
      <DataList.Item>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sollicitudin
        pellentesque. Ut magna ex, ultricies in risus eget, laoreet lacinia nunc. Suspendisse mi
        leo, facilisis auctor massa non, congue interdum nunc. Donec eget sem id odio accumsan
        posuere ut ac neque. Etiam nec varius elit. Vivamus pharetra vulputate neque ut dignissim.
        Etiam ut malesuada nisl. Proin eget nulla venenatis ligula fringilla sodales sed in enim.
        Etiam luctus sollicitudin mollis. Duis a varius felis, quis egestas quam. Suspendisse
        sollicitudin varius condimentum. Nam accumsan placerat diam nec pretium. Vestibulum sed
        accumsan tellus. Nullam dictum lorem vel orci porta scelerisque. Nulla malesuada nibh ante,
        id dapibus felis fermentum eget.
      </DataList.Item>
    </DataList>
  </Example>
))
