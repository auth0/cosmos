import * as React from 'react'
import styled, { css } from '../../styled'
import { colors, spacing, misc } from '../../tokens'
import Spinner from '../../atoms/spinner'
import TableColumn from './table-column'
import TableHeader from './table-header'

import Automation from '../../_helpers/automation-attribute'
import containerStyles from '../../_helpers/container-styles'

export type TableSortDirection = 'asc' | 'desc'

export interface ITableProps {
  /** HTML ID of the component */
  id?: string
  /** The items in the table. */
  items: Object[]
  /** Items are sorted on this field (defaults to the first sortable column)*/
  sortOn?: string
  /** Direction of sort */
  sortDirection?: TableSortDirection
  /** A function that will be called when a row is clicked. */
  onRowClick?: Function
  /** A function that will be called when the table is re-sorted via clicking a header. */
  onSort?: Function
  /** A message to show to the user in case there */
  emptyMessage?: React.ReactNode
  /** Used to display a loading state in the table */
  loading?: boolean
}

interface ITableState {
  sortingColumn: Object
  sortDirection: TableSortDirection
}

export const tableDefaultComparators = {
  numbers: (row1, row2, column) => Number(row1[column.field]) - Number(row2[column.field]),
  strings: (row1, row2, column) => {
    const r1 = String(row1[column]).toLowerCase()
    const r2 = String(row2[column]).toLowerCase()

    return r1 > r2 ? -1 : r2 > r1 ? 1 : 0
  }
}

class Table extends React.Component<ITableProps, ITableState> {
  static Header = TableHeader
  static Column = TableColumn

  static compare = tableDefaultComparators

  static Container = styled.div`
    ${containerStyles};
    position: relative;
  `

  static Element = styled.table`
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    table-layout: fixed;
    opacity: ${(p) => (p.loading && p.rows.length !== 0 ? 0.3 : 1)};
  `

  static Body = styled.tbody``

  static Row = styled.tr`
    cursor: ${(props) => (props.onClick ? 'pointer' : 'inherit')};
    &:hover {
      background-color: ${colors.list.backgroundHover};
    }
  `

  static Cell = styled.td`
    padding: ${spacing.xsmall};
    border-top: 1px solid ${colors.base.grayLight};
    text-align: left;
    vertical-align: middle;
    overflow-wrap: break-word;
    width: ${(props) => props.column.width || 'auto'};
    ${(props) =>
      props.column.truncate
        ? css`
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow-x: hidden;
          `
        : ``};
  `

  static EmptyState = ({ rows, children, loading }) => {
    if (rows.length > 0 || !children || loading) return null

    const TableEmptyState = styled.div`
      padding: ${spacing.small};
      background-color: rgb(250, 250, 250);
      border-radius: ${misc.radius};
      text-align: center;
      margin-top: ${spacing.xsmall};
      color: ${colors.text.default};
    `

    return <TableEmptyState>{children}</TableEmptyState>
  }

  static LoadingIndicator = ({ loading, rows }) => {
    if (!loading) return null
    const initialLoadingState = rows.length === 0

    const TableLoadingIndicator = styled.div`
      position: ${initialLoadingState ? 'initial' : 'absolute'};
      top: 0;
      left: 0;
      width: 100%;
      height: ${initialLoadingState ? 'auto' : '100%'};
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: ${initialLoadingState ? '20px' : '0'};
    `

    const SpinnerContainer = styled.div`
      background-color: white;
      display: inline-block;
      padding: ${spacing.xsmall};
      border-radius: 50%;
    `

    return (
      <TableLoadingIndicator>
        <SpinnerContainer>
          <Spinner size="medium" />
        </SpinnerContainer>
      </TableLoadingIndicator>
    )
  }

  static defaultProps = {
    onRowClick: null,
    onSort: null,
    sortDirection: 'asc',
    emptyMessage: 'There are no items to display'
  }

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
        sortingColumn: this.getSortingColumn(props.sortOn),
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
    return React.Children.toArray(children).map((element) => element.props)
  }

  getSortingColumn(sortOnField) {
    const columns = this.inferColumnsFromChildren(this.props.children)
    if (sortOnField) {
      /* find matching column by field prop */
      return columns.find((column) => column.field === sortOnField)
    } else {
      /*
        default to the first column that has sortable prop
        if there are no columns with sortable, return empty
      */
      return columns.find((column) => column.sortable) || {}
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

  handleRowClicked = (item) => {
    if (!this.props.onRowClick) return null
    return (evt) => {
      this.props.onRowClick(evt, item)
    }
  }

  render() {
    let columns = this.inferColumnsFromChildren(this.props.children)
    let sortedItems, sortingColumn, sortDirection, onSort
    const { loading } = this.props

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

    // If columns are passed as a variable or as a child to <div> element
    if (columns[0].children != undefined && columns[0].children.length > 1) {
      let nestedColumns = []
      columns[0].children.map((column) => {
        nestedColumns.push(column.props)
      })
      columns = nestedColumns
    }

    const rows = sortedItems.map((item, index) => (
      <Table.Row
        key={`row-${index}`}
        onClick={this.handleRowClicked(item)}
        {...Automation('table.row')}
      >
        {columns.map((column) => {
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
      <Table.Container>
        <Table.Element {...Automation('table')} {...this.props} rows={rows}>
          <Table.Header
            columns={columns}
            sortingColumn={sortingColumn}
            sortDirection={sortDirection}
            onSort={onSort}
          />
          <Table.Body {...Automation('table.body')}>{rows}</Table.Body>
        </Table.Element>
        <Table.EmptyState rows={rows} loading={loading}>
          {this.props.emptyMessage}
        </Table.EmptyState>
        <Table.LoadingIndicator rows={rows} loading={loading} />
      </Table.Container>
    )
  }
}

export default Table
