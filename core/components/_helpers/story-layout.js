import React from 'react'
import { Code } from '@auth0/cosmos'
import { Example } from './story-helpers'
const ComponentWithContent = () => <p>Something</p>
const ComponentResolvingToNull = () => null

export const layoutSpacingStoryTest = (LayoutComponent, spacing, otherProps = {}) => (
  <Example>
    {spacing && (
      <React.Fragment>
        <Code>Displaying layout with spacing `{spacing}`</Code> <hr />
      </React.Fragment>
    )}

    <LayoutComponent spacing={spacing} {...otherProps}>
      <ComponentWithContent />
      <ComponentResolvingToNull />
      <ComponentWithContent />
    </LayoutComponent>
  </Example>
)
