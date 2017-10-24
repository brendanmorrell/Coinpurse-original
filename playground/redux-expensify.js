//REDUCERS
// 1. Reducers are pure functions (doesn't use or change anything from outside the function scope)
// 2. Never change state or action (you want to return a new state usually if that's what you end up trying to d0)

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';// random id generater module
// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
  } = {},
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE


// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE': {
      return [
        ...state,
        action.expense,
      ];
    }
    case 'REMOVE_EXPENSE': {
      return state.filter(({ id }) => id !== action.id);
    }
    default: {
      return state;
    }
  }
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default: {
      return typeof state;
    }
  }
};

//Store creation
const store = createStore(
  combineReducers({// takes an object with key value pairs of key:rootStateName, value:appropriateReducerForThis
    expenses: expensesReducer,
    filters: filtersReducer,
  }),
);

store.subscribe(() => {
  console.log('STORE MODIFIED: ', store.getState());
});

const { id } = store.dispatch(addExpense({ description: 'Rent', amount: 10000 })).expense;
const { id: id2 } = store.dispatch(addExpense({ description: 'Coffee', amount: 10000 })).expense;
const { id: id3 } = store.dispatch(addExpense({ description: 'Marbles', amount: 10000 })).expense;





store.dispatch(removeExpense({ id }));
