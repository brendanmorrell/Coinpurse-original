import React from 'react';

export default ({ text, sortBy, startDate, endDate }) => (
  <div>
    <h1>Active Filters: {!text && !startDate && !endDate && `None`}</h1>
    {text && <p>Text Filter: {text}</p>}
    {startDate && <p>Start Date: {startDate}</p>}
    {endDate && <p>End Date: {endDate}</p>}
    <h2>Sorting By: {sortBy}</h2>
  </div>
);
