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

const renderPaginationItem = ({
  toPage,
  content,
  appearance,
  items,
  perPage,
  onPageChanged,
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

const handlePaginationButtonClick = (page, items, perPage, onPageChanged) => {
  if (page.clickable === false) return

  return changePageIfAppropiate(page.label, items, perPage, onPageChanged)
}

const Pagination = ({ page, perPage, items, appearance, onPageChanged }) => (
  <Pagination.Element {...Automation('pagination')}>
    {renderPaginationItem({
      toPage: 1,
      content: 'First',
      appearance,
      items,
      perPage,
      onPageChanged
    })}

    <Pagination.IconOnlyButton
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

    <Pagination.IconOnlyButton
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
  </Pagination.Element>
)

Pagination.Element = styled.div`
  display: flex;
  justify-content: center;

  ${Button.Element} {
    margin-right: ${spacing.small};
  }
`

Pagination.IconOnlyButton = styled(Button)`
  /* Override icon-only button color */
  /* See: https://github.com/auth0/cosmos/pull/1033 */
  ${Icon.Element} {
    path {
      fill: black;
    }
  }
`

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func
}

export default Pagination
