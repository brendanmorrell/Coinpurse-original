// MODULES
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';// sets what you want react to use as the redux store
import 'normalize.css/normalize.css';

// REACT ROUTER
import AppRouter from './routers/AppRouter';
// REDUX
import store from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { sortReverse } from './actions/filters';
// CSS
import './styles/styles.scss';


import { addExpense } from './actions/expenses';



store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(sortReverse());
store.dispatch(sortReverse());
store.dispatch(sortReverse());
store.dispatch(sortReverse());


store.dispatch(addExpense({ description: 'water bill', amount: 7000 }));
store.dispatch(addExpense({ description: 'gas bill', amount: 7000, createdAt: 9999999 }));


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


const rootApp = document.getElementById('app');
ReactDOM.render(jsx, rootApp);
