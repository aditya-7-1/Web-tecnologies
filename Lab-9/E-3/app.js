import React from 'react';
import './App.css';
import StudentProfile from './StudentProfile';
import StudentList from './StudentList';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <StudentProfile />
      <hr />
      <StudentList />
      <hr />
      <Counter />
    </div>
  );
}

export default App;