import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const headRows = [
  { id: 'name', numeric: false, label: 'Attraction' },
  { id: 'waitTime', numeric: true, label: 'Wait Time (minutes)' },
  { id: 'singleRider', numeric: true, label: 'Single Rider Available?' },
  { id: 'fastPassStartTime', numeric: true, label: 'Fast Pass Return Time' }
];

const EnhancedTableHead = props => {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => onRequestSort(event, property);

  return (
    <TableHead>
      <TableRow>
        {headRows.map(row => (
          <TableCell
            key={row.id}
            align={row.numeric ? 'right' : 'left'}
            padding={'default'}
            sortDirection={orderBy === row.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === row.id}
              direction={order}
              onClick={createSortHandler(row.id)}
            >
              {row.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default EnhancedTableHead;
