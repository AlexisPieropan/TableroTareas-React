import React, { useState } from 'react';
import './formulario.css'

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
      <input type="text" value={newTask} onChange={cambioEntrada} />
      <button type="submit">Agregar tarea</button>
    </form>
  );
};

export default TaskForm;



