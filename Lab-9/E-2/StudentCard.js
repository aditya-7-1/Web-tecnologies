import React from 'react';

const StudentCard = (props) => {
  return (
    <div className="card">
      <h3>{props.name}</h3> [cite: 19]
      <p>Dept: {props.department}</p> [cite: 19]
      <p>Marks: {props.marks}</p> [cite: 19]
    </div>
  );
};

export default StudentCard; [cite: 24]