import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default ({ id, description, amount, createdAt }) => {
  // Only show year if different from current year
  let dateDisplay;
  const currentYear = moment().format('YYYY');
  const createdAtYear = moment(createdAt).format('YYYY');
  if (currentYear === createdAtYear) {
    dateDisplay = moment(createdAt).format('MMM Do');
  } else {
    dateDisplay = moment(createdAt).format('MMM Do, YYYY');
  }

  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{ description }</h3>
      </Link>
      <p>{ amount } - { dateDisplay }</p>
    </div>
  );
};
