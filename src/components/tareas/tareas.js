import React from 'react';

const TaskItem = ({ task, eliminar }) => {
  

  const eliminarItem = () => {
    eliminar(task.id);
  };

  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.name}
      <button onClick={eliminarItem}>Eliminar</button>
    </div>
  );
};

export default TaskItem;