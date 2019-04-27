import * as React from "react";

import Automation from "../../_helpers/automation-attribute";
import containerStyles from "../../_helpers/container-styles";
import { changePageIfAppropiate, pagesFromItems, totals } from "../../_helpers/pagination";
import Button from "../../atoms/button";
import styled from "../../styled";

export interface IPagerProps {
  /** HTML ID of the component */
  id?: string
  page: number
  perPage?: number
  items?: number
  showInfo?: boolean
  onPageChanged?: Function
}

const Pager = ({ onPageChanged, page, perPage, items, showInfo, ...props }: IPagerProps) => {
  const inFirstPage = page === 1
  const inLastPage = showInfo && items && perPage ? pagesFromItems(items, perPage) === page : false
  const ignoreNextPageCheck = !items
  return (
    <Pager.Element {...Automation('pager')} {...props}>
      <Button
        size="compressed"
        appearance="secondary"
        disabled={inFirstPage}
        onClick={() =>
          changePageIfAppropiate({
            rawNextPage: page - 1,
            total: items,
            perPage,
            onPageChanged,
            ignoreNextPageCheck
          })
        }
        icon="chevron-left"
      >
        Newer
      </Button>
      <Pager.PageSelector>
        {showInfo && items ? totals(page, perPage, items) : null}
        {showInfo && !items ? `Page ${page}` : null}
      </Pager.PageSelector>
      <Button
        size="compressed"
        appearance="secondary"
        disabled={inLastPage}
        icon="chevron-right"
        iconAlign="right"
        onClick={() =>
          changePageIfAppropiate({
            rawNextPage: page + 1,
            total: items,
            perPage,
            onPageChanged,
            ignoreNextPageCheck
          })
        }
      >
        Older
      </Button>
    </Pager.Element>
  )
}

Pager.defaultProps = {
  showInfo: true
}

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
