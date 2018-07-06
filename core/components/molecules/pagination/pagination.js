import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Button from '../../atoms/button'
import { getPaginationSlice, changePageIfAppropiate, pagesFromItems } from './utils'

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

const Pagination = ({ page, perPage, items, appearance, onPageChanged }) => (
  <StyledPagination>
    <PaginationItem
      appearance={appearance}
      onClick={() => changePageIfAppropiate(1, items, perPage, onPageChanged)}
    >
      {'<<'}
    </PaginationItem>
    <PaginationItem
      appearance={appearance}
      onClick={() => changePageIfAppropiate(page - 1, items, perPage, onPageChanged)}
    >
      {'<'}
    </PaginationItem>
    {getPaginationSlice(page, items, perPage).map(page => (
      <PaginationItem
        key={page.page}
        appearance={appearance}
        selected={page.selected}
        onClick={() => changePageIfAppropiate(page.page, items, perPage, onPageChanged)}
      >
        {page.page}
      </PaginationItem>
    ))}
    <PaginationItem
      appearance={appearance}
      onClick={() => changePageIfAppropiate(page + 1, items, perPage, onPageChanged)}
    >
      {'>'}
    </PaginationItem>
    <PaginationItem
      appearance={appearance}
      onClick={() =>
        changePageIfAppropiate(pagesFromItems(items, perPage), items, perPage, onPageChanged)
      }
    >
      {'>>'}
    </PaginationItem>
  </StyledPagination>
)

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func
}

export default Pagination
