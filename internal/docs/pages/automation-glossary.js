import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Table, Paragraph, Code } from '@auth0/cosmos'

import { Heading1, Heading2 } from '../docs-components/typography'

const Container = styled.div``

class AutomationGlossary extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Automation Glossary &mdash; Cosmos" />
        <Container>
          <Heading1>Automation Glossary</Heading1>
          <Paragraph>
            The goal of the automation glossary is to help you to write automation tests when
            writing them with tools like Webdriver.io or Chrome Puppeteer by providing{' '}
            <Code>data-cosmos-key</Code>
            attribute.
          </Paragraph>

          <Table
            items={[
              {
                component: 'Alert',
                selectors: [
                  '$(\'div[data-cosmos-key="alert"]\')',
                  '$(\'div[data-cosmos-key="alert"] a[data-cosmos-key="alert.dismiss"\')'
                ]
              },
              {
                component: 'Avatar',
                selectors: ['$(\'div[data-cosmos-key="avatar"]\')']
              },
              {
                component: 'Breadcrumb',
                selectors: [
                  '$(\'div[data-cosmos-key="breadcrumb"]\')',
                  '$(\'div[data-cosmos-key="breadcrumb"] a[data-cosmos-key="link"]\')'
                ]
              },
              {
                component: 'Button',
                selectors: ['$(\'button[data-cosmos-key="button"]\')']
              },
              {
                component: 'Checkbox',
                selectors: [
                  '$(\'label[data-cosmos-key="checkbox"] input\')',
                  '$(\'div[data-cosmos-key="checkbox.group"]\')'
                ]
              },
              {
                component: 'Code',
                selectors: ['$(\'button[data-cosmos-key="code"]\')']
              },
              {
                component: 'Heading',
                selectors: ['$(\'button[data-cosmos-key="heading"]\')']
              },
              {
                component: 'Icon',
                selectors: ['$(\'button[data-cosmos-key="icon"]\')']
              },
              {
                component: 'Image',
                selectors: ['$(\'button[data-cosmos-key="image"]\')']
              },
              {
                component: 'Label',
                selectors: ['$(\'button[data-cosmos-key="label"]\')']
              },
              {
                component: 'Link',
                selectors: ['$(\'button[data-cosmos-key="link"]\')']
              },
              {
                component: 'Logo',
                selectors: ['$(\'button[data-cosmos-key="logo"]\')']
              },
              {
                component: 'Radio',
                selectors: [
                  '$(\'div[data-cosmos-key="radio"]\')',
                  '$(\'div[data-cosmos-key="radio"] input[data-cosmos-key="radio.option"\')'
                ]
              },
              {
                component: 'Select',
                selectors: [
                  '$(\'select[data-cosmos-key="select"]\')',
                  '$(\'select[data-cosmos-key="select"] option[data-cosmos-key="select.option"]\')'
                ]
              },
              {
                component: 'Switch',
                selectors: ['$(\'span[data-cosmos-key="switch"] input\')']
              },
              {
                component: 'Tag',
                selectors: [
                  '$(\'span[data-cosmos-key="tag"]\')',
                  '$(\'span[data-cosmos-key="tag"] a[data-cosmos-key="tag.remove"]\')',
                  '$(\'div[data-cosmos-key="tag.group"]\')'
                ]
              },
              {
                component: 'TextInput',
                selectors: ['$(\'input[data-cosmos-key="text-input"]\')']
              },
              {
                component: 'TextArea',
                selectors: ['$(\'textarea[data-cosmos-key="text-area"]\')']
              },
              {
                component: 'ButtonGroup',
                selectors: ['$(\'div[data-cosmos-key="button-group"]\')']
              },
              {
                component: 'Dialog',
                selectors: [
                  '$(\'div[data-cosmos-key="dialog"]\')',
                  '$(\'div[data-cosmos-key="dialog"] div[data-cosmos-key="dialog.title"]\')',
                  '$(\'div[data-cosmos-key="dialog"] div[data-cosmos-key="dialog.body"]\')',
                  '$(\'div[data-cosmos-key="dialog"] div[data-cosmos-key="dialog.footer"]\')'
                ]
              },
              {
                component: 'EmptyState',
                selectors: ['$(\'div[data-cosmos-key="empty-state"]\')']
              },
              {
                component: 'FormGroup',
                selectors: ['$(\'div[data-cosmos-key="form-group"]\')']
              },
              {
                component: 'Form',
                selectors: [
                  '$(\'form[data-cosmos-key="form"]\')',
                  '$(\'form[data-cosmos-key="form"] div[data-cosmos-key="form.field"]\')',
                  '$(\'form[data-cosmos-key="form"] fieldset[data-cosmos-key="form.fieldset"]\')'
                ]
              },
              {
                component: 'List',
                selectors: [
                  '$(\'div[data-cosmos-key="list"]\')',
                  '$(\'div[data-cosmos-key="list"] div[data-cosmos-key="list.item"]\')'
                ]
              },
              {
                component: 'PageHeader',
                selectors: ['$(\'div[data-cosmos-key="page-header"]\')']
              },
              {
                component: 'Pager',
                selectors: ['$(\'div[data-cosmos-key="pager"]\')']
              },
              {
                component: 'PaginationToolbar',
                selectors: ['$(\'div[data-cosmos-key="pagination-toolbar"]\')']
              },
              {
                component: 'Pagination',
                selectors: ['$(\'div[data-cosmos-key="pagination"]\')']
              },
              {
                component: 'ResourceList',
                selectors: [
                  '$(\'ul[data-cosmos-key="resource-list"]\')',
                  '$(\'ul[data-cosmos-key="resource-list"] li[data-cosmos-key="resource-list.item"]\')'
                ]
              },
              {
                component: 'Sidebar',
                selectors: ['$(\'div[data-cosmos-key="sidebar"]\')']
              },
              {
                component: 'Stack',
                selectors: [
                  '$(\'div[data-cosmos-key="stack"]\')',
                  '$(\'div[data-cosmos-key="stack"] div[data-cosmos-key="stack.item"]\')'
                ]
              },
              {
                component: 'Table',
                selectors: [
                  '$(\'table[data-cosmos-key="table"]\')',
                  '$(\'table[data-cosmos-key="table"] thead[data-cosmos-key="table.header"]\')',
                  '$(\'table[data-cosmos-key="table"] tbody[data-cosmos-key="table.body"]\')',
                  '$(\'table[data-cosmos-key="table"] tbody[data-cosmos-key="table.body"] tr[data-cosmos-key="table.row"]\')'
                ]
              },
              {
                component: 'Tabs',
                selectors: [
                  '$(\'div[data-cosmos-key="tabs"]\')',
                  '$(\'div[data-cosmos-key="tabs"] a[data-cosmos-key="tabs.item"]\')'
                ]
              }
            ]}
          >
            <Table.Column field="component" title="Component" width="75px" />
            <Table.Column field="selectors" title="Selectors">
              {item => (
                <ul>
                  {item.selectors.map((selector, index) => (
                    <li key={index}>
                      <Code>{selector}</Code>
                    </li>
                  ))}
                </ul>
              )}
            </Table.Column>
          </Table>
        </Container>
      </div>
    )
  }
}

export default AutomationGlossary
// $('div[data-cosmos-key="alert"] a[data-cosmos-key="alert.dismiss"')
