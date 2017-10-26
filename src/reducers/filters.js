// REDUCERS
// 1. Reducers are pure functions (doesn't use or change anything from outside the function scope)
// 2. Never change state or action (you want to return a new state usually if that's what you end up trying to d0)


// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};
export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};
