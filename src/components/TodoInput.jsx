

export default function TodoInput({handleAddTodos, todoValue, setTodoValue}){

    return(

        <header>
            <input type="text" placeholder="Enter a todo.." value={todoValue} onChange={(e) => {
                // getting and setting the value of the input field into the todoValue variable
                setTodoValue(e.target.value)
            }}/>
            <button onClick={() => {
                handleAddTodos(todoValue)
                // clearing the input field after submission
                setTodoValue("")
            }} className="add">Add New Todo</button>
        </header>
    )
}