import * as React from 'react'
import { Code } from '../'
import { Example } from './story-helpers'
import StyledPlaceholder from './story-layout-placeholder'

const ComponentWithContent = () => <StyledPlaceholder />
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
