import './TodoItem.css';
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from 'react-icons/fa6';

function TodoItem(props){
    return(
      
      <li className="TodoItem">
        {/* <span 
          className={`Icon Icon-check ${ props.completed && "Icon-check--active" }`}
          onClick={props.onCompleted}
          >V</span> */}
          <FaCheckCircle 
           className={`Icon Icon-check ${ props.completed && "Icon-check--active" }`}
           onClick={props.onCompleted}
        />
        <p className={`TodoItem-p ${ props.completed && "TodoItem-p--complete" }`}>{props.text}</p>
        {/* <span 
          className="Icon Icon-delete"
          onClick={props.onDeleted}
          >X</span> */}
          <FaCircleXmark 
          className="Icon Icon-delete"
          onClick={props.onDeleted}
        />
      </li>
      
    );
}

export { TodoItem };