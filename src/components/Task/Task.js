// Імпортуємо хук
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/operations';
// Імпортуємо генератор екшену
// import { toggleCompleted } from 'redux/tasksSlice';
import { MdClose } from 'react-icons/md';
import css from './Task.module.css';

export const Task = ({ task }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен видалення завдання
  const handleDelete = () => dispatch(deleteTask(task.id));

  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен перемикання статусу завдання
  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <div className={css.wrapper}>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <p>{task.text}</p>
      <button onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
    // <div className={css.wrapper}>
    //   <input
    //     type="checkbox"
    //     className={css.checkbox}
    //     checked={task.completed}
    //     onChange={handleToggle}
    //   />
    //   <p className={css.text}>{task.text}</p>
    //   <button className={css.btn} type="button" onClick={handleDelete}>
    //     <MdClose size={24} />
    //   </button>
    // </div>
  );
};
