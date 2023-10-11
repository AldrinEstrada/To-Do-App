import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

// const initialTasks = [
//   {
//     title: 'Cleaning house',
//     done: false,
//     id: 1,
//   },
//   {
//     id: 2,
//     title: 'Running laundry',
//     done: false,
//   }
// ]

export default function List() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);

    // setTasks([...tasks, task])
  }
  function removeTask(chore) {
    const updatedTasks = tasks.filter(function (task) {
      return task.id !== chore.id;
    });
    setTasks(updatedTasks);
  }

  function toggleDone(chore) {
    const updatedTasks = tasks.map(function (task) {
      if (task.id === chore.id) {
        task.done = !task.done;

        return task;
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            remove={removeTask}
            toggleDone={toggleDone}
          />
        ))}
      </ul>
      <TaskForm addTask={addTask} />
    </div>
  );
}
