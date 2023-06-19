import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodoHandled(text) {
    if (text) {
      setTodoList([...todoList, { id: uuidv4(), text, isCompleted: false }]);
    }
  }

  function deleteTodoHandler(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function toggleTodoHandler(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  }

  function resetTodosHandler() {
    setTodoList([]);
  }

  function deleteCompletedTodosHandler() {
    setTodoList(todoList.filter((todo) => !todo.isCompleted));
  }

  const completedTodosCount = todoList.filter(todo => todo.isCompleted).length

  return (
    <div className="App">
      <h1 className="heading">Todo App</h1>
      <TodoForm addTodo={addTodoHandled} />

      {!todoList.length ? (
        <h2>Todo list is empty</h2>
      ) : (
        <>
          <TodosActions
            completedTodosExist={!!completedTodosCount}
            resetTodos={resetTodosHandler}
            deleteCompletedTodos={deleteCompletedTodosHandler}
          />
          <TodoList
            deleteTodo={deleteTodoHandler}
            todoList={todoList}
            toggleTodo={toggleTodoHandler}
          />
        </>
      )}
      <h2>{completedTodosCount ? `You have completed ${completedTodosCount} ${completedTodosCount > 1 ? 'todos' : 'todo'}` : ``}</h2>
    </div>
  );
}

export default App;
