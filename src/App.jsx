import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskTable from './Components/TaskTable';

function App() {
  const [tasks, settasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [inputs, setInputs] = useState({
    id: Date.now(),
    title: "",
    desc: "",
    priority: "low",
    status: "pending"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  useEffect(() => {
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(existingTasks, "existingTasks")
    settasks(existingTasks);
  }, [])

  const submit = () => {
    if (selectedTask) {
      const updatedTasks = tasks.map((task) =>
        task.id === selectedTask ? inputs : task
      );
      settasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setSelectedTask(null);
      setInputs({
        id: Date.now(),
        title: "",
        desc: "",
        priority: "low",
        status: "pending"
      });
      return;
    }

    settasks([...tasks, inputs]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, inputs]));
    setInputs({
      id: Date.now(),
      title: "",
      desc: "",
      priority: "low",
      status: "pending"
    });
  }

  const handleUpdate = (id) => {
    const findTask = tasks.find((task) => task.id === id);
    setSelectedTask(id);
    if (findTask) {
      setInputs(findTask);
    }
  }
  return (
    <>

      <label htmlFor="">Title</label>
      <input type="text" name='title' value={inputs?.title} onChange={handleChange} />
      <br /><br />

      <label htmlFor="">Description</label>
      <textarea name="desc" id="" value={inputs?.desc} onChange={handleChange}></textarea>
      <br /><br />

      <label htmlFor="">Priority:</label>
      <br />

      <label htmlFor="">Low</label>
      <input type="radio" name="priority" value="low" checked={inputs?.priority === "low"} onChange={handleChange} />
      <br />

      <label htmlFor="">Medium</label>
      <input type="radio" name="priority" value="medium" checked={inputs?.priority === "medium"} onChange={handleChange} />
      <br />

      <label htmlFor="">High</label>
      <input type="radio" name="priority" value="high" checked={inputs?.priority === "high"} onChange={handleChange} />
      <br /><br />

      <label htmlFor="">Status:</label>
      <select name="status" value={inputs?.status} onChange={handleChange}>
        <option value={"pending"}>Pending</option>
        <option value="completed">Completed</option>
      </select>

      <br /><br />
      <button onClick={submit}>Submit</button>
      <br />
      {tasks?.length > 0 ? <TaskTable data={tasks} handleUpdate={handleUpdate} /> : null}
    </>
  )
}

export default App


// create add task form 
// title text
// descr area
// priority radio low medium high
// status dropdown pending, completed

// create a table for show taskslist 
// save task in localStorage  