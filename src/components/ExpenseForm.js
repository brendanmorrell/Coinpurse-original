import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';// this is an airbnb available module that gives a calendar. other versions also available
import 'react-dates/lib/css/_datepicker.css'// the relevant styling provided by airbnb

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false,
    errorDescription: '',
    errorAmount: '',
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description, errorDescription: '' }))
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({amount, errorAmount: ''}));
    }
  };
  onDateChange = (createdAt) => {// this function takes a moment input
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  };
  onFocusChange = ({ focused }) => {// destructured somehow. not sure where '.focused' is getting pulled from. maybe the focused property in the <SingleDatePicker component?
    this.setState(() => ({ calendarFocused: focused }))
  };
  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.description || !this.state.amount) {
      if(!this.state.description) {
        this.setState(() => ({errorDescription: 'Description Required'}));
      }
      if (!this.state.amount) {
        this.setState(() => ({errorAmount: 'Amount Required'}));
      }
      return;
    }
    this.props.onSubmit({
      description: this.state.description,
      amount: parseFloat(this.state.amount, 10) * 100,// turns the string into a real number (opposite is parseInt). second arg is the base 10, and the third is because we want cents
      createdAt: this.state.createdAt.valueOf(),// value of is a moment function that takes a moment object and returns it to a unix epock milliseconds value
      note: this.state.note
    });
  }
  render() {
    return (
      <div>
        {this.state.errorDescription && <h4>{this.state.errorDescription}</h4>}
        {this.state.errorAmount && <h4>{this.state.errorAmount}</h4>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker// date ondatechange focused and onfocuschange are all required props of the component. there are additional optional ones you can add too
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            // the below props are optional
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
