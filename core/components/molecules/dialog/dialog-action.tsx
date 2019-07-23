import { ButtonAppearance } from '../../atoms/button'

class DialogAction {
  public label: string
  public handler: Function
  public appearance: ButtonAppearance

  constructor(label, handler, appearance: ButtonAppearance = 'default') {
    this.label = label
    this.handler = handler
    this.appearance = appearance
  }
}

export default DialogAction
