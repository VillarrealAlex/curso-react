
// import './App.css';
import React from 'react';
import { APPUI } from './AppUI';
import { TodoProvider } from '../TodoContext/TodoContext';

function App() {
 

 return (
  <TodoProvider>
    <APPUI />
  </TodoProvider>
 )
}

export default App;
