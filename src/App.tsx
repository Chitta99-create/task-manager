import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Task Manager</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
