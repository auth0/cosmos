import React from 'react'

import { Text, Link } from '../../docs-components/typography'
import CodeBlock from '../../docs-components/code-block'
import FoldingSection from '../../docs-components/folding-section'
import { Code } from '@auth0/cosmos'

const Installation = () => (
  <FoldingSection page="usage" name="Installation">
    <Text>
      To add <Code>cosmos</Code> to your react application, run
      <CodeBlock language="shell">$ yarn add @auth0/cosmos</CodeBlock>
      If you prefer npm, run this command instead:
      <CodeBlock language="shell">$ npm install --save @auth0/cosmos</CodeBlock>
      That is all you need to do, you are now ready to use it in your app, no build step needed.
    </Text>

    <Text>
      Cosmos assumes you have licensed fonts available on your app: Fakt-web and Roboto Mono. Auth0
      employees can grab these from the{' '}
      <Link href="https://github.com/auth0/cosmos-fonts">cosmos-fonts repo</Link>
    </Text>
  </FoldingSection>
)

export default Installation
