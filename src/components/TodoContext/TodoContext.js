import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos, // renombramos la porpiedad del objeto
    saveItem: saveTodos, // renombramos la porpiedad del objeto
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);


  const todoCompleted = todos.filter(
    (todo) => !!todo.completed //doble negacion para saber los valores falso o verdaderos
  ).length;
  const totalTodos = todos.length;

  //estado derivado de busqueda de Todos
  // usamos filter oara buscar las concidencias
  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const addTodo = (text) => {
    const newTodos = [...todos]; // crea copia del array de todos
    newTodos.push({
      text,
      completed: false,
    });

    saveTodos(newTodos);

  }

  const completeTodo = (text) => {
    const newTodos = [...todos]; // crea copia del array de todos
    const todoIndex = newTodos.findIndex((todo) => todo.text === text); //buscar el texto(el indice en el array)
    newTodos[todoIndex].completed = true; // pone en true el todo
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos]; // crea copia del array de todos
    const todoIndex = newTodos.findIndex((todo) => todo.text === text); //buscar el texto(el indice en el array)
    newTodos.splice(todoIndex, 1); //  eliminar
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todoCompleted,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal, 
        setOpenModal,
        addTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );

}


export { TodoContext, TodoProvider };
