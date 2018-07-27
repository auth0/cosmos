import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, spacing } from '@auth0/cosmos-tokens'
import TableColumn from './table-column'
import TableHeader from './table-header'

const defaultCellRenderer = (item, column) => item[column.field]

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.columns = this.getColumns(props)
    this.state = {
      items: this.getDisplayedItems(this.columns, props.items)
    }
  }

  componentWillReceiveProps(newProps) {
    this.columns = this.getColumns(newProps)
    this.setState({
      items: this.getDisplayedItems(this.columns, newProps.items)
    })
  }

  getColumns(props) {
    return React.Children.toArray(props.children).map(element => element.props)
  }

  getDisplayedItems(columns, allItems) {
    const items = [...allItems]
    const sortColumn = columns.find(column => column.sort)

    if (!sortColumn || items.length === 0) return items

    let comparator = sortColumn.comparator || this.guessComparator(items[0], sortColumn)
    items.sort((row1, row2) => comparator(sortColumn, row1, row2))

    if (sortColumn.sort === 'desc') items.reverse()

    return items
  }

  guessComparator(firstItem, sortColumn) {
    // If a comparator isn't specified, try to guess based on the type of the data.
    const sampleValue = firstItem[sortColumn.field]
    if (typeof sampleValue === 'number') return Table.compare.numbers
    else return Table.compare.strings
  }

  handleRowClicked = item => evt => {
    this.props.onRowClick(evt, item)
  }

  render() {
    const rows = this.state.items.map((item, index) => (
      <Table.Row key={`row-${index}`} onClick={this.handleRowClicked(item)}>
        {this.columns.map(column => {
          const cellRenderer = column.children || defaultCellRenderer
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
        <Table.Header columns={this.columns} onSort={this.props.onSort} />
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
    String(row1[column.field]).toLowerCase() - String(row2[column.field]).toLowerCase(),
  stringsCaseSensitive: (column, row1, row2) =>
    String(row1[column.field]) - String(row2[column.field])
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
  /** A function that will be called when a row is clicked. */
  onRowClick: PropTypes.func,
  /** A function that will be called when the table is re-sorted via clicking a header. */
  onSort: PropTypes.func
}

Table.defaultProps = {
  onRowClick: () => null,
  onSort: () => null
}

export default Table
