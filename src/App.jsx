import { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

function App() {
   // array of todos

const [todos, setTodos] = useState([])
const [todoValue, setTodoValue] = useState("")




// to store the todos in local storage and retrieving them on site reload
useEffect(() =>{
  if(!localStorage) return

  let localTodos = localStorage.getItem('todos')
  if(!localTodos) return

  localTodos = JSON.parse(localTodos).todos
  setTodos(localTodos)
},[])

function handleAddTodos(newTodo) {
  // checking for spaces before the inputed todo and trimming it
  newTodo = newTodo.trim()
  // preventing the user from entering an empty todo
  if(newTodo === "" ) return

  // updating the data in local storage
  
  setTodos (currentTodos => {
    let newTodos = [...currentTodos, { name: newTodo, completed: false, id: crypto.randomUUID() }]
    persitData(newTodos)
    return newTodos
  })


}

// to always store the updated todos in local storage
function persitData(newTodos){
  localStorage.setItem('todos', JSON.stringify({ todos: newTodos}))
}

function handleToggleDone(todoId, completed) {

  setTodos(currentTodos => {
    const newTodos =  currentTodos.map(todo => {
      if(todo.id === todoId) return {...todo, completed}

      return todo
    })

    persitData(newTodos)

    return newTodos
  })

}

function handleDeleteTodo(id){
  setTodos(currentTodos => {
    const newTodos = currentTodos.filter((todo) => todo.id !== id)
    persitData(newTodos)
    return newTodos
  })
}

function handleEditTodo(index){
  const objectValue = todos.filter((todo => todo.id === index))

  setTodoValue(objectValue[0].name)
  handleDeleteTodo(index)
}


  
  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue}/>
      <TodoList todos={todos} handleToggleDone={handleToggleDone} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
    </>
  )
}

export default App
