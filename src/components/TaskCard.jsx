import React, { useEffect, useState } from "react";
import Tag from "./Tag";
import DeleteIcon from "../assets/icons8-delete.svg";
import "./TaskCard.css";

const TaskCard = ({
  title,
  tags,
  handleDelete,
  index,
  taskStatus,
  onChangeStatus,
}) => {
  const handleChange = (e) => {
    onChangeStatus(title, e.target.value);
  };

  return (
    <div className="task_card">
      <p className="tag_text">{title}</p>
      <select
        value={taskStatus}
        className="task_status"
        name="status"
        onChange={handleChange}
      >
        <option value="todo">To Do</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
      <div className="bottom_line_card">
        <div className="tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>
        <img
          className="icon_delete"
          src={DeleteIcon}
          onClick={() => handleDelete(index)}
        />
      </div>
    </div>
  );
};

export default TaskCard;
