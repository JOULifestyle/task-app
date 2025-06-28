# My Executive Assistant App Documentation-- By Israel Olasehinde with Kilocode.ai

This is a full-stack Task Management App with a strong focus on the backend. It features a **Node.js + Express.js** REST API that powers a React + Tailwind frontend. The backend handles task operations including creation, editing, deletion, and retrieving.

> ℹ️ This project used AI assistance during development. See [`KiloCodePrompt.md`](./KiloCodePrompt.md) for prompt history.


## Purpose

The AI was used to:
- Draft a professional and backend-focused `README.md`
- Provide endpoint testing examples
- Suggest structure and error handling strategies

All code was reviewed, edited, and verified by the developer before final use.



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
│   │   ├── middleware/       # Error handling, CORS
│   │   │   ├── errorMiddleware.js
│   │   │   └── corsMiddleware.js
│   ├── package.json          # Backend dependencies
│   └── postman_collection.json # API testing collection
│
├── frontend/                 # React frontend
│   ├── public/               # Static assets
│   ├── src/                  # React source code
│   │   ├── pages/            # Page components
│   │   │   ├── TaskList.js
│   │   │   └── TaskForm.js
│   │   ├── main.jsx          
│   │   └── App.jsx           # Main app component
│   ├── vite.config.ts        # Vite config
│   |── package.json          # Frontend dependencies
|   |── tailwind.config.js      # Tailwind config
│
├── docs/                     # Documentation
│   |── README.md             # Setup and usage instructions
│   |__ KiloCodePrompt.md
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
   - **GET api/tasks**: Fetch all tasks
   - **GET api/tasks/:id**: Fetch a specific task
   - **POST api/tasks**: Create a new task (Body: JSON with `title` and `description`)
   - **PUT api/tasks/:id**: Update a task (Body: JSON with updated fields)
   - **DELETE api/tasks/:id**: Delete a task

### Using cURL
Example to create a task:
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Sample Task", "description": "This is a sample task", "dueDate": "yyyy--mm-dd",  "completed": "false"}'
```

### Using Insomnia
1. Import the Postman collection into Insomnia
2. Run requests as described above

## Technologies Used
- Backend: Node.js, Express, CORS
- Frontend: React, Vite, Tailwind CSS, Axios

