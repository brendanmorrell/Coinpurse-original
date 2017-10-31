import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense('123abc');
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('should setup edit expense object', () => {
  const id = 'thisisanid';
  const updates = {
    description: 'new description',
    note: 'new note',
    amount: 'new amount',
    createdAt: 'newCreatedAt',
  };
  const action = editExpense(id, updates);
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'thisisanid',
    updates: {
      description: 'new description',
      note: 'new note',
      amount: 'new amount',
      createdAt: 'newCreatedAt',
    },
  });
});

test('should set up add expense action object with unique id and provided values', () => {
  const expenseData = {
    description: 'new description',
    note: 'new note',
    createdAt: 1000,
    amount: 10950000,
  };
  const action = addExpense(expenseData);
  const action2 = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
      amount: 10950000,
      createdAt: 1000,
    },
  });
  expect(action.expense.id).not.toBe(action2.expense.id);
});

test('it should setup add expense object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    },
  });
});
