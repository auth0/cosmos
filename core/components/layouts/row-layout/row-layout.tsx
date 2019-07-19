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

export interface IRowLayoutProps {
  /** Regulates the size of the gutter between rows */
  gutter?: 'none' | 'xsmall' | 'small' | 'medium' | 'large'
  /** Resets the margins of the component within the layout to generate consistent spaces. */
  disableMarginReset?: boolean
  children?: React.ReactNode
}

const RowLayout = (props: IRowLayoutProps) => (
  <RowLayout.Element {...Automation('row-layout')} {...props}>
    {transformChildren(props, RowLayout.Item, 'row-layout.item')}
  </RowLayout.Element>
)

RowLayout.Element = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${(props) => gutterOptions[props.gutter]};

  & > *:empty {
    display: none;
  }

  ${applyMarginReset()};
`

RowLayout.Item = styled.div``

RowLayout.defaultProps = {
  gutter: 'medium'
}

export default RowLayout
