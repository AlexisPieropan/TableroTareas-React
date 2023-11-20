import React, { useState } from 'react';
import './formulario.css'
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';



const TaskForm = ({ agregarTarea }) => {
  const [newTask, setNewTask] = useState('');

  const cambioEntrada = event => {
    setNewTask(event.target.value);
  };

  const envio = event => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      agregarTarea({ id: Date.now(), name: newTask, completed: false });
      setNewTask('');
    }
  };

  return (
    <form onSubmit={envio}>
      <TextField size='small' id="outlined-basic" label="Agregar Tarea" variant="outlined" type="text" value={newTask} onChange={cambioEntrada}/>
      <IconButton color='secondary' type="submit" aria-label="add">
        <AddCircleIcon />
      </IconButton>
    </form>
    
  );
};

export default TaskForm;



