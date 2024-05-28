import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defoult = [
  {text: "LLorar con la LLorona", completed: false},
  {text: "Completar curso de React.js", completed: false},
  {text: "Cortar cebolla", completed: true},
  {text: "Tomar agua", completed: true}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />
      
      <TodoList>
        {defoult.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton  />

    </React.Fragment>

  );
}

export default App;
