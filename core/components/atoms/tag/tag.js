import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '../icon'
import { spacing, fonts, colors, misc } from '../../tokens'

const StyledTag = styled.span`
  display: inline-block;
  font-size: ${fonts.size.small};
  color: ${colors.tag.text};
  line-height: 1;
  padding: ${spacing.xxsmall} ${spacing.xsmall};
  background: ${colors.tag.background};
  border: 1px solid ${colors.tag.border};
  border-radius: ${misc.radius};
  cursor: ${props => (props.onClick ? 'pointer' : 'inherit')};

  ${Icon.Element} {
    cursor: pointer;
    stroke: ${colors.tag.text};
    margin-left: ${spacing.xsmall};
  }
`

const TagGroup = styled.div`
  ${StyledTag} {
    margin-right: ${spacing.xsmall};
    &:last-child {
      margin-right: 0;
    }
  }
`

const Tag = props => {
  let icon

  if (props.onRemove) {
    const handleRemove = evt => {
      evt.stopPropagation()
      props.onRemove(evt)
    }
    icon = (
      <a onClick={handleRemove}>
        <Icon name="close" size={9} />
      </a>
    )
  }

  return (
    <StyledTag onClick={props.onClick}>
      {props.children}
      {icon}
    </StyledTag>
  )
}

Tag.Group = TagGroup

Tag.propTypes = {
  /** The function to call when a user clicks the tag */
  onClick: PropTypes.func,
  /** The function to call when a user clicks the tag's remove icon */
  onRemove: PropTypes.func
}

Tag.defaultProps = {}

export default Tag
export { StyledTag }
