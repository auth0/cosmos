import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from './tooltip'

class ActionTooltip extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tooltipContent: null }
    this.timer = null
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
   * @param {string} resetDelay - Time in milliseconds to reset back to default text.
   */
  setTooltipContent(newContent, { resetDelay = 3000 } = {}) {
    const content = this.preprocessContent()
    this.setState({ tooltipContent: newContent })

    if (this.timer) {
      clearTimeout(this.timer)
    }

    this.timer = setTimeout(() => this.setState({ tooltipContent: content.default }), resetDelay)
  }

  /**
   * Takes the `onClick` handler of the children and wraps it with the tooltip content
   * listener. Which sets the correct string on each step of the action run.
   * Also sets the child button appearance to link, since this is going to be used
   * from a text input / text area action.
   */
  processAction() {
    const { children: button, loadingTimeout } = this.props
    const content = this.preprocessContent()

    const newHandler = event => {
      if (content.loading) {
        this.setTooltipContent(content.loading, { resetDelay: loadingTimeout || 5000 })
      }

      Promise.resolve(button.props.onClick(event))
        .then(result => {
          this.setTooltipContent(content.success)
        })
        .catch(() => this.setTooltipContent(content.error || 'Something did not work'))
    }

    return React.cloneElement(button, { onClick: newHandler, appearance: 'link' })
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

ActionTooltip.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      default: PropTypes.string.isRequired,
      loading: PropTypes.string,
      success: PropTypes.string,
      error: PropTypes.string
    })
  ])
}

export default ActionTooltip
