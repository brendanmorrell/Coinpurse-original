import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    case 'RESET':
      return {
        count: 0,
      };
    default:
      return state;
  }
});//first argument must be a function,where it take an argument that is the current state, which we are defining
//you define the default state first, and that is what is used on the initial mount.

console.log('Store On Mount: ', store.getState());//this getState call is a redux function

// Actions are just object that get sent to the store with commands

store.dispatch({
  type: 'INCREMENT',
});
console.log('INCREMENTed count: ', store.getState());

store.dispatch({
  type: 'RESET',
});
console.log('RESET count: ', store.getState());

store.dispatch({
  type: 'DECREMENT',
});
console.log('DECREMENTed count: ', store.getState());
