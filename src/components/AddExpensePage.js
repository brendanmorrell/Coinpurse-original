import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';


const AddExpensePage = (props) => (
  <div>
    <p>This is my add expense component!</p>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');// this is an included action on react components. you can see it in the react devtools. PUSh takes a single argument which is the address you want to go to, just like links
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
