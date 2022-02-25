
const tasks = [
    {
        id: 1,
        text: 'Doctors',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Dentists',
        day: 'Mar 5th at 3:30pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'Nurses',
        day: 'Apr 5th at 4:30pm',
        reminder: true,
    }
]

const Tasks = () => {
  return (
    <>
        {tasks.map((task) => (
            <h3>{task.text}</h3>
        ) )}
    </>
  )
}

export default Tasks