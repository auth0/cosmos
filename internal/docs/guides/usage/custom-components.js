import React from 'react'

import { Text, Link, CodeBlock, FoldingSection, Code } from '../../docs-components'

const CustomComponents = () => (
  <FoldingSection page="usage" name="Building your own components">
    <Text>
      Cosmos uses{' '}
      <Link target="_blank" href="https://www.styled-components.com">
        styled-components
      </Link>{' '}
      under the hood. We recommend using it to create presentational components.
    </Text>
    <Text>You can import it from cosmos to make sure you use the same version:</Text>
    <CodeBlock language="javascript">{`import styled from '@auth0/cosmos/styled'`}</CodeBlock>
    <Text>and use them to create new components:</Text>
    <CodeBlock language="javascript">
      {`
import styled from '@auth0/cosmos/styled'

const Wrapper = styled.div\`
  background-color: grey;
\`

const Actions = () => (
  <Wrapper>
    <Button appearance="primary" onClick={this.save}>Save changes</Button>
    <Button onClick={this.clear}>Clear</Button>
  </Wrapper>
)
      `}
    </CodeBlock>
    <Text>
      <Code>styled-components</Code> has very good{' '}
      <Link target="_blank" href="https://www.styled-components.com">
        documentation
      </Link>{' '}
      where you can learn how to use it.
    </Text>
  </FoldingSection>
)

export default CustomComponents
