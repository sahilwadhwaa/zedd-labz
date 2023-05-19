import React from 'react';
import './App.css';
import ClassComponent from './components/q1_class';
import FunctionComponentExample from './components/q1_function';
import FunctionComponentEx from './components/restQues';

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <FunctionComponentExample name="John" />
      <FunctionComponentEx />
    </div>
  );
}

export default App;
