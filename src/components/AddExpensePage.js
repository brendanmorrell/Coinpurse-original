import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');// this is an included action on react components. you can see it in the react devtools. PUSh takes a single argument which is the address you want to go to, just like links
  };
  render () {
    return (
      <div>
        <p>This is my add expense component!</p>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);// mapDispatch to props allows us to put dispatch calls as props, thus allowing us to grab them as calls during testing as opposed
