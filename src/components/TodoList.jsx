import TodoCard from "./TodoCard";

export default function TodoList({todos, handleToggleDone, handleDeleteTodo, handleEditTodo}) {


    return (
        <ul className="main">
            {todos.map((todo) => {
                return(
                    <TodoCard key={todo.id} todo={todo.name} index={todo.id} completed ={todo.completed} handleToggleDone={handleToggleDone} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
                )
            })}
        </ul>
    )
}