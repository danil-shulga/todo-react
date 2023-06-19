import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiRefreshCw } from 'react-icons/fi';
import Button from '../UI/Button';

function TodosActions({ resetTodos, deleteCompletedTodos, completedTodosExist }) {
  return (
    <>
      <Button
        title="Reset Todos"
        onClick={resetTodos}>
        <FiRefreshCw />
      </Button>
      <Button
        disabled={!completedTodosExist}
        title="Clear completed Todos"
        onClick={deleteCompletedTodos}>
        <RiDeleteBin6Line />
      </Button>
    </>
  );
}

export default TodosActions;
