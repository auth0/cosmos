import React from 'react'

import { Text, Link } from '../../docs-components/typography'
import CodeBlock from '../../docs-components/code-block'
import FoldingSection from '../../docs-components/folding-section'
import { Code } from '@auth0/cosmos'

const Layouts = () => (
  <FoldingSection page="usage" name="Layouts" className="hidden">
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

export default Layouts
