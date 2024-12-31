import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onToggleComplete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggleComplete={onToggleComplete} />
      ))}
    </div>
  );
};

export default TaskList;
