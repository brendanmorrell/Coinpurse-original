import { createStore, combineReducers } from 'redux';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// Store creation
const store = createStore(
  combineReducers({// takes an object with key value pairs of key:rootStateName, value:appropriateReducerForThis
    expenses: expensesReducer,
    filters: filtersReducer,
  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
