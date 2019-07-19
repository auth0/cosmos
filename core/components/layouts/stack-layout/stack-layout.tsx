import * as React from "react";

import Automation from "../../_helpers/automation-attribute";
import applyMarginReset from "../../_helpers/layout-margin-reset";
import transformChildren from "../../_helpers/transform-layout-children";
import styled from "../../styled";
import { spacing } from "../../tokens";

const gutterOptions = {
  none: 0,
  xsmall: spacing.xsmall, // 8
  small: spacing.small, // 16
  medium: spacing.medium, // 24
  large: spacing.xlarge // 40
}

const alignmentOptions = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start'
}

const distributionOptions = {
  spaceBetween: 'space-between',
  center: 'center',
  start: 'flex-start',
  end: 'flex-end'
}

const resolveSpace = (props, child, index) => {
  if (!child) {
    return null
  }
  if (!props.space) {
    return child
  }

  return React.cloneElement(child, { space: props.space[index] })
}

export interface IStackLayoutProps {
  /** Resets the margins of the component within the layout to generate consistent spaces. */
  disableMarginReset?: boolean
  /** Regulates the size of the gutter between flexed items */
  gutter?: 'none' | 'xsmall' | 'small' | 'medium' | 'large'
  /** Vertically align the components within the stack. applyes to `align-items` */
  alignment?: 'center' | 'start' | 'end'
  /** Horizontally distribute the components within the stack. applyes to `justify-content` */
  distribution?: 'spaceBetween' | 'center' | 'start' | 'end'
  /** Flex wrap */
  wrap?: 'true' | 'false'
  /** Defines how much space each item within the stack container will take in relation to the others. For example and array of {[1, 2, 'none']} will make the third item follow the with of its content, and the second item take double the remind space than the first one. */
  space?: Array<number | 'none'>
  children?: React.ReactNode
}

const StackLayout = (props: IStackLayoutProps) => (
  <StackLayout.Element {...props} {...Automation('stack-layout')}>
    {React.Children.map(
      transformChildren(props, StackLayout.Item, 'stack-layout.item'),
      resolveSpace.bind(this, props)
    )}
  </StackLayout.Element>
)

StackLayout.Element = styled.div`
  display: flex;
  align-items: ${(props) => alignmentOptions[props.alignment]};
  justify-content: ${(props) => distributionOptions[props.distribution]};

  flex-wrap: ${(props) => (props.wrap ? 'nowrap' : 'wrap')};
  > *:not(:last-child) {
    margin-right: ${(props) => gutterOptions[props.gutter]};
  }

  & > *:empty {
    display: none;
  }

  ${applyMarginReset()};
`

StackLayout.Item = styled.div`
  flex: ${(props) => props.space};

  /* Avoids any component to be larger than it's parent */
  max-width: 100%;
`

function spaceItemProp(props, propName) {
  const throwError = () => {
    return new Error('Space value must be a number between 1 and 10 or "none"')
  }

  const value = props[propName]

  if (typeof value === 'number' && value < 1 && value > 10) {
    return throwError()
  }
  if (typeof value === 'string' && value !== 'none') {
    return throwError()
  }

  return undefined
}

StackLayout.defaultProps = {
  gutter: 'medium',
  alignment: 'center',
  distribution: 'start'
}

export default StackLayout
