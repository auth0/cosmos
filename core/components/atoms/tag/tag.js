import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'
import Icon from '../icon'
import { spacing, fonts, colors, misc } from '@auth0/cosmos-tokens'
import Automation from '../../_helpers/automation-attribute'

const Tag = props => {
  let icon

  if (props.onRemove) {
    const handleRemove = evt => {
      evt.stopPropagation()
      props.onRemove(evt)
    }
    icon = (
      <a onClick={handleRemove} {...Automation('tag.remove')}>
        <Icon name="close" size={9} />
      </a>
    )
  }

  return (
    <Tag.Element onClick={props.onClick} {...Automation('tag')}>
      {props.children}
      {icon}
    </Tag.Element>
  )
}

Tag.Element = styled.span`
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

Tag.Group = ({ children }) => (
  <Tag.Group.Element {...Automation('tag.group')}>{children}</Tag.Group.Element>
)

Tag.Group.Element = styled.div`
  ${Tag.Element} {
    margin-right: ${spacing.xsmall};
    &:last-child {
      margin-right: 0;
    }
  }
`

Tag.propTypes = {
  /** The function to call when a user clicks the tag */
  onClick: PropTypes.func,
  /** The function to call when a user clicks the tag's remove icon */
  onRemove: PropTypes.func
}

Tag.defaultProps = {}

const StyledTag = Tag.Element

export default Tag
export { StyledTag }
