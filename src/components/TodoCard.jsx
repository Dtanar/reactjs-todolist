
export default function TodoCard({todo, index,completed, handleToggleDone, handleDeleteTodo, handleEditTodo,}) {

    return (
        <li className="todoItem">
            <input className="check" type="checkbox" data-list-item-checkbox checked={completed} onChange={e => handleToggleDone(index, e.target.checked)} />
            <p className="text">{todo}</p>
            <div className="actionsContainer">
                
                <i className="fa-solid fa-pen-to-square" onClick={() => handleEditTodo(index)}></i>
                <i className="fa-solid fa-trash-can delete" onClick={() =>  handleDeleteTodo(index)}></i>
            </div>
        </li>
    )
}
