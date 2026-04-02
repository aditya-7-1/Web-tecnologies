import React from 'react';

const StudentProfile = () => {
  const name = "Aditya"; [cite: 7]
  const department = "Computer Science"; [cite: 7]
  const year = "3rd Year"; [cite: 7]
  const section = "A"; [cite: 7]

  return (
    <div className="profile-container">
      <h1>Student Profile</h1> [cite: 9]
      <p><strong>Name:</strong> {name}</p> [cite: 8, 9]
      <p><strong>Department:</strong> {department}</p> [cite: 8, 9]
      <p><strong>Year:</strong> {year}</p> [cite: 8, 9]
      <p><strong>Section:</strong> {section}</p> [cite: 8, 9]
    </div>
  );
};

export default StudentProfile; [cite: 10]