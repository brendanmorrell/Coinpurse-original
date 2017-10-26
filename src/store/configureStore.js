import { createStore, combineReducers } from 'redux';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// Store creation
const store = createStore(
  combineReducers({// takes an object with key value pairs of key:rootStateName, value:appropriateReducerForThis
    expenses: expensesReducer,
    filters: filtersReducer,
  }),
);

export default store;
