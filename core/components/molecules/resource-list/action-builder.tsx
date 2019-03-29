import * as React from 'react'
import Button, { IButtonProps } from '../../atoms/button'

/**
 * Builds a Button from its props
 * @param {Button.Props} props
 */
export const buttonBuilder = props => <Button {...props} />

/**
 * Returns a set of Button props from an action object
 * @param {ResourceList.Item.Action} action
 * @param {ResourceList.Item.Props} item
 */
export const actionToButtonProps = (
  { icon, handler, label, disabled, href, target },
  item
): Partial<IButtonProps> => ({
  icon,
  onClick: handler ? evt => handler(evt, item) : null,
  label,
  disabled,
  href,
  target
})
