import React from 'react'

import { Checkbox, Tag } from '@auth0/cosmos'

import automationAttributeTest from './helpers/automation-attribute'
import AlertFixture from './atoms/alert.fixture'
import BreadcrumbFixture from './atoms/breadcrumb.fixture'
import ButtonFixture from './atoms/button.fixture'
import CheckboxFixture from './atoms/checkbox.fixture'
import RadioFixture from './atoms/radio.fixture'
import SelectFixture from './atoms/select.fixture'
import SwitchFixture from './atoms/switch.fixture'
import TagFixture from './atoms/tag.fixture'
import TextInputFixture from './atoms/text-input.fixture'
import TextAreaFixture from './atoms/textarea.fixture'
import ButtonGroupFixture from './molecules/button-group.fixture'
import DialogFixture from './molecules/dialog.fixture'
import EmptyStateFixture from './molecules/empty-state.fixture'
import FormGroupFixture from './molecules/form-group.fixture'
import FormFixture from './molecules/form.fixture'
import ListFixture from './molecules/list.fixture'
import PageHeaderFixture from './molecules/page-header.fixture'
import PagerFixture from './molecules/pager.fixture'
import PaginationFixture from './molecules/pagination.fixture'
import PaginationToolbarFixture from './molecules/pagination-toolbar.fixture'
import ResourceListFixture from './molecules/resource-list.fixture'
import SidebarFixture from './molecules/sidebar.fixture'
import StackFixture from './molecules/stack.fixture'
import TableFixture from './molecules/table.fixture'
import TabsFixture from './molecules/tabs.fixture'

// To avoid repeating 'has automation attribute' everywhere
const tests = elementName => `${elementName} has automation attribute`

describe('Automation data attributes', () => {
  it(tests('Alert'), () => {
    automationAttributeTest(AlertFixture, 'alert')
  })

  it(tests('Alert dismiss button'), () => {
    // TODO: Specify location
    automationAttributeTest(AlertFixture, 'alert.dismiss')
  })

  it(tests('Breadcrumb'), () => {
    automationAttributeTest(BreadcrumbFixture, 'breadcrumb')
  })

  it(tests('Button'), () => {
    automationAttributeTest(ButtonFixture, 'button')
  })

  it(tests('Checkbox'), () => {
    automationAttributeTest(CheckboxFixture, 'checkbox')
  })

  it(tests('Checkbox group'), () => {
    const customFixture = () => <Checkbox.Group name="cosmos" />
    automationAttributeTest(customFixture, 'checkbox.group')
  })

  it(tests('Radio'), () => {
    automationAttributeTest(RadioFixture, 'radio')
  })

  it(tests('Select'), () => {
    automationAttributeTest(SelectFixture, 'select')

    // TODO: Specify location
    automationAttributeTest(SelectFixture, 'select.option')
  })

  it(tests('Switch'), () => {
    automationAttributeTest(SwitchFixture, 'switch')
  })

  it(tests('Tag'), () => {
    automationAttributeTest(TagFixture, 'tag')
  })

  it(tests('Tag group'), () => {
    const customFixture = () => (
      <Tag.Group>
        <Tag>One</Tag>
      </Tag.Group>
    )

    automationAttributeTest(customFixture, 'tag.group')
  })

  it(tests('TextInput'), () => {
    automationAttributeTest(TextInputFixture, 'text-input')
  })

  it(tests('TextArea'), () => {
    automationAttributeTest(TextAreaFixture, 'text-area')
  })

  it(tests('ButtonGroup'), () => {
    automationAttributeTest(ButtonGroupFixture, 'button-group')
  })

  it(tests('Dialog'), () => {
    automationAttributeTest(DialogFixture, 'dialog')

    // TODO: Specify location
    automationAttributeTest(DialogFixture, 'dialog.title')
    automationAttributeTest(DialogFixture, 'dialog.body')
    automationAttributeTest(DialogFixture, 'dialog.footer')
  })

  it(tests('EmptyState'), () => {
    automationAttributeTest(EmptyStateFixture, 'empty-state')
  })

  it(tests('FormGroup'), () => {
    automationAttributeTest(FormGroupFixture, 'form-group')
  })

  it(tests('Form'), () => {
    automationAttributeTest(FormFixture, 'form')
  })

  it(tests('List'), () => {
    automationAttributeTest(ListFixture, 'list')

    // TODO: Specify location
    automationAttributeTest(ListFixture, 'list.item')
  })

  it(tests('PageHeader'), () => {
    automationAttributeTest(PageHeaderFixture, 'page-header')
  })

  it(tests('Pager'), () => {
    automationAttributeTest(PagerFixture, 'pager')
  })

  it(tests('Pagination'), () => {
    automationAttributeTest(PaginationFixture, 'pagination')
  })

  it(tests('PaginationToolbar'), () => {
    automationAttributeTest(PaginationToolbarFixture, 'pagination-toolbar')
  })

  it(tests('ResourceList'), () => {
    automationAttributeTest(ResourceListFixture.Default, 'resource-list')
  })

  it(tests('Sidebar'), () => {
    automationAttributeTest(SidebarFixture, 'sidebar')
  })

  it(tests('Stack'), () => {
    automationAttributeTest(StackFixture, 'stack')

    // TODO: Specify location
    automationAttributeTest(StackFixture, 'stack.item')
  })

  it(tests('Table'), () => {
    automationAttributeTest(TableFixture, 'table')

    // TODO: Specify location
    automationAttributeTest(TableFixture, 'table.body')
    automationAttributeTest(TableFixture, 'table.row')
  })

  it(tests('Tabs'), () => {
    automationAttributeTest(TabsFixture, 'tabs')
    automationAttributeTest(TabsFixture, 'tabs.list')
    automationAttributeTest(TabsFixture, 'tabs.list-item')
    automationAttributeTest(TabsFixture, 'tabs.link')
  })
})
