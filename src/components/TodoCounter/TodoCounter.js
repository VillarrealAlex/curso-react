import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter({ total, completed }){
    const {
        todoCompleted,
        totalTodos,
    } = React.useContext(TodoContext);

    return(
        <h1 className='TodoCounter'>
            Has completado <span> { todoCompleted } </span> de <span> { totalTodos } </span> TODOs
        </h1>
    );
}
// export nombrados, tener el componente especifico
  export  { TodoCounter };
  