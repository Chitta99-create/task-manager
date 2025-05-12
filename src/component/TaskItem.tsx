import { Task } from '../types/Task';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/tasksSlice';

const TaskItem = ({ task }: { task: Task }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </li>
  );
};

export default TaskItem;
