import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Button from '../../atoms/button'
import {
  getPaginationSlice,
  changePageIfAppropiate,
  pagesFromItems
} from '../../_helpers/pagination'

const defaultPaginationAppearance = 'link'

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
`
const StyledPaginationItem = styled(Button)`
  margin-right: 3px;

  &:last-child {
    margin-right: 0;
  }
`

const PaginationItem = props => (
  <StyledPaginationItem
    {...props}
    appearance={props.selected ? 'primary' : props.appearance || defaultPaginationAppearance}
    size="small"
  />
)

const renderPaginationItem = ({ toPage, content, appearance, items, perPage, onPageChanged }) => (
  <PaginationItem
    appearance={appearance}
    onClick={() => changePageIfAppropiate(toPage, items, perPage, onPageChanged)}
  >
    {content}
  </PaginationItem>
)

const handlePaginationButtonClick = (page, items, perPage, onPageChanged) => {
  if (page.clickable === false) return

  return changePageIfAppropiate(page.label, items, perPage, onPageChanged)
}

const Pagination = ({ page, perPage, items, appearance, onPageChanged }) => (
  <StyledPagination>
    {renderPaginationItem({ toPage: 1, content: '<<', appearance, items, perPage, onPageChanged })}
    {renderPaginationItem({
      toPage: page - 1,
      content: '<',
      appearance,
      items,
      perPage,
      onPageChanged
    })}

    {getPaginationSlice(page, items, perPage).map(page => (
      <PaginationItem
        key={page.label}
        appearance={appearance}
        selected={page.selected}
        onClick={() => handlePaginationButtonClick(page, items, perPage, onPageChanged)}
      >
        {page.label}
      </PaginationItem>
    ))}

    {renderPaginationItem({
      toPage: page + 1,
      content: '>',
      appearance,
      items,
      perPage,
      onPageChanged
    })}
    {renderPaginationItem({
      toPage: pagesFromItems(items, perPage),
      content: '>>',
      appearance,
      items,
      perPage,
      onPageChanged
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
