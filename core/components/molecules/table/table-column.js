import PropTypes from 'prop-types'

// The table column isn't actually rendered; it's just used to capture props.
const TableColumn = props => null

TableColumn.propTypes = {
  field: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  sortable: PropTypes.bool,
  comparator: PropTypes.func,
  truncate: PropTypes.bool
}

TableColumn.defaultProps = {
  sortable: false,
  truncate: false
}

export default TableColumn
