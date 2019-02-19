import React from 'react'

import { Text, Link, Pre } from '../../docs-components/typography'
import CodeBlock from '../../docs-components/code-block'
import FoldingSection from '../../docs-components/folding-section'
import { Code } from '@auth0/cosmos'

const WithStyleguide = () => (
  <FoldingSection page="usage" name="Usage with styleguide">
    <Text>
      Cosmos adds a set of resets the same resets to your application, if you are already using the
      legacy styleguide, you can disable the resets from Cosmos by setting an environment variable
      in your <Code>webpack.config.js</Code>
    </Text>
    <CodeBlock language="javascript">
      {`
{
  plugins: [
    new webpack.EnvironmentPlugin({
      COSMOS_DISABLE_RESETS: true
    })
  ]
}
      `}
    </CodeBlock>
  </FoldingSection>
)

export default WithStyleguide
