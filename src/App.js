// Componente Principal
import React, { useState, useEffect } from 'react';
import TaskForm from './components/formulario/formulario';
import TaskList from './components/listTareas/listTareas';
import './App.css'
import { Card, Container, Typography } from '@mui/material';


const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('Tareas actualizadas:', tasks);
  }, [tasks]);

  const eliminarTask = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const agregarTarea = newTask => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const taskComplete = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
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
        <TaskForm agregarTarea={agregarTarea} />
        <TaskList tasks={tasks} eliminar={eliminarTask} taskComplete={taskComplete} />
      </Card>
    </Container>
  );
};

export default App;



