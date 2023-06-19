import { RiTodoLine, RiDeleteBin6Line, RiCheckFill } from 'react-icons/ri';
import style from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className={style.todoBlock + ' ' + (todo.isCompleted ? style.completedTodo : '')}>
      <RiTodoLine className={style.todoIcon} />
      <h3 className={style.todoText}>{todo.text}</h3>
      <RiDeleteBin6Line
        className={style.todoDelete}
        onClick={() => deleteTodo(todo.id)}
      />
      <RiCheckFill className={style.todoCheck} onClick={() => toggleTodo(todo.id)}/>
    </div>
  );
}

export default Todo;
