import * as React from 'react'

import Automation from '../../_helpers/automation-attribute'
import {
  changePageIfAppropiate,
  getPaginationSlice,
  pagesFromItems
} from '../../_helpers/pagination'
import Button, { ButtonAppearance } from '../../atoms/button'
import Icon from '../../atoms/icon'
import styled from '../../styled'
import { colors, misc, spacing } from '../../tokens'

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
    onClick={() =>
      changePageIfAppropiate({ rawNextPage: toPage, total: items, perPage, onPageChanged })
    }
    aria-label={right ? 'Next page' : 'Previous page'}
  >
    {content}
  </Button>
)

const handlePaginationButtonClick = (page, items, perPage, onPageChanged) => {
  if (page.clickable === false) { return }

  return changePageIfAppropiate({ rawNextPage: page.label, total: items, perPage, onPageChanged })
}

export interface IPaginationProps {
  /** HTML ID of the component */
  id?: string
  page: number
  perPage: number
  items: number
  appearance?: ButtonAppearance
  onPageChanged?: Function
}

const Pagination = ({
  page,
  perPage,
  items,
  appearance,
  onPageChanged,
  ...props
}: IPaginationProps) => (
  <Pagination.Element {...Automation('pagination')} {...props}>
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
      onClick={() =>
        changePageIfAppropiate({ rawNextPage: page - 1, total: items, perPage, onPageChanged })
      }
      icon="chevron-left"
    />

    {getPaginationSlice(page, items, perPage).map((page) => (
      <Pagination.PageButton
        key={page.label}
        appearance={appearance}
        selected={page.selected}
        size="compressed"
        onClick={() => handlePaginationButtonClick(page, items, perPage, onPageChanged)}
      >
        {page.label}
      </Pagination.PageButton>
    ))}

    <Pagination.IconOnlyButton
      size="compressed"
      onClick={() =>
        changePageIfAppropiate({ rawNextPage: page + 1, total: items, perPage, onPageChanged })
      }
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

Pagination.PageButton = styled(Button)`
  background-color: ${(props) =>
    props.selected ? colors.button.default.backgroundActive : colors.button.default.background};

  &:hover {
    background-color: ${colors.button.default.backgroundActive};
  }
`

export default Pagination
