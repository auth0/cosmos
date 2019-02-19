import React from 'react'

import { Text, Link, Pre } from '../../docs-components/typography'
import CodeBlock from '../../docs-components/code-block'
import FoldingSection from '../../docs-components/folding-section'
import { Code } from '@auth0/cosmos'

const UsingComponents = () => (
  <FoldingSection page="usage" name="Using components">
    <Text>Import components that you want from the library</Text>
    <CodeBlock language="javascript">{`import {Button} from '@auth0/cosmos'`}</CodeBlock>
    <Text>and use them along with you React components:</Text>
    <CodeBlock>
      {`
const Actions = () => (
  <div>
    <Button appearance="primary" onClick={this.save}>Save changes</Button>
    <Button onClick={this.clear}>Clear</Button>
  </div>
)
    `}
    </CodeBlock>

    <Text>
      To learn more about the components and the <Code>props</Code> they offer, pick a component
      from the sidebar on the left.
    </Text>
    <Text>
      You can also look at example code from our Manage Clients{' '}
      <Link href="https://github.com/auth0/cosmos/tree/master/src/manage">
        proof of concept repo.
      </Link>
    </Text>
  </FoldingSection>
)

export default UsingComponents
