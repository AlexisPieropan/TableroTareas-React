import React from 'react';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TaskItem = ({ task, taskComplete, eliminar }) => {
  const tacharTask = () => {
    taskComplete(task.id);
  };

  const eliminarItem = () => {
    eliminar(task.id);
  };

  return (
    <Card
      variant="outlined"
      style={{
        margin: '10px',
        marginBottom: '12px',
        maxWidth: '400px',
        backgroundColor: task.completed ? '#c8e6c9' : 'white', // Cambia a verde cuando la tarea esté completa
      }}
    >
      <CardContent style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton color="error" type="submit" aria-label="cancel" onClick={eliminarItem}>
          <CancelIcon />
        </IconButton>

        <IconButton color="success" type="submit" aria-label="cancel" onClick={tacharTask}>
          <CheckCircleIcon />
        </IconButton>

        <Typography
          variant="body1"
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            marginLeft: '10px',
            fontSize: '1.4rem', 
          }}
        >
          {task.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
