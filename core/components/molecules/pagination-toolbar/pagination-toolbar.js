import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { misc, colors, spacing } from '@auth0/cosmos-tokens'
import TextInput from '../../atoms/text-input'
import Button from '../../atoms/button'
import ButtonGroup from '../../molecules/button-group'
import Icon from '../../atoms/icon'
import Automation from '../../_helpers/automation-attribute'

import { changePageIfAppropiate, pageInputWidth, pagesFromItems } from '../../_helpers/pagination'

const StyledPageSelector = styled.div`
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

const StyledPagerButton = styled(Button)`
  ${Icon.Element} {
    path {
      fill: ${colors.text.inputs};
    }
  }
`

const Pager = ({ page, pages, onPrevPressed, onNextPressed }) => {
  const inFirstPage = page === 1
  const inLastPage = page === pages
  return (
    <ButtonGroup compressed>
      <StyledPagerButton
        icon="chevron-left"
        size="compressed"
        onClick={onPrevPressed}
        disabled={inFirstPage}
      />
      <StyledPagerButton
        icon="chevron-right"
        size="compressed"
        onClick={onNextPressed}
        disabled={inLastPage}
      />
    </ButtonGroup>
  )
}

const PaginationToolbar = ({ onPageChanged, page, perPage, items }) => {
  const pages = pagesFromItems(items, perPage)

  // Do not show the pagination toolbar if there is only one page
  if (pages === 1) return null

  return (
    <PaginationToolbar.Element {...Automation('pagination-toolbar')}>
      <StyledPageSelector page={page}>
        <div>Page</div>
        <TextInput
          type="number"
          size="compressed"
          value={page.toString()}
          onChange={evt => changePageIfAppropiate(evt.target.value, items, perPage, onPageChanged)}
        />
        <div>of {pages}</div>
      </StyledPageSelector>
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

PaginationToolbar.propTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func
}

export default PaginationToolbar
