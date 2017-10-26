// Get Visible expenses
export default (expenses, {
  text,
  sortBy,
  startDate,
  endDate,
}) => expenses.filter((expense) => {
  const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
  const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
  const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) || expense.description.toLowerCase().includes(text.toLowerCase());

  return startDateMatch && endDateMatch && textMatch;
}).sort((a, b) => {
  if (sortBy === 'date') {
    return a.createdAt < b.createdAt ? 1 : -1;
  } else if (a.amount > b.amount) { // SORT BY AMOUNT BELOW
    return -1;
  } else if (a.amount < b.amount) {
    return 1;
  }
  return a.description < b.description ? -1 : 1;// set equivalent values as alphabetical. could change this to defaulting to createdAt when amount is the same
});
