import React from 'react';
import TaskItem from '../tareas/tareas';
import './listTareas.css'


const TaskList = ({ tasks, eliminar, taskComplete }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          eliminar={eliminar}
          taskComplete={taskComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;