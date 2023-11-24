// App.js
import React, { useState, useEffect } from 'react';
import TaskForm from './components/formulario/formulario';
import TaskList from './components/listTareas/listTareas';
import './App.css';
import { Card, Container, Typography } from '@mui/material';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (storedTasks.length > 0) {
      setTasks(storedTasks);
    }
  }, []); // Dejar el segundo argumento como un array vacío para que se ejecute solo en el montaje inicial

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const eliminarTask = taskId => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== taskId);
      return updatedTasks;
    });
  };

  const agregarTarea = newTask => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks, newTask];
      return updatedTasks;
    });
  };

  const taskComplete = taskId => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      return updatedTasks;
    });
  };

  const eliminarTodasTask = () => {
    setTasks([]);
    localStorage.removeItem('tasks');
  };

  return (
    <Container
      className='centrarCont'
      component="main"
      maxWidth="xs"
      style={{ marginTop: '50px' }}
    >
      <Card elevation={3} style={{ padding: '20px' }}>
        <Typography  align="center" gutterBottom style={{
            fontSize: '1.7rem', 
            marginBottom: '15px',
          }}>
          Lista de Tareas
        </Typography>
        <TaskForm agregarTarea={agregarTarea} eliminarTodasTask={eliminarTodasTask} />
        <TaskList tasks={tasks} eliminar={eliminarTask} taskComplete={taskComplete} />
      </Card>
    </Container>
  );
};

export default App;
