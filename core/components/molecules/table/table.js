import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'
import { colors, spacing } from '@auth0/cosmos-tokens'
import TableColumn from './table-column'
import TableHeader from './table-header'

class Table extends React.Component {
  constructor(props) {
    super(props)

    /*
      This component can exists in 2 modes:

      1. Automatic sorting
         We initialse sortingColumn and sortDirection in internal state to
         work with defaultOnSort

      2. Controlled sorting
         The internal state is completely bipassed, we expect the user to send
         sortedItems directly.
    */

    if (!props.onSort) {
      // automatic mode
      this.state = {
        sortingColumn: this.getSortingColumn(),
        sortDirection: 'asc'
      }
    }
  }
  defaultCellRenderer = (item, column) => item[column.field]

  defaultOnSort = (sortOnField, sortDirection) => {
    const sortingColumn = this.getSortingColumn(sortOnField)
    this.setState({ sortingColumn, sortDirection })
  }

  inferColumnsFromChildren(children) {
    return React.Children.toArray(children).map(element => element.props)
  }

  getSortingColumn(sortOnField) {
    const columns = this.inferColumnsFromChildren(this.props.children)
    if (sortOnField) {
      /* find matching column by field prop */
      return columns.find(column => column.field === sortOnField)
    } else {
      /*
        default to the first column that has sortable prop
        if there are no columns with sortable, return empty
      */
      return columns.find(column => column.sortable) || {}
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

  sortItems = ({ unsortedItems, sortingColumn, sortDirection }) => {
    /* create a copy of allItems */
    const items = [...unsortedItems]

    /* if there are no items or no sorting column sorting code breaks */
    if (!sortingColumn || items.length === 0) return items

    const comparator = this.getComparator(items, sortingColumn)

    items.sort((row1, row2) => comparator(row1, row2, sortingColumn))
    if (sortDirection === 'desc') items.reverse()

    return items
  }

  handleRowClicked = item => evt => {
    this.props.onRowClick(evt, item)
  }

  render() {
    const columns = this.inferColumnsFromChildren(this.props.children)
    let sortedItems, sortingColumn, sortDirection, onSort

    if (this.props.onSort) {
      // User-controlled sorting mode: items are already sorted

      onSort = this.props.onSort
      sortingColumn = this.getSortingColumn(this.props.sortOn) // field:string to sortingColumn:object
      sortDirection = this.props.sortDirection
      sortedItems = this.props.items
    } else {
      //  Automatic sorting mode: use internal state

      onSort = this.defaultOnSort
      sortingColumn = this.state.sortingColumn
      sortDirection = this.state.sortDirection
      sortedItems = this.sortItems({
        unsortedItems: this.props.items,
        sortDirection,
        sortingColumn
      })
    }

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
        <Table.Header
          columns={columns}
          sortingColumn={sortingColumn}
          sortDirection={sortDirection}
          onSort={onSort}
        />
        <Table.Body>{rows}</Table.Body>
      </Table.Element>
    )
  }
}

Table.Header = TableHeader
Table.Column = TableColumn

Table.compare = {
  numbers: (row1, row2, column) => Number(row1[column.field]) - Number(row2[column.field]),
  strings: (row1, row2, column) =>
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
