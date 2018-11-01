import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Automation from '../../_helpers/automation-attribute'

import Button from '../../atoms/button'
import Icon from '../../atoms/icon'
import { changePageIfAppropiate, totals } from '../../_helpers/pagination'

const StyledPager = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledPageSelector = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Pager = ({ onPageChanged, page, perPage, items }) => (
  <StyledPager {...Automation('pager')}>
    <Button
      position="left"
      size="compressed"
      appearance="secondary"
      onClick={() => changePageIfAppropiate(page - 1, items, perPage, onPageChanged)}
      icon="chevron-left"
    >
      Newer
    </Button>
    <StyledPageSelector page={page}>{totals(page, perPage, items)}</StyledPageSelector>
    <Button
      position="right"
      size="compressed"
      appearance="secondary"
      icon="chevron-right"
      iconAlign="right"
      onClick={() => changePageIfAppropiate(page + 1, items, perPage, onPageChanged)}
    >
      Older
    </Button>
  </StyledPager>
)

Pager.propTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func
}

export default Pager
