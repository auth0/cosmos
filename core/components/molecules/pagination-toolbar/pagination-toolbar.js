import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { misc, colors } from '../../../tokens'
import TextInput from '../../atoms/text-input'
import Button from '../../atoms/button'
import ButtonGroup from '../../molecules/button-group'
import Icon from '../../atoms/icon'

import { changePageIfAppropiate, pageInputWidth, pagesFromItems } from '../../_helpers/pagination'

const StyledPaginationToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
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

const PaginationToolbar = ({ onPageChanged, page, perPage, items }) => (
  <StyledPaginationToolbar>
    <StyledPageSelector page={page}>
      <div>Page</div>
      <TextInput
        type="number"
        size="compressed"
        value={page.toString()}
        onChange={evt => changePageIfAppropiate(evt.target.value, items, perPage, onPageChanged)}
      />
      <div>of {pagesFromItems(items, perPage)}</div>
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
  onPageChanged: PropTypes.func
}

export default PaginationToolbar
