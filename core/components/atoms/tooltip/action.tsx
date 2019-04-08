import * as React from 'react'
import Tooltip from './tooltip'

export interface IActionTooltipProps {
  content: string | { default: string; loading?: string; success?: string; error?: string }
  resetDelay: number
  children?: React.ReactNode
}

interface IActionTooltipState {
  tooltipContent?: string | null
  taskIsRunning: boolean
}

class ActionTooltip extends React.Component<IActionTooltipProps, IActionTooltipState> {
  static defaultProps = {
    resetDelay: 5000
  }

  timer?: number

  constructor(props) {
    super(props)
    this.state = { tooltipContent: null, taskIsRunning: false }
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  /**
   * Resets the tooltip content timer if appropiate.
   */
  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }

  /**
   * Resets the tooltip content timer and sets
   * its content to the default state.
   */
  resetState() {
    if (!this.state.taskIsRunning) {
      this.clearTimer()
      this.setState({ tooltipContent: null })
    }
  }

  /**
   * If you provide a string as a content prop,
   * this function will transform it to a
   * `{ default: string }` shape.
   */
  preprocessContent() {
    const rawContent = this.props.content
    return typeof rawContent === 'string' ? { default: rawContent } : rawContent
  }

  /**
   * Sets the tooltip inner text to `newContent`
   * and resets the content to `props.content.default` after `resetDelay`.
   * @param {string} newContent - Text to be set in the tooltip
   * @param {object} additionalState - Any additional data you want to set in the state.
   */
  setTooltipContent(newContent, additionalState = {}) {
    const content = this.preprocessContent()
    this.setState({ tooltipContent: newContent, ...additionalState })

    this.clearTimer()

    if (newContent === content.default) {
      return
    }

    const { resetDelay } = this.props

    this.timer = window.setTimeout(
      () => this.setState({ tooltipContent: content.default }),
      resetDelay
    )
  }

  /**
   * Takes the `onClick` handler of the children and wraps it with the tooltip content
   * listener. Which sets the correct string on each step of the action run.
   * Also sets the child button appearance to link, since this is going to be used
   * from a text input / text area action.
   */
  processAction() {
    const { children, resetDelay } = this.props
    const button = children as JSX.Element
    const content = this.preprocessContent()
    if (!button) return null

    const newHandler = event => {
      this.resetState()
      if (content.loading) {
        this.setTooltipContent(content.loading, { taskIsRunning: true })
      } else {
        this.setState({ taskIsRunning: true })
      }

      Promise.resolve(button.props.onClick(event))
        .then(result =>
          this.setTooltipContent(content.success || content.default, { taskIsRunning: false })
        )
        .catch(() =>
          this.setTooltipContent(content.error || 'Something did not work', {
            taskIsRunning: false
          })
        )
    }

    const onMouseLeave = ev => {
      if (button.props.onMouseLeave) {
        button.props.onMouseLeave(ev)
      }

      this.resetState()
    }

    return React.cloneElement(button, {
      onClick: newHandler,
      appearance: 'link',
      onMouseLeave
    })
  }

  render() {
    const { tooltipContent } = this.state
    const content = this.preprocessContent()
    const children = this.processAction()

    return (
      <Tooltip content={tooltipContent ? tooltipContent : content.default} children={children} />
    )
  }
}

export default ActionTooltip
