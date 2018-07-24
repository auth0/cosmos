import PropTypes from 'prop-types'
import { __ICONNAMES__ } from '@auth0/cosmos/atoms/icon'

const shapeForDocs = { label: 'string', icon: 'enum', handler: 'func' }

const actionShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(__ICONNAMES__),
  handler: PropTypes.func.isRequired,
  props: PropTypes.object
})

const actionShapeWithRequiredIcon = PropTypes.shape({
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(__ICONNAMES__).isRequired,
  handler: PropTypes.func.isRequired,
  props: PropTypes.object
})

export { actionShape, actionShapeWithRequiredIcon, shapeForDocs }
