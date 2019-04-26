import * as React from 'react'
import styled from '../../styled'
import Icon from '../icon'
import { spacing, fonts, colors, misc } from '../../tokens'
import Automation from '../../_helpers/automation-attribute'

export interface ITagProps {
  /** HTML ID of the component */
  id?: string
  /** The function to call when a user clicks the tag */
  onClick?: Function
  /** The function to call when a user clicks the tag's remove icon */
  onRemove?: Function
  children?: React.ReactNode
}

const Tag = (props: ITagProps) => {
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
    <Tag.Element {...Automation('tag')} {...props}>
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

const TagGroup = props => (
  <Tag.Group.Element {...Automation('tag.group')} {...props}>
    {props.children}
  </Tag.Group.Element>
)

TagGroup.Element = styled.div`
  ${Tag.Element} {
    margin-right: ${spacing.xsmall};
    &:last-child {
      margin-right: 0;
    }
  }
`

Tag.Group = TagGroup

Tag.defaultProps = {}

const StyledTag = Tag.Element

export default Tag
export { StyledTag }
