import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      <p>This is my EditExpenseComponent!</p>
      <br />
      editing expense with id of {props.match.params.id}
    </div>);
};

export default EditExpensePage;
