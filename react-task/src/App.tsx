import React from 'react';
import './App.css';
import ClassComponent from './components/q1_class';
import FunctionComponentExample from './components/q1_function';

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <FunctionComponentExample name="John" />
    </div>
  );
}

export default App;
