import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
// import './App.css';
import React from 'react';
import { useLocalStorage } from './useLocalStorage';

// const defoult = [
//   {text: "LLorar con la LLorona", completed: false},
//   {text: "Completar curso de React.js", completed: false},
//   {text: "Cortar cebolla", completed: true},
//   {text: "Tomar agua", completed: true}
// ]

// localStorage.setItem('TODOS_V1', defoult);
// localStorage.removeItem('TODOS_V1');

function App() {
 
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  console.log("valores: ", searchValue);

  const todoCompleted = todos.filter(todo =>
    !!todo.completed //doble negacion para saber los valores falso o verdaderos
  ).length;
  const totalTodos = todos.length;

  //estado derivado de busqueda de Todos
  // usamos filter oara buscar las concidencias
  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  );

  const completeTodo = (text) =>{
    const newTodos = [...todos]; // crea copia del array de todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    ) //buscar el texto(el indice en el array)
    newTodos[todoIndex].completed = true // pone en true el todo
    saveTodos(newTodos)
  };

  const deleteTodo = (text) =>{
    const newTodos = [...todos]; // crea copia del array de todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    ) //buscar el texto(el indice en el array)
    newTodos.splice(todoIndex, 1); //  eliminar 
    saveTodos(newTodos)
  };

  return (
    <React.Fragment>
      <TodoCounter completed={todoCompleted} total={totalTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodo(todo.text)}
            onDeleted={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton  />

    </React.Fragment>

  );
}

export default App;
