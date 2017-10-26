import React from 'react';
import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <h3>{ description }</h3>
    <p>{ amount } - { createdAt }</p>
    <button
      value={id}
      onClick={(e) => {
        dispatch(removeExpense(id));
          console.log(e.target.value);
      }}
    >Remove
    </button>
  </div>
);
export default connect()(ExpenseListItem);
