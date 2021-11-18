import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import TaskList from "./components/Tasklist/tasklist";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};
function App() {
  const [tasks, setTasks] = useState([]); // Iniciado com array vazio
  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state,
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  // Props
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="Pendentes"
          onAddTask={addTask}
          taskState="Pendentes"
          tasks={tasks.filter((t) => t.state === "Pendentes")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Andamento"
          onAddTask={addTask}
          taskState="Andamento"
          tasks={tasks.filter((t) => t.state === "Andamento")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Concluido"
          onAddTask={addTask}
          taskState="Concluido"
          tasks={tasks.filter((t) => t.state === "Concluido")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
