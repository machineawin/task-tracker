import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState ([
    {
        id:1,
        text: 'Doctors',
        time: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id:2,
        text: 'Dentists',
        time: 'Mar 5th at 3:30pm',
        reminder: false,
    },
    {
        id:3,
        text: 'Nurses',
        time: 'Apr 5th at 4:30pm',
        reminder: true
        },

  ]);

  //Delete Task

  const deleteTask = (id) => {
    setTasks (tasks.filter((task) => task.id !== id))
  };

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));    
  };

  return (
    <div className='container'>
      <Header />
      <AddTask />
      {tasks.length>0 ? ( <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>) : 'No tasks to show' }
    </div>
  );
}

export default App;
