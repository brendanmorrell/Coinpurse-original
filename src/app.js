// MODULES
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';// sets what you want react to use as the redux store
import 'normalize.css/normalize.css';

// REACT ROUTER
import AppRouter from './routers/AppRouter';
// REDUX
import store from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
// CSS
import './styles/styles.scss';



store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const { id: water } = store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: 5 })).expense;
const { id: gas } = store.dispatch(addExpense({ description: 'Gas bill', amount: 1000, createdAt: 1000 })).expense;
const { id: gas2 } = store.dispatch(addExpense({ description: 'Gas bill 2', amount: 109500, createdAt: 1 })).expense;

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


const rootApp = document.getElementById('app');
ReactDOM.render(jsx, rootApp);
