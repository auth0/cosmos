import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, spacing } from '@auth0/cosmos-tokens'
import TableColumn from './table-column'
import TableHeader from './table-header'

class Table extends React.Component {
  defaultCellRenderer = (item, column) => item[column.field]

  inferColumnsFromChildren(children) {
    return React.Children.toArray(children).map(element => element.props)
  }

  getSortingColumn(sortOn, columns) {
    if (sortOn) {
      /* find matching column by field prop */
      return columns.find(column => column.field === sortOn)
    } else {
      /* default to the first column that has sortable prop */
      return columns.find(column => column.sortable)
    }
  }

  getComparator(items, sortingColumn) {
    /* Use custom comparator if given as prop */
    if (sortingColumn.comparator) return sortingColumn.comparator

    /* if not, try to guess it from the type of data */
    const firstItem = items[0]
    const sampleValue = firstItem[sortingColumn.field]
    if (typeof sampleValue === 'number') return Table.compare.numbers
    else return Table.compare.strings
  }

  sortItems = ({ allItems, sortingColumn, sortDirection }) => {
    /* create a copy of allItems */
    const items = [...allItems]

    /* if there are no items or no sorting column sorting code breaks */
    if (!sortingColumn || items.length === 0) return items

    const comparator = this.getComparator(items, sortingColumn)

    items.sort((row1, row2) => comparator(sortingColumn, row1, row2))
    if (sortDirection === 'desc') items.reverse()

    return items
  }

  handleRowClicked = item => evt => {
    this.props.onRowClick(evt, item)
  }

  render() {
    const columns = this.inferColumnsFromChildren(this.props.children)
    const sortingColumn = this.getSortingColumn(this.props.sortOn, columns)

    const sortedItems = this.sortItems({
      allItems: this.props.items,
      sortDirection: this.props.sortDirection,
      sortingColumn
    })

    const rows = sortedItems.map((item, index) => (
      <Table.Row key={`row-${index}`} onClick={this.handleRowClicked(item)}>
        {columns.map(column => {
          const cellRenderer = column.children || this.defaultCellRenderer
          return (
            <Table.Cell key={column.field} column={column}>
              {cellRenderer(item, column)}
            </Table.Cell>
          )
        })}
      </Table.Row>
    ))

    return (
      <Table.Element>
        <Table.Header columns={columns} sortingColumn={sortingColumn} {...this.props} />
        <Table.Body>{rows}</Table.Body>
      </Table.Element>
    )
  }
}

Table.Header = TableHeader
Table.Column = TableColumn

Table.compare = {
  numbers: (column, row1, row2) => Number(row1[column.field]) - Number(row2[column.field]),
  strings: (column, row1, row2) =>
    String(row1[column.field]).toLowerCase() - String(row2[column.field]).toLowerCase()
}

Table.Element = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`

Table.Body = styled.tbody``

Table.Row = styled.tr`
  cursor: ${props => (props.onClick ? 'pointer' : 'inherit')};
`

Table.Cell = styled.td`
  padding: ${spacing.xsmall};
  border-top: 1px solid ${colors.base.grayLight};
  text-align: left;
  vertical-align: middle;
  line-height: 2;
  width: ${props => props.column.width || 'auto'};
`

Table.propTypes = {
  /** The items in the table. */
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** Items are sorted on this field (defaults to the first sortable column)*/
  sortOn: PropTypes.string,
  /** Direction of sort */
  sortDirection: PropTypes.oneOf(['asc', 'desc']),
  /** A function that will be called when a row is clicked. */
  onRowClick: PropTypes.func,
  /** A function that will be called when the table is re-sorted via clicking a header. */
  onSort: PropTypes.func
}

Table.defaultProps = {
  onRowClick: () => null,
  onSort: null,
  sortDirection: 'asc'
}

export default Table
