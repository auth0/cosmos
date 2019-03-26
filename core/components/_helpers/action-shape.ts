import * as PropTypes from 'prop-types'
import { __ICONNAMES__ } from '@auth0/cosmos/atoms/icon'

const shapeForDocs = { label: 'string', icon: 'enum', handler: 'func' }

const actionShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(__ICONNAMES__),
  handler: PropTypes.func.isRequired
})

const actionShapeWithoutRequiredHandler = PropTypes.shape({
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(__ICONNAMES__),
  handler: PropTypes.func
})

const actionShapeWithRequiredIcon = PropTypes.shape({
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(__ICONNAMES__).isRequired,
  handler: PropTypes.func.isRequired
})

export interface ActionWithIcon {
  label: string
  icon: string
  handler: Function
}

export { actionShape, actionShapeWithRequiredIcon, actionShapeWithoutRequiredHandler, shapeForDocs }
