import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'
import { colors, spacing } from '@auth0/cosmos-tokens'
import TableColumn from './table-column'
import Automation from '../../_helpers/automation-attribute'

const TableHeader = props => {
  const cells = props.columns.map((column, index) => {
    const isSortedBy = column.field === props.sortingColumn.field
    const order = props.sortDirection || 'asc'
    const icon = order === 'asc' ? '↑' : '↓'

    let sortIndicator
    if (column.sortable) {
      sortIndicator = (
        <TableHeader.SortIndicator isSortedBy={isSortedBy}>{icon}</TableHeader.SortIndicator>
      )
    }

    const onClick = column => {
      if (!column.sortable) return

      let sortDirection

      if (column.field === props.sortingColumn.field) {
        /* if the selected column is clicked, flip sort direction */
        sortDirection = props.sortDirection === 'asc' ? 'desc' : 'asc'
      } else {
        /* otherwise initialise with asc */
        sortDirection = 'asc'
      }
      props.onSort(column.field, sortDirection)
    }

    return (
      <TableHeader.Cell
        key={`row-header-${index}`}
        column={column}
        sortable={column.sortable && props.onSort}
        onClick={_ => onClick(column)}
      >
        {column.title}
        {sortIndicator}
      </TableHeader.Cell>
    )
  })

  return (
    <TableHeader.Element {...Automation('table.header')}>
      <TableHeader.Row>{cells}</TableHeader.Row>
    </TableHeader.Element>
  )
}

TableHeader.Element = styled.thead``

TableHeader.Row = styled.tr``

TableHeader.SortIndicator = styled.span`
  padding-left: ${spacing.xsmall};
  visibility: ${props => (props.isSortedBy ? 'visible' : 'hidden')};
`

TableHeader.Cell = styled.th`
  padding: ${spacing.xsmall};
  border-bottom: 2px solid ${colors.base.grayLight};
  text-align: left;
  vertical-align: bottom;
  line-height: 2;
  cursor: ${props => (props.sortable ? 'pointer' : 'auto')};
  &:hover {
    color: ${props => (props.sortable ? colors.link.default : 'inherit')};
    ${TableHeader.SortIndicator} {
      visibility: visible;
    }
  }
`

TableHeader.propTypes = {
  columns: PropTypes.arrayOf(TableColumn),
  onSort: PropTypes.func
}

TableHeader.defaultProps = {
  onSort: column => event => null
}

export default TableHeader
