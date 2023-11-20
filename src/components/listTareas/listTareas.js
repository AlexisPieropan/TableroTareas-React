import React from 'react';
import TaskItem from '../tareas/tareas';
import './listTareas.css'


const TaskList = ({ tasks, eliminar }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          eliminar={eliminar}
        />
      ))}
    </div>
  );
};

export default TaskList;