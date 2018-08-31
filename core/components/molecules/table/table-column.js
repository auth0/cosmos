import PropTypes from 'prop-types'

// The table column isn't actually rendered; it's just used to capture props.
const TableColumn = props => null

TableColumn.propTypes = {
  field: PropTypes.string.isRequired,
  title: PropTypes.string,
  width: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  sortable: PropTypes.bool,
  comparator: PropTypes.func
}

TableColumn.defaultProps = {
  align: 'left'
}

export default TableColumn
