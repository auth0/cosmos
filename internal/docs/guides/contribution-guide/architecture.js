import React from 'react'

import { Text, Code, List, CodeBlock, FoldingSection } from '../../docs-components'

const Architecture = () => (
  <FoldingSection page="contribution-guide" name="Architecture">
    <Text>The repository is broken into 3 parts:</Text>
    <List>
      <List.Item>
        <Code>src</Code> or <Code>core</Code>: This contains packages that are published
        <List nested>
          <List.Item>
            <Code>tokens</Code>: configs that can be shared imported into projects
          </List.Item>
          <List.Item>
            <Code>components</Code>: React component library
          </List.Item>
          <List.Item>
            <Code>babel-preset</Code>: Optional Babel preset to use cosmos
          </List.Item>

          <Text>
            <Code>src</Code> also contains 3 other directories that are not published
          </Text>
          <List.Item>
            <Code>codemods</Code>: Codemods for cosmos (not published)
          </List.Item>
          <List.Item>
            <Code>icons</Code>: Birds eye view of components
          </List.Item>
          <List.Item>
            <Code>overview</Code>: Birds eye view of components
          </List.Item>
        </List>
      </List.Item>
      <List.Item>
        <Code>internal</Code>:
        <List nested>
          <List.Item>
            <Code>docs</Code>: Generated documentation site
          </List.Item>
        </List>
      </List.Item>
      <List.Item>
        <Code>examples</Code>: Examples of using cosmos
      </List.Item>
    </List>
  </FoldingSection>
)

export default Architecture
