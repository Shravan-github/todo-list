import React from 'react';
import './App.css';
import InputSection from './components/InputSection';

const App: React.FC = () => {
  return (
    <div className="App">
    <span className="heading">Todo List</span>
    <InputSection/>
    </div>
  );
}

export default App;
