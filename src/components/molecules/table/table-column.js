import PropTypes from 'prop-types'

// The table column isn't actually rendered; it's just used to capture props.
const TableColumn = props => null

TableColumn.propTypes = {
  field: PropTypes.string.isRequired,
  title: PropTypes.string,
  width: PropTypes.string,
  sortable: PropTypes.bool,
  sort: PropTypes.oneOf(['asc', 'desc']),
  comparator: PropTypes.func
}

export default TableColumn
