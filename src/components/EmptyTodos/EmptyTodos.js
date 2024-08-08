import './EmptyTodos.css';

function EmptyTodos(){

    return(
        <div className="no-content-container">
        <div className="no-content-icon">🚀</div>
        <p className="no-content-message">No hay contenido para mostrar!</p>
    </div>

    );
}

export { EmptyTodos };
  