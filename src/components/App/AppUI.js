import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

function APPUI({
  // todoCompleted,
  // totalTodos,
  // searchValue,
  // setSearchValue,
  // searchedTodos,
  // completeTodo,
  // deleteTodo,
  // loading,
  // error
}) {
  return (
    <React.Fragment>
      
      <TodoCounter />
      <TodoSearch  />

      <TodoContext.Consumer>
        {({
            searchedTodos,
            completeTodo,
            deleteTodo,
            loading,
            error
        }) => (
          <TodoList>
            {loading && <TodosLoading /> }
            {error && <TodosError />}
            { ( !loading && searchedTodos.length === 0   ) && <EmptyTodos /> }

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCompleted={() => completeTodo(todo.text)}
                onDeleted={() => deleteTodo(todo.text)}
              />
            ))}
        </TodoList>
        )}
      </TodoContext.Consumer>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export {APPUI};