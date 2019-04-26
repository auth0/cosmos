import * as React from 'react'
import styled from '../../styled'
import Automation from '../../_helpers/automation-attribute'
import containerStyles from '../../_helpers/container-styles'

import Button from '../../atoms/button'
import { changePageIfAppropiate, totals } from '../../_helpers/pagination'

export interface IPagerProps {
  /** HTML ID of the component */
  id?: string
  page?: number
  perPage?: number
  items?: number
  onPageChanged?: Function
}

const Pager = ({ onPageChanged, page, perPage, items, ...props }: IPagerProps) => (
  <Pager.Element {...Automation('pager')} {...props}>
    <Button
      size="compressed"
      appearance="secondary"
      onClick={() => changePageIfAppropiate(page - 1, items, perPage, onPageChanged)}
      icon="chevron-left"
    >
      Newer
    </Button>
    <Pager.PageSelector page={page}>{items && totals(page, perPage, items)}</Pager.PageSelector>
    <Button
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

export default Pager
