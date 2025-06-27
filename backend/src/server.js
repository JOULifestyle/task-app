const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const corsMiddleware = require('./middleware/corsMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(corsMiddleware());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/tasks', taskRoutes);

// Error handling
app.use(errorMiddleware);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});