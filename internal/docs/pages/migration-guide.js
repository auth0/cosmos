import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import {
  Heading1,
  Heading2,
  Heading3,
  Subheader,
  Text,
  List,
  ListItem
} from '../docs-components/typography'

import Tag from '../docs-components/tag'
import { Code } from '@auth0/cosmos'

class MigrationGuide extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Migration guide &ndash; Cosmos" />

        <Heading1>
          Migrating to 1.0.0 <Tag text="Work in progress" />
        </Heading1>
        <Subheader>This is a work in progress to help migrate to 1.0.0</Subheader>

        <Heading2>API Changes</Heading2>

        <Heading3>Alert</Heading3>
        <List>
          <ListItem>
            <Text>
              Replace <Code>text:string</Code> with <Code>children:string</Code>
            </Text>
          </ListItem>
        </List>

        <Heading3>TextInput</Heading3>
        <List>
          <ListItem>
            <Text>
              Replace <Code>error:string</Code> with <Code>hasError:boolean</Code>
            </Text>
          </ListItem>
        </List>

        <br />
        <br />
        <Heading2>Layout changes</Heading2>
        <Text>Coming soon - margins</Text>
      </div>
    )
  }
}

export default MigrationGuide
