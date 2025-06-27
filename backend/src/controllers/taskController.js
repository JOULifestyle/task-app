const tasks = [];

// Get all tasks
exports.getAllTasks = (req, res, next) => {
  try {
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

// Get task by ID
exports.getTaskById = (req, res, next) => {
  try {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    
    if (!task) {
      const error = new Error('Task not found');
      error.status = 404;
      throw error;
    }
    
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

// Create new task
exports.createTask = (req, res, next) => {
  try {
    const { title, description, completed, dueDate } = req.body;
    
    if (!title || !description) {
      const error = new Error('Title and description are required');
      error.status = 400;
      throw error;
    }
    
    const newTask = {
      id: Date.now(),
      title,
      description,
        completed: false,
       dueDate
    };
    
    tasks.push(newTask);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

// Update task
exports.updateTask = (req, res, next) => {
  try {
    const taskId = parseInt(req.params.id);
    const { title, description, completed, dueDate } = req.body;
    const task = tasks.find(t => t.id === taskId);
    
    if (!task) {
      const error = new Error('Task not found');
      error.status = 404;
      throw error;
    }
    
    if (title) task.title = title;
    if (description) task.description = description;
    if (completed !== undefined) task.completed = completed;
    if (dueDate) task.dueDate = dueDate;
    
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

// Delete task
exports.deleteTask = (req, res, next) => {
  try {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex === -1) {
      const error = new Error('Task not found');
      error.status = 404;
      throw error;
    }
    
    tasks.splice(taskIndex, 1);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    next(error);
  }
};