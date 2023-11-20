import * as React from 'react';
import './tareas.css'
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const TaskItem = ({ task, eliminar }) => {
  

  const eliminarItem = () => {
    eliminar(task.id);
  };

  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>

      <IconButton color='error' type="submit" aria-label="cancel" onClick={eliminarItem}>
        <CancelIcon />
      </IconButton>
      <IconButton color='success' type="submit" aria-label="cancel" onClick={eliminarItem}>
        <CheckCircleIcon />
      </IconButton>
      {task.name}
      
    </div>
  );
};

export default TaskItem;