import React from 'react'

import { Text, Code, List, FoldingSection } from '../../docs-components'

const Architecture = () => (
  <FoldingSection page="contribution-guide" name="Architecture">
    <Text>The repository is broken into 3 parts:</Text>
    <List>
      <List.Item>
        <Code>core</Code>: This contains packages that are published
        <List nested>
          <List.Item>
            <Code>components</Code>: React component library
            <List nested>
              <List.Item>
                <Code>tokens</Code>: root design values that can be shared/imported into projects
              </List.Item>
            </List>
          </List.Item>
          <List.Item>
            <Code>babel-preset</Code>: Optional Babel preset to use cosmos
          </List.Item>
          <List.Item>
            <Code>icons</Code>: Raw SVG files for our icons and misc configuration regarding their
            processing.
          </List.Item>
        </List>
      </List.Item>
      <List.Item>
        <Code>internal</Code>:
        <List nested>
          <List.Item>
            <Code>docs</Code>: Source code for this documentation website.
          </List.Item>
        </List>
      </List.Item>
      <List.Item>
        <Code>examples</Code>: Example applications that use cosmos.
      </List.Item>
    </List>
  </FoldingSection>
)

export default Architecture
