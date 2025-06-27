# Task API App Documentation

## Project Structure

```
task-api-app/
├── backend/                  # Node.js/Express backend
│   ├── src/                  # Source code
│   │   ├── server.js         # Entry point
│   │   ├── routes/           # API routes
│   │   │   └── taskRoutes.js # Task CRUD routes
│   │   ├── controllers/      # Business logic
│   │   │   └── taskController.js
│   │   ├── models/           # Data structures
│   │   │   └── taskModel.js
│   │   ├── middleware/       # Error handling, CORS
│   │   │   ├── errorMiddleware.js
│   │   │   └── corsMiddleware.js
│   │   ├── config/           # Config files
│   │   │   └── db.js         # Database config (SQLite/Mongo)
│   │   └── utils/            # Helper functions
│   │       └── validation.js
│   ├── .env                  # Environment variables
│   ├── package.json          # Backend dependencies
│   └── postman_collection.json # API testing collection
│
├── frontend/                 # React frontend
│   ├── public/               # Static assets
│   ├── src/                  # React source code
│   │   ├── assets/           # Images, icons
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Page components
│   │   │   ├── TaskList.js
│   │   │   ├── TaskDetail.js
│   │   │   └── TaskForm.js
│   │   ├── services/         # Axios API calls
│   │   │   └── taskService.js
│   │   ├── styles/           # Tailwind config
│   │   │   └── tailwind.config.js
│   │   ├── types/            # TypeScript interfaces
│   │   │   └── task.d.ts
│   │   └── App.jsx           # Main app component
│   ├── vite.config.ts        # Vite config
│   └── package.json          # Frontend dependencies
│
├── docs/                     # Documentation
│   ├── postman_collection.json
│   └── README.md             # Setup and usage instructions
│
└── .gitignore
```

## Setup Instructions

### Backend (Node.js)
1. Navigate to `backend/`
2. Install dependencies: `npm install`
3. Start server: `npm start`
4. Use Postman collection in `postman_collection.json` to test API

### Frontend (React)
1. Navigate to `frontend/`
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Access app at `http://localhost:5173`

## Testing Backend Endpoints

### Using Postman
1. Import `postman_collection.json` into Postman
2. Use the following requests:
   - **GET /tasks**: Fetch all tasks
   - **GET /tasks/:id**: Fetch a specific task
   - **POST /tasks**: Create a new task (Body: JSON with `title` and `description`)
   - **PUT /tasks/:id**: Update a task (Body: JSON with updated fields)
   - **DELETE /tasks/:id**: Delete a task

### Using cURL
Example to create a task:
```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Sample Task", "description": "This is a sample task"}'
```

### Using Insomnia
1. Import the Postman collection into Insomnia
2. Run requests as described above

## Technologies Used
- Backend: Node.js, Express, SQLite/MongoDB, CORS
- Frontend: React, Vite, Tailwind CSS, Axios