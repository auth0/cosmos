// The table column isn't actually rendered; it's just used to capture props.
const TableColumn = (props: ITableColumnProps) => null

export interface ITableColumnProps {
  field?: string
  title?: string
  width?: string
  sortable?: boolean
  comparator?: Function
  truncate?: boolean
  children?: React.ReactNode
}

TableColumn.defaultProps = {
  sortable: false,
  truncate: false
}

export default TableColumn
