import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { misc, colors } from '@auth0/cosmos-tokens'
import TextInput from '../../atoms/text-input'
import Button from '../../atoms/button'
import ButtonGroup from '../../molecules/button-group'
import Icon from '../../atoms/icon'

import { changePageIfAppropiate, pageInputWidth, pagesFromItems } from '../../_helpers/pagination'

const StyledPagerButton = styled(Button)`
  ${Icon.Element} {
    margin: 0;
  }
`

const StyledPageSelector = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > * {
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }
  }

  ${TextInput.Element} {
    width: ${({ page }) => pageInputWidth(page)}px;
  }
`

const Pager = ({ page, pages, onPrevPressed, onNextPressed }) => {
  const inFirstPage = page === 1
  const inLastPage = page === pages
  return (
    <ButtonGroup compressed>
      <StyledPagerButton size="compressed" onClick={onPrevPressed} disabled={inFirstPage}>
        <Icon name="chevron-left" />
      </StyledPagerButton>
      <StyledPagerButton size="compressed" onClick={onNextPressed} disabled={inLastPage}>
        <Icon name="chevron-right" />
      </StyledPagerButton>
    </ButtonGroup>
  )
}

const PaginationToolbar = ({ onPageChanged, page, perPage, items }) => {
  const pages = pagesFromItems(items, perPage)

  // Do not show the pagination toolbar if there is only one page
  if (pages === 1) return null

  return (
    <PaginationToolbar.Element>
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
  margin-top: 10px;
`

PaginationToolbar.propTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func
}

export default PaginationToolbar
