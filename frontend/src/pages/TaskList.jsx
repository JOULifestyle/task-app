import React from 'react';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask,  onEditTask,darkMode }) => {
  return (
    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
      <h2 className="text-xl font-bold mb-4">Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-center py-4">No tasks found.</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li 
              key={task.id} 
              className={`p-3 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border-l-4 ${
                task.completed 
                  ? darkMode ? 'border-green-500' : 'border-green-400' 
                  : darkMode ? 'border-gray-600' : 'border-gray-300'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{task.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{task.description}</p>
                  {task.dueDate && (
  <p className="text-sm text-blue-500">
    Due: {task.dueDate}
  </p>
)}

 <p className={`mt-1 text-sm font-medium ${task.completed ? 'text-green-600' : 'text-yellow-600'}`}>
    {task.completed ? '✅ Completed' : '⏳ Pending'}
  </p>

                </div>
                <div className="flex space-x-2">
                 <button
  onClick={() => onUpdateTask({ ...task, completed: !task.completed })}
  className={`p-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
  aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
>
  {task.completed ? (
    // ✅ Checked box icon
    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414L9 13.414l4.707-4.707z" />
    </svg>
  ) : (
    // ☐ Empty checkbox
    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="5" y="5" width="14" height="14" rx="2" ry="2" />
    </svg>
  )}
</button>

                  <button 
                    onClick={() => onEditTask(task)}
                    className="text-yellow-500 hover:underline mr-2"
                     >
  Edit
                 </button>
                  <button
                    onClick={() => onDeleteTask(task.id)}
                    className={`p-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                    aria-label="Delete task"
                  >
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.664-3.058L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;