
// import './App.css';
import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { APPUI } from './AppUI';

// const defoultTodos = [
//   {text: "LLorar con la LLorona", completed: false},
//   {text: "Completar curso de React.js", completed: false},
//   {text: "Cortar cebolla", completed: true},
//   {text: "Tomar agua", completed: true}
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defoultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {
 
  const { 
    item: todos,// renombramos la porpiedad del objeto
    saveItem: saveTodos,// renombramos la porpiedad del objeto
    loading, 
    error,
  } = useLocalStorage('TODOS_V1', []);

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
  <APPUI 
  todoCompleted = { todoCompleted }
  totalTodos = { totalTodos }
  searchValue = { searchValue }
  setSearchValue = { setSearchValue }
  searchedTodos = { searchedTodos }
  completeTodo = { completeTodo }
  deleteTodo = { deleteTodo }
  loading = { loading }
  error = { error }
  />
 )
}

export default App;
