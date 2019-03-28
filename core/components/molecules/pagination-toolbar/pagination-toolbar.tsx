import * as React from 'react'
import styled from '@auth0/cosmos/styled'
import { colors, spacing } from '@auth0/cosmos-tokens'
import TextInput from '../../atoms/text-input'
import Button from '../../atoms/button'
import ButtonGroup from '../../molecules/button-group'
import Icon from '../../atoms/icon'
import Automation from '../../_helpers/automation-attribute'

import { changePageIfAppropiate, pageInputWidth, pagesFromItems } from '../../_helpers/pagination'

const Pager = ({ page, pages, onPrevPressed, onNextPressed }) => {
  const inFirstPage = page === 1
  const inLastPage = page === pages
  return (
    <ButtonGroup compressed>
      <Pager.Button
        icon="chevron-left"
        size="compressed"
        onClick={onPrevPressed}
        disabled={inFirstPage}
        aria-label="Previous page"
      />
      <Pager.Button
        icon="chevron-right"
        size="compressed"
        onClick={onNextPressed}
        disabled={inLastPage}
        aria-label="Next page"
      />
    </ButtonGroup>
  )
}

Pager.Button = styled(Button)`
  ${Icon.Element} {
    path {
      fill: ${colors.text.inputs};
    }
  }
`

export interface IPaginationToolbarProps {
  page: number
  perPage: number
  items: number
  onPageChanged?: Function
}

const PaginationToolbar = ({ onPageChanged, page, perPage, items, ...props }: IPaginationToolbarProps) => {
  const pages = pagesFromItems(items, perPage)

  // Do not show the pagination toolbar if there is one page or less
  if (pages <= 1) return null

  return (
    <PaginationToolbar.Element {...Automation('pagination-toolbar')} {...props}>
      <PaginationToolbar.PageSelector page={page}>
        <div>Page</div>
        <TextInput
          type="number"
          size="compressed"
          value={page.toString()}
          onChange={evt => changePageIfAppropiate(evt.target.value, items, perPage, onPageChanged)}
        />
        <div>of {pages}</div>
      </PaginationToolbar.PageSelector>
      <Pager
        page={page}
        pages={pages}
        onNextPressed={() => changePageIfAppropiate(page + 1, items, perPage, onPageChanged)}
        onPrevPressed={() => changePageIfAppropiate(page - 1, items, perPage, onPageChanged)}
      />
    </PaginationToolbar.Element>
  )
}

PaginationToolbar.Element = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${spacing.medium};
`

PaginationToolbar.PageSelector = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > * {
    margin-right: ${spacing.xsmall};
    &:last-child {
      margin-right: 0;
    }
  }

  ${TextInput.Element} {
    width: ${({ page }) => pageInputWidth(page)}px;
  }
`

export default PaginationToolbar
