import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import TaskColumn from "./components/TaskColumn";

const oldTasks = localStorage.getItem("tasks");

console.log("oldTasks:", oldTasks);

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeStatus = (taskTitle, taskStatus) => {
    const newTasks = tasks.map((task) =>
      taskTitle === task.task ? { ...task, status: taskStatus } : task
    );
    setTasks(newTasks);
  };

  const onChangeSearch = (q) => {
    setSearchQuery(q);
  };

  const filterTasks = (tasks, sq) =>
    tasks.filter(
      (task) => task.task.includes(sq) || task.tags.find(tag=>tag.includes(sq))
    );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  return (
    <div className="app">
      <Header setTasks={setTasks} />
      <input
        type="search"
        className="search_input"
        placeholder="Search..."
        onChange={(e) => onChangeSearch(e.target.value)}
      />
      <div className="app_main">
        <TaskColumn
          tasks={filterTasks(tasks, searchQuery)}
          title="To Do"
          status="todo"
          handleDelete={handleDelete}
          onChangeStatus={onChangeStatus}
          onChangeSearch={onChangeSearch}
        />
        <TaskColumn
          tasks={filterTasks(tasks, searchQuery)}
          title="Doing"
          status="doing"
          handleDelete={handleDelete}
          onChangeStatus={onChangeStatus}
          onChangeSearch={onChangeSearch}
        />
        <TaskColumn
          tasks={filterTasks(tasks, searchQuery)}
          title="Done"
          status="done"
          handleDelete={handleDelete}
          onChangeStatus={onChangeStatus}
          onChangeSearch={onChangeSearch}
        />
      </div>
    </div>
  );
};

export default App;
