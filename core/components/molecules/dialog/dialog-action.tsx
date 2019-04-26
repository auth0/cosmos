import { ButtonAppearance } from '../../atoms/button'

class DialogAction {
  label: string
  handler: Function
  appearance: ButtonAppearance

  constructor(label, handler, appearance: ButtonAppearance = 'default') {
    this.label = label
    this.handler = handler
    this.appearance = appearance
  }
}

export default DialogAction
