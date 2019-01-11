import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'
import Automation from '../../_helpers/automation-attribute'
import containerStyles from '../../_helpers/container-styles'

import Button from '../../atoms/button'
import { changePageIfAppropiate, totals } from '../../_helpers/pagination'

const Pager = ({ onPageChanged, page, perPage, items, ...props }) => (
  <Pager.Element {...Automation('pager')} {...props}>
    <Button
      position="left"
      size="compressed"
      appearance="secondary"
      onClick={() => changePageIfAppropiate(page - 1, items, perPage, onPageChanged)}
      icon="chevron-left"
    >
      Newer
    </Button>
    <Pager.PageSelector page={page}>{items && totals(page, perPage, items)}</Pager.PageSelector>
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
  </Pager.Element>
)

Pager.Element = styled.div`
  ${containerStyles};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

Pager.PageSelector = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

Pager.propTypes = {
  page: PropTypes.number,
  perPage: PropTypes.number,
  items: PropTypes.number,
  onPageChanged: PropTypes.func
}

export default Pager
