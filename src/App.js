import {useState} from 'react'
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {description: 'do mvp', priority: 'high', id:1},
    {description: 'do extension', priority: 'low',id:2},
    {description: 'do pda', priority: 'high',id:3},
  ])

  const [newTask, setNewTask] = useState('')
  const [newPriority, setNewPriority] = useState('')
  const handleTaskSubmit = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({
      description: newTask,
      priority: newPriority,
      id: Date.now()
    })

    setTasks(copyTasks)
    setNewTask('')
    setNewPriority('low');
  }

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const handlePriorityChange = (event) => {
    setNewPriority(event.target.value);
  }

  return (
    <div className="App">
    <h1>List of things that must be done</h1>
    <ul>
      {tasks.map(task => {
        return (
          <li className={task.whichPriority ? "low" : "high"}>{task.description} {task.priority}</li>
        )
      })}
    </ul>

    <form onSubmit={handleTaskSubmit}>
      <label htmlFor="new-task">Add a new task:</label>
      <input type="text" id="new-task" onChange={handleTaskInput} value={newTask}/>
      <input type="radio" name="priority" id="high-priority" value="high" onChange={handlePriorityChange} checked={newPriority === "high"}/>
      <label for="high-priority">High Priority</label>
      <input type="radio" name="priority" id="low-priority" value="low" onChange={handlePriorityChange} checked={newPriority === "low"}/>
      <label for="low-priority">Low Priority</label>
      <button>Save Task</button>
    </form>
    </div>
  );
}

export default App;
