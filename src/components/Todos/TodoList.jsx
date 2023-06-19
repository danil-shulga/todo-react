import Todo from './Todo';
import style from './TodoList.module.css';

function TodoList({ todoList, deleteTodo, toggleTodo }) {
  return (
    <div className={style.todoList}>
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          deleteTodo={deleteTodo}
          todo={todo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
