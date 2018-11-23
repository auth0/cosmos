import Button from '../../atoms/button'

export const buttonBuilder = props => <Button {...props} />

export const actionToButtonProps = ({ icon, handler, label, disabled, href, target, key }) => ({
  icon,
  onClick: handler ? callHandler(handler) : null,
  label,
  disabled,
  href,
  target,
  key
})
