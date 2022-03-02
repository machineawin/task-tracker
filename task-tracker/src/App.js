import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

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

  return (
    <div className='container'>
      <Header />
      <Tasks tasks = {tasks}/>
    </div>
  );
}

export default App;
