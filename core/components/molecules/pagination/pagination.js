import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { spacing, colors, misc } from '@auth0/cosmos-tokens'
import Button from '../../atoms/button'
import Icon from '../../atoms/icon'

import {
  getPaginationSlice,
  changePageIfAppropiate,
  pagesFromItems
} from '../../_helpers/pagination'

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
`
const StyledPaginationItem = styled(Button)`
  margin-right: ${spacing.small};
  min-width: ${spacing.medium};
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  ${props => props.left && `padding-left: ${spacing.xlarge};`} 
  ${props => props.right && `padding-right: ${spacing.xlarge};`} 

  ${Icon.Element} {
    position: absolute;
    margin: 0;
    padding-top: 10px;
    height: calc(${misc.button.compressed.height} - 2px);
    width: 20px;
    
    svg {
      width: 15px;
      height: 15px;
    }

    ${props =>
      props.left &&
      `
      left: ${spacing.xxsmall};
      padding-right: ${spacing.xxsmall};
      border-right: 1px solid ${colors.base.grayLight}
    `};
    ${props =>
      props.right &&
      `
      right: calc(${spacing.xxsmall});
      padding-left: ${spacing.xxsmall};
      border-left: 1px solid ${colors.base.grayLight}
    `};
  }
`

const renderPaginationItem = ({
  toPage,
  content,
  appearance,
  items,
  perPage,
  onPageChanged,
  left = false,
  right = false
}) => (
  <StyledPaginationItem
    left={left}
    right={right}
    appearance={appearance}
    size="compressed"
    onClick={() => changePageIfAppropiate(toPage, items, perPage, onPageChanged)}
  >
    {content}
  </StyledPaginationItem>

)

const handlePaginationButtonClick = (page, items, perPage, onPageChanged) => {
  if (page.clickable === false) return

  return changePageIfAppropiate(page.label, items, perPage, onPageChanged)
}


const firstPageButton = (
  <span>
    <Icon name="chevron-left" /> First
  </span>
)
const lastPageButton = (
  <span>
    Last <Icon name="chevron-right" />
  </span>
)

const Pagination = ({ page, perPage, items, appearance, onPageChanged }) => (
  <StyledPagination>
    {renderPaginationItem({
      toPage: 1,
      content: firstPageButton,
      appearance,
      items,
      perPage,
      onPageChanged,
      left: true
    })}

    {getPaginationSlice(page, items, perPage).map(page => (
      <StyledPaginationItem
        key={page.label}
        appearance={appearance}
        selected={page.selected}
        size="compressed"
        onClick={() => handlePaginationButtonClick(page, items, perPage, onPageChanged)}
      >
        {page.label}
      </StyledPaginationItem>
    ))}

    {renderPaginationItem({
      toPage: pagesFromItems(items, perPage),
      content: lastPageButton,
      appearance,
      items,
      perPage,
      onPageChanged,
      right: true
    })}
  </StyledPagination>
)

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func
}

export default Pagination
