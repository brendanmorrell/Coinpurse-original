import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input
      type="text"
      placeholder="Search expenses..."
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === 'date') {
          return props.dispatch(sortByDate());
        }
        return props.dispatch(sortByAmount());
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
