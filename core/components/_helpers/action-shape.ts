import * as PropTypes from 'prop-types'
import { __ICONNAMES__ } from '../atoms/icon'

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

export interface Action {
  label: string
  handler: Function
  icon?: string
}

export interface ActionWithIcon extends Action {
  icon: string
}

// Extending Partial<Action> (label?, icon?, handler?) and enforcing `label`
// to be present results in an interface with (label, icon?, handler?).
export interface ActionWithoutHandler extends Partial<Action> {
  label: string
}

export { actionShape, actionShapeWithRequiredIcon, actionShapeWithoutRequiredHandler, shapeForDocs }
