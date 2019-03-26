import React from 'react'

import { Text, Link, Pre, CodeBlock, FoldingSection, Code } from '../../docs-components'

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
