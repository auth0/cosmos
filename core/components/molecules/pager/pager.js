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

const StyledButton = styled(Button)`
  ${props => (props.position === 'left' ? 'padding-right' : 'padding-left')}: 11px;
  ${props => (props.position === 'left' ? 'padding-left' : 'padding-right')}: 7px;
`

const Pager = ({ onPageChanged, page, perPage, items }) => (
  <StyledPager {...Automation('pager')}>
    <StyledButton
      position="left"
      size="compressed"
      appearance="secondary"
      onClick={() => changePageIfAppropiate(page - 1, items, perPage, onPageChanged)}
    >
      <Icon name="chevron-left" /> Newer
    </StyledButton>
    <StyledPageSelector page={page}>{totals(page, perPage, items)}</StyledPageSelector>
    <StyledButton
      position="right"
      size="compressed"
      appearance="secondary"
      onClick={() => changePageIfAppropiate(page + 1, items, perPage, onPageChanged)}
    >
      Older <Icon name="chevron-right" />
    </StyledButton>
  </StyledPager>
)

Pager.propTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func
}

export default Pager
