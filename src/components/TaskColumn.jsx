import React, {useState} from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
const TaskColumn = ({ tasks, title, status, handleDelete, onChangeStatus, onChangeSearch }) => {
  const [foundedTasks, setfoundedTasks] = useState(tasks)

  console.log(tasks)
  return (
    <section className="task_column">
      <h2>{title}</h2>

      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
              taskStatus={task.status}
              onChangeStatus={onChangeStatus}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
