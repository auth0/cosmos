import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { spacing, colors, misc } from '@auth0/cosmos-tokens'
import Button from '../../atoms/button'
import Icon from '../../atoms/icon'
import Automation from '../../_helpers/automation-attribute'

import {
  getPaginationSlice,
  changePageIfAppropiate,
  pagesFromItems
} from '../../_helpers/pagination'

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;

  ${Button.Element} {
    margin-right: ${spacing.small};
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
  <Button
    icon={`chevron-${right ? 'right' : 'left'}`}
    iconAlign={right ? 'right' : 'left'}
    appearance={appearance}
    size="compressed"
    onClick={() => changePageIfAppropiate(toPage, items, perPage, onPageChanged)}
  >
    {content}
  </Button>
)

const BlackIconButton = styled(Button)`
  // Override icon-only button color
  // See: https://github.com/auth0/cosmos/pull/1033
  ${Icon.Element} {
    path {
      fill: black;
    }
  }
`

const handlePaginationButtonClick = (page, items, perPage, onPageChanged) => {
  if (page.clickable === false) return

  return changePageIfAppropiate(page.label, items, perPage, onPageChanged)
}

const Pagination = ({ page, perPage, items, appearance, onPageChanged }) => (
  <StyledPagination {...Automation('pagination')}>
    {renderPaginationItem({
      toPage: 1,
      content: 'First',
      appearance,
      items,
      perPage,
      onPageChanged,
      left: true
    })}

    <BlackIconButton
      size="compressed"
      onClick={() => changePageIfAppropiate(page - 1, items, perPage, onPageChanged)}
      icon="chevron-left"
    />

    {getPaginationSlice(page, items, perPage).map(page => (
      <Button
        key={page.label}
        appearance={appearance}
        selected={page.selected}
        size="compressed"
        onClick={() => handlePaginationButtonClick(page, items, perPage, onPageChanged)}
      >
        {page.label}
      </Button>
    ))}

    <BlackIconButton
      size="compressed"
      onClick={() => changePageIfAppropiate(page + 1, items, perPage, onPageChanged)}
      icon="chevron-right"
    />

    {renderPaginationItem({
      toPage: pagesFromItems(items, perPage),
      content: 'Last',
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
