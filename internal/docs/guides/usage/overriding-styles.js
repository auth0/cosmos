import React from 'react'

import { Text, Link, CodeBlock, FoldingSection, Code } from '../../docs-components'

const OverridingStyles = () => (
  <FoldingSection page="usage" name="Overriding styles" className="hidden">
    <Text>Placeholder.</Text>

    <Text>You can write long form guides here.</Text>

    <Text>You can even add code samples:</Text>

    <CodeBlock language="javascript">
      {`
import {Button} from '@auth0/cosmos'

const Actions = () => (
  <Button appearance="primary" onClick={this.save}>Save changes</Button>
  <Button onClick={this.clear}>Clear</Button>
)
      `}
    </CodeBlock>
  </FoldingSection>
)

export default OverridingStyles
