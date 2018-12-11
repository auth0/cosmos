import React from 'react'
import PropTypes from 'prop-types'
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
      />
      <Pager.Button
        icon="chevron-right"
        size="compressed"
        onClick={onNextPressed}
        disabled={inLastPage}
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

Pager.Label = styled.div``

const PaginationToolbar = ({ onPageChanged, page, perPage, items }) => {
  const pages = pagesFromItems(items, perPage)

  // Do not show the pagination toolbar if there is one page or less
  if (pages <= 1) return null

  return (
    <PaginationToolbar.Element {...Automation('pagination-toolbar')} margin={{ top: 'medium' }}>
      <PaginationToolbar.PageSelector page={page}>
        <Pager.Label margin={{ right: 'xsmall' }}>Page</Pager.Label>
        <TextInput
          type="number"
          size="compressed"
          value={page.toString()}
          onChange={evt => changePageIfAppropiate(evt.target.value, items, perPage, onPageChanged)}
          margin={{ right: 'xsmall' }}
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
`

PaginationToolbar.PageSelector = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${TextInput.Element} {
    width: ${({ page }) => pageInputWidth(page)}px;
  }
`

PaginationToolbar.propTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func
}

export default PaginationToolbar
