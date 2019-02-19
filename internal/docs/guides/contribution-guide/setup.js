import React from 'react'

import { Text } from '../../docs-components/typography'
import CodeBlock from '../../docs-components/code-block'
import FoldingSection from '../../docs-components/folding-section'

const Setup = () => (
  <FoldingSection page="contribution-guide" name="Setup">
    <Text>
      Clone the GitHub repository on your machine
      <CodeBlock language="shell">$ git clone https://github.com/auth0/cosmos.git</CodeBlock>
      To install all the dependencies, run
      <CodeBlock language="shell">$ yarn</CodeBlock>
      To search for the script you need, run
      <CodeBlock language="shell">$ yarn i</CodeBlock>
    </Text>
  </FoldingSection>
)

export default Setup
