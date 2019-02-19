import React from 'react'

import { Text, Code, List, ListItem, CodeBlock, FoldingSection } from '../../docs-components'

const Architecture = () => (
  <FoldingSection page="contribution-guide" name="Architecture">
    <Text>The repository is broken into 3 parts:</Text>
    <List>
      <ListItem>
        <Code>src</Code> or <Code>core</Code>: This contains packages that are published
        <List nested>
          <ListItem>
            <Code>tokens</Code>: configs that can be shared imported into projects
          </ListItem>
          <ListItem>
            <Code>components</Code>: React component library
          </ListItem>
          <ListItem>
            <Code>babel-preset</Code>: Optional Babel preset to use cosmos
          </ListItem>

          <Text>
            <Code>src</Code> also contains 3 other directories that are not published
          </Text>
          <ListItem>
            <Code>codemods</Code>: Codemods for cosmos (not published)
          </ListItem>
          <ListItem>
            <Code>icons</Code>: Birds eye view of components
          </ListItem>
          <ListItem>
            <Code>overview</Code>: Birds eye view of components
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        <Code>internal</Code>:
        <List nested>
          <ListItem>
            <Code>docs</Code>: Generated documentation site
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        <Code>examples</Code>: Examples of using cosmos
      </ListItem>
    </List>
  </FoldingSection>
)

export default Architecture
