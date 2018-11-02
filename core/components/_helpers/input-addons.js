import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { misc, spacing } from '@auth0/cosmos-tokens'

/*
  Notes:

  1. Stress test append with a lot of text
  2. Does React even compare components for componentDidUpdate
*/

const Wrapper = styled.span`
  position: relative;
  display: flex;
  align-items: center;

  input {
    padding-right: ${props => props.widthOfAppend};
  }
`

const Append = styled.span`
  position: absolute;
  right: 0;
  padding: 0 ${spacing.small};
  height: 100%;
  display: flex;
  align-items: center;

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: -20px;
    top: 2px;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    width: 20px;
    height: calc(100% - 4px);
  }
`

const add = Input => {
  class EnhancedInput extends React.Component {
    state = { widthOfAppend: 200 }
    appendRef = React.createRef()

    setInputWidth = () => {
      if (this.props.append) {
        const appendElement = ReactDOM.findDOMNode(this.appendRef.current)
        const widthOfAppend = appendElement.offsetWidth

        this.setState({ widthOfAppend })
      }
    }

    componentDidMount() {
      this.setInputWidth()
    }

    componentDidUpdate(prevProps) {
      if (prevProps.append !== this.props.append) {
        this.setInputWidth()
      }
    }

    render() {
      const appendComponent = this.props.append

      return (
        <Wrapper widthOfAppend={this.state.widthOfAppend}>
          <Input {...this.props} />
          {this.props.append ? (
            <Append ref={this.appendRef} size={this.props.size}>
              {appendComponent}
            </Append>
          ) : null}
        </Wrapper>
      )
    }
  }

  EnhancedInput.propTypes = {
    ...Input.propTypes,
    append: PropTypes.node,
    prepend: PropTypes.node
  }

  EnhancedInput.defaultProps = {
    ...Input.defaultProps
  }

  return EnhancedInput
}

export default add
