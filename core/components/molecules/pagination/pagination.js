import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { misc, colors } from '@auth0/cosmos-tokens'
import TextInput from '../../atoms/text-input'
import { changePageIfAppropiate, pageInputWidth, pagesFromItems, totals } from './utils'

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledPagerButton = styled.button`
  background-color: ${colors.button.default.background};
  display: inline-block;
  align-items: center;
  border: none;
  height: 30px;

  &:hover {
    background-color: ${colors.button.default.backgroundHover};
  }

  &:first-child {
    border-radius: ${misc.radius} 0 0 ${misc.radius};
  }

  &:last-child {
    border-radius: 0 ${misc.radius} ${misc.radius} 0;
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
  <div>
    {/* TODO: Remove usage of '<' and '>' characters, replace with proper icons. */}
    <StyledPagerButton onClick={onPrevPressed}>{'<'}</StyledPagerButton>
    <StyledPagerButton onClick={onNextPressed}>{'>'}</StyledPagerButton>
  </div>
)

const Pagination = ({ onPageChanged, page, perPage, items, showTotals }) => (
  <StyledPagination>
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
  </StyledPagination>
)

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func
}

export default Pagination
