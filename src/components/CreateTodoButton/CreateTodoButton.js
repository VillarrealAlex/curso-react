import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}){
    return(
      <button 
        className="todoButton"
        onClick={
          () => {
            setOpenModal(state => !state);
          }
        }
        >+</button>
    );
}

export { CreateTodoButton };