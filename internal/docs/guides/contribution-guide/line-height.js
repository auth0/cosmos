import React from 'react'

import { FoldingSection, Text, Link, CodeBlock, Code } from '../../docs-components'

const LineHeight = () => (
  <FoldingSection page="contribution-guide" name="Line Height Strategy">
    <Text>
      The <Code>line-height</Code> used in{' '}
      <Link href="https://styleguide.auth0.com">styleguide</Link> and cosmos are different.
      Styleguide uses <Code>2</Code> whereas cosmos uses <Code>1.6</Code> for it's elements.
    </Text>
    <Text>
      To make sure cosmos does not override local components of the application, we need to scope
      these to cosmos components.
    </Text>
    <Text>
      It's important to note that all elements should not have a line height of <Code>1.6</Code>.
      elements inside a container/wrapper element should inherit their parent's line height.
    </Text>
    <Text>Example:</Text>
    <CodeBlock language="html">
      {`
<p>
<span>this is a child element</span>
<span>that should inherit the paragraph's line height</span>
</p>
    `}
    </CodeBlock>
    <Text>
      You can import `containerStyles` into container/wrapper components
      <CodeBlock language="javascript">
        {`
import containerStyles from '@auth0/cosmos/_helpers/container-styles'
const Paragraph = styled.p\`
\${containerStyles};
color: \${colors.text};
\`
      `}
      </CodeBlock>
    </Text>
  </FoldingSection>
)

export default LineHeight
