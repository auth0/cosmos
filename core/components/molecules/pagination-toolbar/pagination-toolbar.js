import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { misc, colors } from '@auth0/cosmos-tokens'
import TextInput from '../../atoms/text-input'
import Button from '../../atoms/button'
import ButtonGroup from '../../molecules/button-group'
import Icon from '../../atoms/icon'

import {
  changePageIfAppropiate,
  pageInputWidth,
  pagesFromItems,
  totals
} from '../../_helpers/pagination'

const StyledPaginationToolbar = styled.div`
  display: flex;
  justify-content: space-between;
`

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

const Pager = ({ onPrevPressed, onNextPressed }) => (
  <ButtonGroup compressed>
    <StyledPagerButton size="compressed" onClick={onPrevPressed}>
      <Icon name="chevron-left" />
    </StyledPagerButton>
    <StyledPagerButton size="compressed" onClick={onNextPressed}>
      <Icon name="chevron-right" />
    </StyledPagerButton>
  </ButtonGroup>
)

const PaginationToolbar = ({ onPageChanged, page, perPage, items, showTotals }) => (
  <StyledPaginationToolbar>
    <StyledPageSelector page={page}>
      <div>Page</div>
      <TextInput
        type="number"
        value={page}
        onChange={evt => changePageIfAppropiate(evt.target.value, items, perPage, onPageChanged)}
      />
      <div>of {pagesFromItems(items, perPage)}</div>
      {showTotals && <div>– {totals(page, perPage, items)}</div>}
    </StyledPageSelector>
    <Pager
      onNextPressed={() => changePageIfAppropiate(page + 1, items, perPage, onPageChanged)}
      onPrevPressed={() => changePageIfAppropiate(page - 1, items, perPage, onPageChanged)}
    />
  </StyledPaginationToolbar>
)

PaginationToolbar.propTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func,
  showTotals: PropTypes.bool
}

export default PaginationToolbar
