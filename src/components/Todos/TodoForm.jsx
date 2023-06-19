import { useState } from 'react';
import Button from '../UI/Button';
import styles from './TodoForm.module.css';

console.log(styles);

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  function handleSubmitForm(e) {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue('');
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={handleSubmitForm}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Enter new todo"></input>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default TodoForm;
