// Componente Principal
import React, { useState, useEffect } from 'react';
import TaskForm from './components/formulario/formulario';
import TaskList from './components/listTareas/listTareas';


const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Este efecto se ejecutará cada vez que el estado de las tareas cambie
    console.log('Tareas actualizadas:', tasks); // para verificar por consola el cambio
  }, [tasks]);

  
  //eliminacion
  const eliminarTask = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  //add
  const agregarTarea = newTask => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskList tasks={tasks}  eliminar={eliminarTask} />
      <TaskForm agregarTarea={agregarTarea} />
    </div>
  );
};

export default App;
