import PropTypes from 'prop-types'
import { __ICONNAMES__ } from '@auth0/cosmos/atoms/icon'

const actionShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(__ICONNAMES__),
  handler: PropTypes.func.isRequired
})

const actionShapeWithRequiredIcon = PropTypes.shape({
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(__ICONNAMES__).isRequired,
  handler: PropTypes.func.isRequired
})

export { actionShape, actionShapeWithRequiredIcon }
