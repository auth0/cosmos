import React from 'react'
import styled from 'styled-components'
import { SortableHandle } from 'react-sortable-hoc'
import { spacing, colors } from '@auth0/cosmos-tokens'
import Tooltip from '../../atoms/tooltip'
import Button from '../../atoms/button'

const noop = () => {}

/**
 * Notifies handle's parent when its focus state changes
 * @param {object} props
 * @param {function} onFocus
 */
const notifyFocusStatusChange = (props, onFocus) =>
  props && props.onFocusStatusChange && props.onFocusStatusChange({ onFocus })

const SortableListHandle = SortableHandle(({ onFocusStatusChange = noop } = {}) => (
  <SortableListHandle.Element>
    <Tooltip content="Re-order">
      <SortableListHandle.Button
        onFocusStatusChange={onFocusStatusChange}
        appearance="link"
        icon="resize-vertical"
      />
    </Tooltip>
  </SortableListHandle.Element>
))

SortableListHandle.Element = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: ${spacing.xsmall};
`

SortableListHandle.Button = props => (
  <SortableListHandle.Button.Element
    onFocus={ev => notifyFocusStatusChange(props, true, ev)}
    onBlur={ev => notifyFocusStatusChange(props, false, ev)}
    {...props}
  />
)

SortableListHandle.Button.Element = styled(Button)`
  padding-left: ${spacing.xxsmall};
  padding-right: ${spacing.xxsmall};
  min-width: 0;

  &:focus {
    background-color: ${colors.base.grayLightest};
  }
`

export default SortableListHandle
