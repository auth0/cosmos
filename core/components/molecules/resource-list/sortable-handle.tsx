import * as React from "react";
import { SortableHandle } from "react-sortable-hoc";

import { Tooltip } from "../../";
import Button from "../../atoms/button";
import styled from "../../styled";
import { colors, spacing } from "../../tokens";

const noop = () => {}

/**
 * Notifies handle's parent when its focus state changes
 * @param {object} props
 * @param {function} onFocus
 */
const notifyFocusStatusChange = (props, onFocus, ev) =>
  props && props.onFocusStatusChange && props.onFocusStatusChange({ onFocus }, ev)

const SortableListHandle = SortableHandle<{ onFocusStatusChange?: Function }>(
  ({ onFocusStatusChange = noop } = {}) => (
    <SortableListHandleElement>
      <Tooltip content="Re-order">
        <SortableListHandleButton
          onFocusStatusChange={onFocusStatusChange}
          appearance="link"
          icon="resize-vertical"
        />
      </Tooltip>
    </SortableListHandleElement>
  )
)

export const SortableListHandleElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: ${spacing.xsmall};
`

export const SortableListHandleButton = (props) => (
  <SortableListHandleButton.Element
    onFocus={(ev) => notifyFocusStatusChange(props, true, ev)}
    onBlur={(ev) => notifyFocusStatusChange(props, false, ev)}
    {...props}
  />
)
SortableListHandleButton.Element = styled(Button)`
  padding-left: ${spacing.xxsmall};
  padding-right: ${spacing.xxsmall};
  min-width: 0;

  &:focus {
    background-color: ${colors.base.grayLightest};
  }
`

export default SortableListHandle
