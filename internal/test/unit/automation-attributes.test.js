import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {
  Alert,
  Breadcrumb,
  Button,
  Checkbox,
  Radio,
  Select,
  Switch,
  Tag,
  TextInput,
  TextArea,
  ButtonGroup,
  Dialog,
  EmptyState,
  FormGroup,
  Form,
  List,
  PageHeader,
  Pager,
  PaginationToolbar,
  Pagination,
  ResourceList,
  Sidebar,
  Stack,
  Table,
  Tabs
} from '@auth0/cosmos'

Enzyme.configure({ adapter: new Adapter() })

describe('Automation data attributes', () => {
  it('Alert', () => {
    const alert = shallow(<Alert dismissible>Text</Alert>)

    expect(alert.prop('data-cosmos-key')).toEqual('alert')
    expect(
      alert
        .children()
        .last()
        .prop('data-cosmos-key')
    ).toEqual('alert.dismiss')
  })

  it('Breadcrumb', () => {
    const breadcrumb = shallow(<Breadcrumb />)

    expect(breadcrumb.prop('data-cosmos-key')).toEqual('breadcrumb')
  })

  it('Button', () => {
    const button = shallow(<Button />)

    expect(button.prop('data-cosmos-key')).toEqual('button')
  })

  describe('Checkbox', () => {
    it('single element', () => {
      const checkbox = shallow(<Checkbox name="cosmos" />)

      expect(checkbox.prop('data-cosmos-key')).toEqual('checkbox')
    })

    it('group of elements', () => {
      const checkbox = shallow(<Checkbox.Group name="cosmos" />)

      expect(checkbox.prop('data-cosmos-key')).toEqual('checkbox.group')
    })
  })

  it('Radio', () => {
    const radio = shallow(
      <Radio name="cosmos">
        <Radio.Option value="one">Option</Radio.Option>
      </Radio>
    )

    expect(radio.prop('data-cosmos-key')).toEqual('radio')
  })

  it('Select', () => {
    const select = shallow(<Select options={[{ text: 'One', value: 1 }]} />)
      .children()
      .last()

    expect(select.prop('data-cosmos-key')).toEqual('select')
    expect(
      select
        .children()
        .first()
        .prop('data-cosmos-key')
    ).toEqual('select.option')
  })

  it('Switch', () => {
    const cSwitch = shallow(<Switch />)

    expect(cSwitch.prop('data-cosmos-key')).toEqual('switch')
  })

  describe('Tag', () => {
    it('single element', () => {
      const tag = shallow(<Tag>Tag</Tag>)

      expect(tag.prop('data-cosmos-key')).toEqual('tag')
    })

    it('group of elements', () => {
      const tagGroup = shallow(
        <Tag.Group>
          <Tag>One</Tag>
        </Tag.Group>
      )

      expect(tagGroup.prop('data-cosmos-key')).toEqual('tag.group')
    })
  })

  it('TextInput', () => {
    const textInput = shallow(<TextInput />)

    expect(textInput.prop('data-cosmos-key')).toEqual('text-input')
  })

  it('TextArea', () => {
    const textArea = shallow(<TextArea />)

    expect(textArea.prop('data-cosmos-key')).toEqual('text-area')
  })

  it('ButtonGroup', () => {
    const buttonGroup = shallow(<ButtonGroup />)

    expect(buttonGroup.prop('data-cosmos-key')).toEqual('button-group')
  })

  it('Dialog', () => {
    const overlay = shallow(<Dialog open actions={[]} title="Dialog" onClose={() => {}} />)

    const focusTrap = overlay.childAt(0)
    const dialog = focusTrap.childAt(0)
    const dialogHeader = dialog.childAt(1)
    const dialogBody = dialog.childAt(2)
    const dialogFooter = dialog.childAt(3)

    expect(dialog.prop('data-cosmos-key')).toEqual('dialog')
    expect(dialogHeader.prop('data-cosmos-key')).toEqual('dialog.title')
    expect(dialogBody.prop('data-cosmos-key')).toEqual('dialog.body')

    if (dialogFooter.exists()) expect(dialogFooter.prop('data-cosmos-key')).toEqual('dialog.footer')
  })

  it('EmptyState', () => {
    const emptyState = shallow(
      <EmptyState
        title="state"
        icon="analytics"
        action={{
          icon: 'plus',
          label: 'Create Client',
          handler: function() {}
        }}
      />
    )

    expect(emptyState.prop('data-cosmos-key')).toEqual('empty-state')
  })

  it('FormGroup', () => {
    const formGroup = shallow(<FormGroup />)

    expect(formGroup.prop('data-cosmos-key')).toEqual('form-group')
  })

  it('Form', () => {
    const form = shallow(
      <Form layout="label-on-left">
        <Form.FieldSet label="Fieldset Label" />
      </Form>
    )

    expect(form.children().prop('data-cosmos-key')).toEqual('form')
  })

  it('List', () => {
    const list = shallow(
      <List>
        <div>element</div>
      </List>
    )

    expect(list.prop('data-cosmos-key')).toEqual('list')
    expect(list.children().prop('data-cosmos-key')).toEqual('list.item')
  })

  it('PageHeader', () => {
    const pageHeader = shallow(<PageHeader description="description" />)

    expect(pageHeader.prop('data-cosmos-key')).toEqual('page-header')
  })

  it('Pager', () => {
    const pager = shallow(<Pager page={3} perPage={10} items={20372} />)

    expect(pager.prop('data-cosmos-key')).toEqual('pager')
  })

  it('PaginationToolbar', () => {
    const paginationToolbar = shallow(<PaginationToolbar page={3} perPage={10} items={20372} />)

    expect(paginationToolbar.prop('data-cosmos-key')).toEqual('pagination-toolbar')
  })

  it('Pagination', () => {
    const pagination = shallow(<Pagination page={3} perPage={10} items={20372} />)

    expect(pagination.prop('data-cosmos-key')).toEqual('pagination')
  })

  it('ResourceList', () => {
    const resourceList = shallow(
      <ResourceList
        items={[
          {
            title: 'Item 1',
            subtitle: 'Native'
          }
        ]}
        actions={[]}
        onItemClick={() => {}}
      />
    )

    expect(resourceList.prop('data-cosmos-key')).toEqual('resource-list')
  })

  it('Sidebar', () => {
    const sidebar = shallow(
      <Sidebar>
        <Sidebar.Link icon="clients" label="Clients" onClick={() => {}} />
      </Sidebar>
    )

    expect(sidebar.prop('data-cosmos-key')).toEqual('sidebar')
  })

  it('Stack', () => {
    const stack = shallow(
      <Stack>
        <div>element</div>
      </Stack>
    )

    expect(stack.prop('data-cosmos-key')).toEqual('stack')
    expect(stack.children().prop('data-cosmos-key')).toEqual('stack.item')
  })

  it('Table', () => {
    const table = shallow(
      <Table
        items={[
          {
            name: 'john'
          }
        ]}
      >
        <Table.Column field="name" title="Name" width="30%" />
      </Table>
    )
    expect(table.childAt(0).prop('data-cosmos-key')).toEqual('table')

    expect(
      table
        .childAt(0)
        .childAt(1)
        .prop('data-cosmos-key')
    ).toEqual('table.body')

    expect(
      table
        .childAt(0)
        .childAt(1)
        .children()
        .prop('data-cosmos-key')
    ).toEqual('table.row')
  })

  it('Tabs', () => {
    const tabs = shallow(
      <Tabs onSelect={() => {}} selected={0}>
        <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
      </Tabs>
    )
    const tabList = tabs
      .children() // [TabList, ...TabItem]
      .first() // TabList

    const tabListItems = tabList.children()
    const tabLinks = tabListItems.children()

    expect(tabs.prop('data-cosmos-key')).toEqual('tabs')
    expect(tabList.prop('data-cosmos-key')).toEqual('tabs.list')
    expect(tabListItems.prop('data-cosmos-key')).toEqual('tabs.list-item')
    expect(tabLinks.prop('data-cosmos-key')).toEqual('tabs.link')
  })
})
