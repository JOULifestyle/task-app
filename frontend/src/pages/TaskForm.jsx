import React, { useEffect, useState } from 'react';

const TaskForm = ({ onAddTask,  taskToEdit, darkMode }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
       setDueDate(taskToEdit.dueDate || '');
    }
  }, [taskToEdit]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
    const taskData = {
      title,
      description,
      dueDate,
      completed: false,
      ...(taskToEdit && { id: taskToEdit.id })  // include id if editing
    };

    onAddTask(taskData);

    // Clear form only after submit
    setTitle('');
    setDescription('');
     setDueDate('');
  }
};

  return (
    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
      <h2 className="text-xl font-bold mb-4">{taskToEdit ? 'Edit Task' : 'Add New Task'}</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 border rounded ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300'
            }`}
            placeholder="Enter task title"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            className={`w-full p-2 border rounded ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300'
            }`}
            placeholder="Enter task description"
            required
          />
        </div>
        <div>
  <label htmlFor="dueDate" className="block text-sm font-medium mb-1">
    Due Date
  </label>
  <input
    type="date"
    id="dueDate"
    value={dueDate}
    onChange={(e) => setDueDate(e.target.value)}
    className={`w-full p-2 border rounded ${
      darkMode 
        ? 'bg-gray-700 border-gray-600 text-white' 
        : 'bg-white border-gray-300'
    }`}
  />
</div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          {taskToEdit ? 'Update Task' : 'Add Task'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;