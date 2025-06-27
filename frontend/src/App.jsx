import React, { useState, useEffect } from 'react';
import TaskList from './pages/TaskList';
import TaskForm from './pages/TaskForm';
import './tailwind.css';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';


function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Fetch tasks from API
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (newTask) => {
    try {
      const response = await fetch('http://localhost:3000/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask)
      });
      const data = await response.json();
      setTasks([...tasks, data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      await fetch(`http://localhost:3000/api/tasks/${updatedTask.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask)
      });
      setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
        method: 'DELETE'
      });
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleEditClick = (task) => {
    setTaskToEdit(task);
  };

  const handleFormSubmit = (task) => {
    if (taskToEdit) {
      updateTask(task);
      setTaskToEdit(null);
    } else {
      addTask(task);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}
      style={{
        backgroundImage: `url(${darkMode ? '/task-dark-background.jpg' : '/task-light-background.jpg'})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black bg-opacity-40 min-h-screen">
        <div className="container mx-auto p-4">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">My Executive Assistant</h1>
            <button 
  onClick={() => setDarkMode(!darkMode)}
  className="p-2 rounded-full bg-gray-700 dark:bg-gray-700 text-white"
>
  {darkMode ? (
    <SunIcon className="h-5 w-5" />
  ) : (
    <MoonIcon className="h-5 w-5" />
  )}
</button>

          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TaskList 
                tasks={tasks} 
                onUpdateTask={updateTask} 
                onDeleteTask={deleteTask} 
                onEditTask={handleEditClick}
                darkMode={darkMode}
              />
            </div>
            <div>
              <TaskForm 
                onAddTask={handleFormSubmit} 
                taskToEdit={taskToEdit}
                darkMode={darkMode} 
              />
            </div>
          </div>
        </div>
        <footer className="text-center py-6 border-t mt-10 text-sm text-gray-200 dark:text-gray-400 dark:border-gray-700 transition-colors duration-300">
  © {new Date().getFullYear()} JOU Lifestyle. All rights reserved.
</footer>
 </div>
    </div>
  );
}

export default App;
