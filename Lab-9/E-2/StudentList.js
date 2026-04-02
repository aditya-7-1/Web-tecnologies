import React from 'react';
import StudentCard from './StudentCard'; [cite: 24]

const StudentList = () => {
  return (
    <div className="student-list">
      <h2>Student Directory</h2> [cite: 21]
      <StudentCard name="Aditya" department="IT" marks="85" /> [cite: 18, 20]
      <StudentCard name="Bob" department="ECE" marks="92" /> [cite: 18, 20]
      <StudentCard name="Charlie" department="CSE" marks="78" /> [cite: 18, 20]
    </div>
  );
};

export default StudentList; [cite: 24]