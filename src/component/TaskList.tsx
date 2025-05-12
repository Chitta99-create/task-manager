import { useEffect } from 'react';
import { fetchTasks, setFilter } from '../redux/tasksSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import TaskItem from './TaskItem';

const TaskList = () => {
  const dispatch = useAppDispatch();
  const { tasks, filter } = useAppSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
        <button onClick={() => dispatch(setFilter('pending'))}>Pending</button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
